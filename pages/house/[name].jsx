import { useRouter } from "next/router";
import Link from "next/link";
import { Layout } from "../../components/Layout/Layout";
import { getHouseCharacters, getHouseByName } from "../../client";
import { Character } from "../../components/Character";

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
      <h1>{name}</h1>
      {seat && <p>seat : {seat}</p>}
      {words && <strong>{words}</strong>}
      {logoURL && <img src={logoURL} width="150" />}
      <p>{sigil}</p>
      {allegiance.length > 0 && (
        <p>
          <strong>Alliance : </strong>{" "}
          {allegiance.map(ally => (
            <span>
              {
                <Link href="/house/[ally]" as={`/house/${ally}`}>
                  {ally}
                </Link>
              }
              ,{" "}
            </span>
          ))}
        </p>
      )}
      {religion.length > 0 && (
        <p>
          <strong>Religions : </strong>{" "}
          {religion.map(relig => (
            <span>{relig}, </span>
          ))}
        </p>
      )}
      {houseCharacters.length > 0 && (
        <section>
          <h2>characters</h2>
          <ul>
            {houseCharacters.map(char => (
              <li>
                <Character {...char} key={char.id} />
              </li>
            ))}
          </ul>
        </section>
      )}
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
