import styled from "styled-components";
import { Container } from ".";
import Link from "next/link";

const AppHeader = styled.header`
  position: fixed;
  background: white;
  height: 60px;
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  top: 0;
  left: 0;
`;

const Logo = styled.div`
  max-width: 200px;
  flex-basis: 200px;
  margin-right: 25px;
  background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Game_of_Thrones_2011_logo.svg/1594px-Game_of_Thrones_2011_logo.svg.png");
  background-repeat: no-repeat;
  background-size: 200px 25px;
  height: 40px;
  align-self: center;
  background-position: center center;
  cursor: pointer;
`;
export default ({ children }) => (
  <AppHeader>
    <Container>
      <Link href="/">
        <Logo />
      </Link>
      {children}
    </Container>
  </AppHeader>
);
