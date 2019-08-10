import { Layout } from "../../components/Layout/Layout";
import { getCharacterBySlug } from "../../client";
import Link from "next/link";
import { Row, Col, PageSection, Label, PageTitle } from "../../elements";
import { CharacterLink } from "../../components/CharacterLink";
import Router from "next/router";
import Page from "../../types/page";
import { Character } from "../../formatters/character";
import { redirect } from "../../utils";
import { useState } from "react";
import StyledModal from "../../elements/StyledModal";

const CharacterPage: Page<Character> = ({
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
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Layout>
        <Row>
          <Col cols={4}>
            {image && (
              <>
                <img src={image} onClick={setIsOpen.bind(null, true)} />
                <StyledModal
                  isOpen={isOpen}
                  onRequestClose={setIsOpen.bind(null, false)}
                  contentLabel={name}
                >
                  <img src={image} onClick={setIsOpen.bind(null, true)} />
                </StyledModal>
              </>
            )}
          </Col>
          <Col cols={8}>
            <PageSection>
              <PageTitle>
                {titles[0]} {name}
              </PageTitle>
              <Link href="/house/[name]" as={`/house/${house}`}>
                <Label>{house}</Label>
              </Link>
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
                    <CharacterLink key={child} slug={child.replace(/ /g, "_")}>
                      <Label color={"primary"}>{child}</Label>
                    </CharacterLink>
                  ))}
                </p>
              )}
            </PageSection>
          </Col>
        </Row>
      </Layout>
    </>
  );
};
CharacterPage.getInitialProps = async function({ query, res }) {
  const { slug } = query;
  try {
    const character = await getCharacterBySlug(slug);
    return character;
  } catch {
    redirect(`/404?type=character&name=${slug}`, process, Router, res);
  }
};
export default CharacterPage;
