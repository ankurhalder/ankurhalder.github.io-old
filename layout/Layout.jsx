import { Fragment, useState } from "react";
import { Navbar } from "@/container";
import Link from "next/link";

function Layout({ children }) {
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const links = [
    { href: "/about", label: "about" },
    { href: "/contact", label: "contact" },
    { href: "/skills", label: "skills" },
    { href: "/training", label: "training" },
  ];

  return (
    <Fragment>
      <div className={`sidebar ${showSidebar ? "show" : ""}`}>
        <ul>
          {/* Mapping over the links array to render links */}
          {links.map((link, index) => (
            <li key={index}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className={`mainContent ${showSidebar ? "shift" : ""}`}>
        <Navbar showsidebar={showSidebar} toggleSidebar={toggleSidebar} />
        {children}
      </div>
    </Fragment>
  );
}

export default Layout;
