import { Layout } from "../components/Layout/Layout";
import { getAllBastards } from "../client";
import { HouseListItem } from "../components/HouseListItem";
import { Card, Row, Col } from "../elements";
import Router from "next/router";
import { redirect } from "../utils";
import Page from "../types/page";
import CharacterCard from "../elements/CharacterCard";

const CardUl = Card("ul");
const Home: Page<any> = ({ bastards }) => (
  <Layout>
    <Row>
      {bastards.map(char => (
        <Col key={char._id} cols={4}>
          <CharacterCard {...{ ...char, slug: char.name.replace(/ /g, "_") }} />
        </Col>
      ))}
    </Row>
  </Layout>
);

Home.getInitialProps = async ({ res }) => {
  try {
    const bastards = await getAllBastards();

    return {
      bastards
    };
  } catch {
    const to = `/404?type=&name=Bastards`;
    redirect(to, process, Router, res);
  }
};

export default Home;
