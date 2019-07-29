import Link from "next/link";

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
  <section>
    <Link href="/house/[name]" as={`/house/${name}`}>
      <a>{name}</a>
    </Link>
  </section>
);
