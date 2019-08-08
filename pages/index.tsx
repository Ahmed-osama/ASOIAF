import { Layout } from "../components/Layout/Layout";

import { getAllHouses } from "../client";
import { HouseListItem } from "../components/HouseListItem";
import { Card, Row } from "../elements";
const CardUl = Card("ul");
const Home = ({ houses }) => (
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

Home.getInitialProps = async () => {
  const houses = await getAllHouses();
  return {
    houses
  };
};

export default Home;
