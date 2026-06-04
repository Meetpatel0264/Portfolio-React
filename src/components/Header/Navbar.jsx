import { useState } from "react";
import { navLinks } from "../data/navigation";
import NavItem from "./NavItem";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("/#about");

  return (
    <nav className="nav-bar d-none d-lg-block">
      <ul className="d-flex gap-xl-5 gap-4 list-unstyled m-0">
        {navLinks.map((item) => (
          <NavItem
            key={item.title}
            title={item.title}
            link={item.link}
            className="header-li position-relative"
            activeLink={activeLink}
            setActiveLink={setActiveLink}
          />
        ))}
      </ul>
    </nav>
  );
}