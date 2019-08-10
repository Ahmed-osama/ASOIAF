import { Layout } from "../components/Layout/Layout";
import { getAllBattels } from "../client";
import { HouseListItem } from "../components/HouseListItem";
import { Card, Row, Col, BorderedList, Label } from "../elements";
import Router from "next/router";
import { redirect } from "../utils";
import Page from "../types/page";
import CharacterCard from "../elements/CharacterCard";
import Link from "next/link";
import { useState } from "react";
import StyledModal from "../elements/StyledModal";
import {
  Comaprison,
  ComaprisonSection,
  ComaprisonTitle,
  ComaprisonBody,
  ComaprisonSide
} from "../elements/BattleTable";

const CardUl = Card("ul");
const CardDiv = Card("div");
const ShowComparisonSide = ({
  arr,
  center: boolean = false,
  color
}: {
  arr: string[];
  center?: boolean;
  color?: string;
}) => (
  <>
    {arr && arr.length > 0 && (
      <ComaprisonSide>
        {arr.map(item => (
          <Label color={color}>{item}</Label>
        ))}
      </ComaprisonSide>
    )}
  </>
);
const Home: Page<any> = ({ battels }) => {
  const [activModal, setActiveModal] = useState("");
  return (
    <Layout>
      <CardUl padding={0}>
        {battels.map(
          ({
            name,
            slug,
            _id,
            place,
            factionsOne,
            factionsTwo,
            commandersOne,
            commandersTwo,
            forcesOne,
            forcesTwo,
            casualties,
            conflict
          }) => (
            <>
              <BorderedList onClick={setActiveModal.bind(null, _id)} key={_id}>
                {name}
              </BorderedList>
              <StyledModal
                isOpen={activModal == _id}
                onRequestClose={setActiveModal.bind(null, "")}
                contentLabel={`${name} happned during ${conflict}`}
              >
                <Comaprison>
                  <ComaprisonSection>
                    <ComaprisonTitle>
                      {name}
                      {conflict ? <span> --- {conflict}</span> : null}
                    </ComaprisonTitle>
                  </ComaprisonSection>
                  {place && place.length > 0 && (
                    <ComaprisonSection>
                      <ComaprisonTitle> Place </ComaprisonTitle>
                      <ComaprisonBody>
                        <ShowComparisonSide arr={place} color="primary" />
                      </ComaprisonBody>
                    </ComaprisonSection>
                  )}
                  {((factionsOne && factionsOne.length > 0) ||
                    (factionsTwo && factionsTwo.length)) > 0 && (
                    <ComaprisonSection>
                      <ComaprisonTitle> Factions </ComaprisonTitle>
                      <ComaprisonBody>
                        <ShowComparisonSide arr={factionsOne} color="sucess" />
                        <ShowComparisonSide arr={factionsTwo} color="sub" />
                      </ComaprisonBody>
                    </ComaprisonSection>
                  )}
                  {((commandersOne && commandersOne.length > 0) ||
                    (commandersTwo && commandersTwo.length)) > 0 && (
                    <ComaprisonSection>
                      <ComaprisonTitle> Commanders </ComaprisonTitle>
                      <ComaprisonBody>
                        <ShowComparisonSide
                          arr={commandersOne}
                          color="sucess"
                        />
                        <ShowComparisonSide arr={commandersTwo} color="sub" />
                      </ComaprisonBody>
                    </ComaprisonSection>
                  )}
                  {((forcesOne && forcesOne.length > 0) ||
                    (forcesTwo && forcesTwo.length)) > 0 && (
                    <ComaprisonSection>
                      <ComaprisonTitle> Forces </ComaprisonTitle>
                      <ComaprisonBody>
                        <ShowComparisonSide arr={forcesOne} color="sucess" />
                        <ShowComparisonSide arr={forcesTwo} color="sub" />
                      </ComaprisonBody>
                    </ComaprisonSection>
                  )}

                  {casualties && casualties.length > 0 && (
                    <ComaprisonSection>
                      <ComaprisonTitle> Casualties </ComaprisonTitle>
                      <ComaprisonBody>
                        <ShowComparisonSide
                          arr={casualties}
                          center
                          color="primary"
                        />
                      </ComaprisonBody>
                    </ComaprisonSection>
                  )}
                </Comaprison>
              </StyledModal>
            </>
          )
        )}
      </CardUl>
    </Layout>
  );
};

Home.getInitialProps = async ({ res }) => {
  try {
    const battels = await getAllBattels();

    return {
      battels
    };
  } catch {
    const to = `/404?type=&name=battels`;
    redirect(to, process, Router, res);
  }
};

export default Home;
