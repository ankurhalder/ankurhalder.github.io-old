import { Fragment, useState } from "react";
import { Navbar } from "@/container";
import Link from "next/link";
import { useRouter } from "next/router";

function Layout({ children }) {
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const router = useRouter();

  const delayedRouterPush = (href) => {
    const delay = 2000; // 2 seconds
    setTimeout(() => {
      router.push(href);
    }, delay);
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
            <li key={index}>
              <a onClick={() => delayedRouterPush(link.href)}>{link.label}</a>
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
