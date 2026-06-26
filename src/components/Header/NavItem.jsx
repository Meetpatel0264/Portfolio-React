import { HashLink } from "react-router-hash-link";

export default function NavItem({
  title,
  link,
  className = "",
  activeLink,
  setActiveLink,
}) {
  return (
    <li className={className}>
      <HashLink
        smooth
        to={link}
        onClick={() => setActiveLink(link)}
        className={`nav-link-custom text-decoration-none ${
          activeLink === link ? "active" : ""
        }`}
      >
        {title}
      </HashLink>
    </li>
  );
}