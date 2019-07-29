import Link from "next/link";

export const Character = ({ slug, name }) => (
  <>
    <Link href="/character/[slug]" as={`/character/${slug}`}>
      <a>{name}</a>
    </Link>
  </>
);
