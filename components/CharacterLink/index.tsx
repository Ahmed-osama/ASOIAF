import Link from "next/link";
import { ReactChild } from "react";
interface CharacterLinkProps {
  slug: string;
  children: ReactChild;
}
export const CharacterLink = ({ slug, children }: CharacterLinkProps) => (
  <Link href="/character/[slug]" as={`/character/${slug}`}>
    {children}
  </Link>
);
