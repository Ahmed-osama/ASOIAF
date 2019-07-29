import { Layout } from "../components/Layout/Layout";

import { getAllHouses } from "../client";
import { HouseListItem } from "../components/HouseListItem";

const Home = ({ houses }) => (
    <Layout>
      {houses &&
        houses.length &&
        houses.map(({ name, id }) => (
          <section key={id + name}>
            <HouseListItem name={name} />
          </section>
        ))}
    </Layout>
  );


Home.getInitialProps = async () => {
  const houses = await getAllHouses();
  return {
    houses
  };
};

export default Home;
