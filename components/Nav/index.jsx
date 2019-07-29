import Link from "next/link";
const paths = [
  {
    name: "characters",
    path: "/"
  },
  {
    name: "houses",
    path: "/"
  }
];
export const Nav = props => (
  <nav>
    <ul>
      {paths.map(({ name, path }) => (
        <li key={path}>
          <Link href={path}>
            <a>{name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);
