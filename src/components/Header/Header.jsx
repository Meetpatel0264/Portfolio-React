import { useEffect, useState } from "react";

import Logo from "./Logo";
import Navbar from "./Navbar";
import HeaderButton from "./HeaderButton";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <>
      <header
        className={`header-bg py-1 ${
          scrolled ? "header-scrolled" : ""
        }`}
      >
        <div className="container">
          <div className="header d-flex justify-content-between align-items-center">

            <Logo />

            <Navbar />

            <div className="head-btn d-flex align-items-center gap-3">

              <HeaderButton />

              <i
                className="ri-menu-2-line fs-2 d-lg-none"
                data-bs-toggle="offcanvas"
                data-bs-target="#mobileMenu"
              />

            </div>

          </div>
        </div>
      </header>

      <MobileMenu />
    </>
  );
}