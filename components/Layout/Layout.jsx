import { Nav } from "../Nav";
export const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <>{children}</>
    </>
  );
};
