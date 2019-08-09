import Link from "next/link";
import styled, { css } from "styled-components";
import { paths } from "../../constants";

const HeaderNav = styled.nav`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
  align-self: center;
  a + a {
    margin-left: 15px;
  }
`;
const NavItem = styled.a`
  text-decoration: none;
  font-size: 18px;
  color: ${props => props.theme.primary};
  font-weight: 700;
`;
export const Nav = props => (
  <HeaderNav>
    {paths.map(({ name, path }: { name: string; path: string }) => (
      <Link key={name} href={path}>
        <NavItem>{name}</NavItem>
      </Link>
    ))}
  </HeaderNav>
);
