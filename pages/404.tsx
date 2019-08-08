import { Layout } from "../components/Layout/Layout";
import NotFound from "../components/NotFound";
import Page from "../types/page";
import { Router } from "next/router";
import { redirect } from "../utils";

const PageNotFound: Page<{}> = props => (
  <Layout>
    <NotFound {...props} />
  </Layout>
);

PageNotFound.getInitialProps = async function({ query, res }) {
  try {
    return query;
  } catch {
    redirect("/", process, Router, res);
  }
};
export default PageNotFound;
