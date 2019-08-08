import { FunctionComponent } from "react";
export default interface Page<generic> extends FunctionComponent<generic> {
  getInitialProps?: any;
}
