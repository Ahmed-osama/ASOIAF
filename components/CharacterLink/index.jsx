import Link from "next/link";

export const CharacterLink = ({ slug, children }) => (
  <>
    <Link href="/character/[slug]" as={`/character/${slug}`}>
      {children}
    </Link>
  </>
);
