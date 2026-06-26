import { HashLink } from "react-router-hash-link";
import { footerLinks } from "../data/footerData";

export default function FooterNav() {
  return (
    <div className="footer-nav-bar text-center">

      <ul className="list-unstyled d-flex justify-content-center gap-4 my-4 flex-wrap">

        {footerLinks.map((item) => (
          <li
            key={item.title}
            className="header-li position-relative"
          >
            <HashLink
              smooth
              to={item.link}
              className="text-decoration-none text-white"
            >
              {item.title}
            </HashLink>
          </li>
        ))}

      </ul>

    </div>
  );
}