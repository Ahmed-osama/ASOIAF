import { Nav } from "../Nav";
import PageHeader from "../../elements/PageHeader";
import { Container, GlobalStyle } from "../../elements";
import theme from "../../elements/theme";
import { ThemeProvider } from "styled-components";

export const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <PageHeader>
          <Nav />
        </PageHeader>
        <Container main>{children}</Container>
      </>
    </ThemeProvider>
  );
};
