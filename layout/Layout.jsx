import { Fragment, useState } from "react";
import { Navbar } from "@/container";
import { CheckboxComponent } from "@/components";
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
          {links.map((link, index) => (
            <li key={link.label}>
              <Link href={link.href} key={index}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <CheckboxComponent />
      </div>

      <div className={`mainContent ${showSidebar ? "shift" : ""}`}>
        <Navbar showsidebar={showSidebar} toggleSidebar={toggleSidebar} />

        {children}
      </div>
    </Fragment>
  );
}

export default Layout;
