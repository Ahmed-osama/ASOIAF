import { Layout } from "../../components/Layout/Layout";
import { getCharacterBySlug } from "../../client";
import Link from "next/link";
import { Row, Col, PageSection, Label, PageTitle } from "../../elements";
import { CharacterLink } from "../../components/CharacterLink";
import Router from "next/router";
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
  birth,
  redirect
}) => {
  if (redirect) {
    Router.push("/");
  }
  const subject = ["male", ""].some(gen => gen === gender) ? "he" : "she";
  return (
    <>
      {!redirect && (
        <Layout>
          <Row>
            <Col cols={4}>{image && <img src={image} />}</Col>
            <Col cols={8}>
              <PageSection>
                <PageTitle>
                  {titles[0]} {name} Of{" "}
                  <Link href="/house/[name]" as={`/house/${house}`}>
                    <a>{house}</a>
                  </Link>
                </PageTitle>
              </PageSection>
              <PageSection>
                {gender && (
                  <p>
                    {subject} is {gender}
                  </p>
                )}
                <p>
                  {subject} was born in {Math.abs(birth)}{" "}
                  {birth > 0 ? "A.C" : "B.C"}
                </p>
                {culture && (
                  <p>
                    {subject} is {culture}
                  </p>
                )}
                <p>
                  {alive ? `${subject} still alive` : `${subject} passed away`}{" "}
                </p>
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
                      <CharacterLink
                        key={child}
                        slug={child.replace(/ /g, "_")}
                      >
                        <Label color={"primary"}>{child}</Label>
                      </CharacterLink>
                    ))}
                  </p>
                )}
              </PageSection>
            </Col>
          </Row>
        </Layout>
      )}
    </>
  );
};
CharacterPage.getInitialProps = async function(context) {
  try {
    const { slug } = context.query;
    const character = await getCharacterBySlug(slug);
    return character;
  } catch {
    return {
      redirect: true
    };
  }
};
export default CharacterPage;
