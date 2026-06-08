import Logo from "./Logo";
import Navbar from "./Navbar";
import HeaderButton from "./HeaderButton";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <>
      <header className="header-bg position-sticky py-1">
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