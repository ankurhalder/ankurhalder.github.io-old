import { Fragment, useState } from "react";
import { Navbar } from "@/container";
import Link from "next/link";
import { useRouter } from "next/router";
import Loading from "@/components/Loading";

function Layout({ children }) {
  const [showSidebar, setShowSidebar] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const handleNavigation = async (href) => {
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Add a 2-second delay
      await router.push(href);
    } catch (error) {
      console.error("Error navigating:", error);
    } finally {
      setLoading(false);
    }
  };

  const links = [
    { href: "/about", label: "about" },
    { href: "/contact", label: "contact" },
    { href: "/skills", label: "skills" },
    { href: "/training", label: "training" },
  ];

  return (
    <Fragment>
      {loading && <Loading />}
      <div className={`sidebar ${showSidebar ? "show" : ""}`}>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <a onClick={() => handleNavigation(link.href)}>{link.label}</a>
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
