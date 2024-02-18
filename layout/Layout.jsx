import { Fragment, useState } from "react";
import { Navbar } from "@/container";
import { useRouter } from "next/router";
import { Loader } from "@/components";

function Layout({ children }) {
  const [showSidebar, setShowSidebar] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const handleNavigation = async (href) => {
    try {
      // await new Promise((resolve) => setTimeout(resolve, 2000));
      setLoading(true);
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
        <Loader loading={loading} />
        {children}
      </div>
    </Fragment>
  );
}

export default Layout;
