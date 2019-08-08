import Link from "next/link";
import styled from "styled-components";
import { BorderedList } from "../../elements";
interface HouseListItemProps {
  id?: any;
  seat?: string;
  allegiance?: string;
  region?: string;
  religion?: string;
  name: string;
  words?: string;
  slug?: string;
}
export const HouseListItem = ({
  id,
  seat,
  allegiance,
  region,
  religion,
  name,
  words,
  slug
}: HouseListItemProps) => (
  <Link href="/house/[name]" as={`/house/${name}`}>
    <BorderedList>{name}</BorderedList>
  </Link>
);
