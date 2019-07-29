import { useRouter } from "next/router";
import { Layout } from "../../components/Layout/Layout";
import { getCharacterBySlug } from "../../client";
import Link from "next/link";

const CharacterPage = ({
  id,
  gender,
  titles,
  name,
  allegiance,
  slug,
  image,
  alive,
  spouse,
  placeOfDeath,
  death,
  children,
  pagerank,
  house,
  culture,
  birth
}) => {
  const subject = ["male", ""].some(gen => gen === gender) ? "he" : "she";
  return (
    <Layout>
      <h1>
        {titles[0]} {name} Of{" "}
        <Link href="/house/[name]" as={`/house/${house}`}>
          <a>{house}</a>
        </Link>
      </h1>
      {image && <img src={image} />}
      {gender && (
        <p>
          {subject} is {gender}
        </p>
      )}
      <p>
        {subject} was born in {Math.abs(birth)} {birth > 0 ? "A.C" : "B.C"}
      </p>
      {culture && (
        <p>
          {subject} is {culture}
        </p>
      )}
      <p>{alive ? `${subject} still alive` : `${subject} passed away`} </p>
      {placeOfDeath && (
        <p>
          {subject} died in {placeOfDeath} on {death}
        </p>
      )}
      {death && birth && (
        <p>
          {subject} lived for {death - birth} years
        </p>
      )}
      {spouse.length > 0 && (
        <p>
          {subject} {alive ? "is" : "was"} married to{" "}
          {spouse.map(spous => `${spous}, `)}
        </p>
      )}
      {children.length > 0 && (
        <p>
          {subject} has {children.length} children :
          {children.map(child => (
            <span>{child}, </span>
          ))}
        </p>
      )}
    </Layout>
  );
};
CharacterPage.getInitialProps = async function(context) {
  const { slug } = context.query;
  const character = await getCharacterBySlug(slug);
  return character;
};
export default CharacterPage;
