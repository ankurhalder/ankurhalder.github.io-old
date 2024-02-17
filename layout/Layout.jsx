import { Fragment } from "react";
import { Navbar } from "@/container";
function Layout({ children }) {
  return (
    <Fragment>
      <Navbar />
      {children}
    </Fragment>
  );
}

export default Layout;
