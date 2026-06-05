import Logo from "./Logo";
import NavItem from "./NavItem";
import { navLinks } from "../data/navigation";

export default function MobileMenu() {
  return (
    <div
      className="offcanvas offcanvas-start"
      tabIndex="-1"
      id="mobileMenu"
    >
      <div className="offcanvas-header">

        <Logo />

        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
        />

      </div>

      <div className="offcanvas-body">

        <ul className="list-unstyled nav-items">

          {navLinks.map((item) => (
            <NavItem
              key={item.title}
              title={item.title}
              link={item.link}
              className="header-li-offcanva pointer position-relative"
            />
          ))}

        </ul>

      </div>
    </div>
  );
}