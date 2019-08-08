import { Layout } from "../Layout/Layout";
import { Row, Col, Btn } from "../../elements";
import React, { FunctionComponent } from "react";
import styled from "styled-components";
import Link from "next/link";
const NotFoundWraper = styled.div`
  height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 100%;
`;
interface NotFoundProps {
  type?: string;
  name?: string;
  link?: string;
  linkName?: string;
}
const NotFound: FunctionComponent<NotFoundProps> = ({
  type,
  name,
  link,
  linkName
}) => (
  <NotFoundWraper>
    <Row>
      <Col cols={12} center>
        <img
          src={"http://www.pngmart.com/files/8/Jon-Snow-PNG-HD-Quality.png"}
          alt="Not Found"
        />
      </Col>
      <Col cols={12} center>
        <h2>
          {type} <strong> {name}</strong> is not found
        </h2>
      </Col>
      <Col cols={12} center>
        <Link href={link}>
          <Btn>{linkName}</Btn>
        </Link>
      </Col>
    </Row>
  </NotFoundWraper>
);

NotFound.defaultProps = {
  type: "this",
  name: "page",
  link: "/",
  linkName: "Home Page"
};
export default NotFound;
