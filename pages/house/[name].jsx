import { useRouter } from "next/router";
import Link from "next/link";
import { Layout } from "../../components/Layout/Layout";
import { getHouseCharacters, getHouseByName } from "../../client";
import { Character } from "../../components/Character";
import { Row, Col, PageSection, Label } from "../../elements";
import CharacterCard from "../../elements/CharacterCard";

const House = ({ houseDetails, houseCharacters }) => {
  const {
    houseId: id,
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
          <p>{sigil}</p>
        </Col>
        <Col cols={8}>
          <PageSection>
            <h1>{name}</h1>
          </PageSection>
          <PageSection>
            {words && <blockquote>{words}</blockquote>}
            {seat && (
              <p>
                <strong>seat :</strong> {seat}
              </p>
            )}

            {allegiance.length > 0 && (
              <p>
                <strong>Alliance : </strong>{" "}
                {allegiance.map(ally => (
                  <Link href="/house/[ally]" as={`/house/${ally}`} key={ally}>
                    <Label>{ally}</Label>
                  </Link>
                ))}
              </p>
            )}
            {religion.length > 0 && (
              <p>
                <strong>Religions : </strong>{" "}
                {religion.map(relig => (
                  <span key={relig}>{relig}, </span>
                ))}
              </p>
            )}
          </PageSection>
          <PageSection>
            {houseCharacters.length > 0 && (
              <>
                <h2>characters</h2>
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

House.getInitialProps = async function(context) {
  const { name } = context.query;
  const houseDetails = await getHouseByName(name);
  const houseCharacters = await getHouseCharacters(name);
  return {
    houseDetails,
    houseCharacters
  };
};
export default House;
