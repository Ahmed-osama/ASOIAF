import Link from "next/link";
import styled from "styled-components";
import { BorderedList } from "../../elements";

export const HouseListItem = ({
  id,
  seat,
  allegiance,
  region,
  religion,
  name,
  words,
  slug
}) => (
  <Link href="/house/[name]" as={`/house/${name}`}>
    <BorderedList>{name}</BorderedList>
  </Link>
);
