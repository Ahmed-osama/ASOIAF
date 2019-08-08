import { useRouter } from "next/router";
import Link from "next/link";
import { Layout } from "../../components/Layout/Layout";
import { getHouseCharacters, getHouseByName } from "../../client";

import {
  Row,
  Col,
  PageSection,
  Label,
  Qoute,
  SectionTitle,
  PageTitle,
  Btn
} from "../../elements";
import CharacterCard from "../../elements/CharacterCard";
import { Character } from "../../formatters/character";
import { House as HouseClass } from "../../formatters/House";
import Page from "../../types/page";
import Router from "next/router";
import { redirect } from "../../utils";

interface HouseProps {
  houseDetails?: HouseClass;
  houseCharacters?: Character[];
}
const House: Page<HouseProps> = ({ houseDetails, houseCharacters }) => {
  const {
    id,
    seat,
    allegiance,
    region,
    religion,
    name,
    words,
    sigil,
    logoURL
  } = houseDetails;

  return (
    <Layout>
      <Row>
        <Col cols={4}>
          {logoURL && <img src={logoURL} width="100%" />}
          <p style={{ textAlign: "center" }}>{sigil}</p>
        </Col>
        <Col cols={8}>
          <PageSection>
            <PageTitle>{name}</PageTitle>
          </PageSection>
          <PageSection>
            {words && <Qoute>{words}</Qoute>}
            {seat.length > 0 && (
              <p>
                <strong>seat :</strong>
                {seat.map(s => (
                  <Label color={"sub"} key={s}>
                    {s}
                  </Label>
                ))}
              </p>
            )}

            {allegiance.length > 0 && (
              <p>
                <strong>Alliance : </strong>
                {allegiance.map(ally => (
                  <Link href="/house/[ally]" as={`/house/${ally}`} key={ally}>
                    <Label>{ally}</Label>
                  </Link>
                ))}
              </p>
            )}
            {religion.length > 0 && (
              <p>
                <strong>Religions : </strong>
                {religion.map(relig => (
                  <Label key={relig} color={"sucess"}>
                    {relig}
                  </Label>
                ))}
              </p>
            )}
          </PageSection>
          <PageSection>
            {houseCharacters.length > 0 && (
              <>
                <SectionTitle>characters</SectionTitle>
                <Row>
                  {houseCharacters.map(char => (
                    <Col key={char.id} cols={6}>
                      <CharacterCard {...char} />
                    </Col>
                  ))}
                </Row>
              </>
            )}
          </PageSection>
        </Col>
      </Row>
    </Layout>
  );
};

House.getInitialProps = async function({ res, query }) {
  const { name } = query;
  try {
    const houseDetails = await getHouseByName(name);
    const houseCharacters = await getHouseCharacters(name);
    return {
      houseDetails,
      houseCharacters
    };
  } catch {
    const to = `/404?type=house&name=${name}`;
    redirect(to, process, Router, res);
  }
};
export default House;
