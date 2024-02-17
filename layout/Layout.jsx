import { Fragment } from "react";
import { Sidebar } from "@/container";

function Layout({ children }) {
  return (
    <Fragment>
      <Sidebar></Sidebar>
      {children}
    </Fragment>
  );
}

export default Layout;
