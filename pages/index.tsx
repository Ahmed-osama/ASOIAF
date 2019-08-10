import { Layout } from "../components/Layout/Layout";

import { getAllHouses } from "../client";
import { HouseListItem } from "../components/HouseListItem";
import { Card, Row } from "../elements";
import Router from "next/router";
import { redirect } from "../utils";
import Page from "../types/page";

const CardUl = Card("ul");
const Home: Page<any> = ({ houses }) => (
  <Layout>
    <CardUl padding={0}>
      {houses &&
        houses.length &&
        houses.map(({ name, id }, i) => (
          <HouseListItem key={`${id}-${i}`} name={name} />
        ))}
    </CardUl>
  </Layout>
);

Home.getInitialProps = async ({ res }) => {
  try {
    const houses = await getAllHouses();
    return {
      houses
    };
  } catch {
    const to = `/404?type=&name=Home page`;
    redirect(to, process, Router, res);
  }
};

export default Home;
