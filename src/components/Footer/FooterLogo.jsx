import { HashLink } from "react-router-hash-link";

export default function FooterLogo({ logo }) {
  return (
    <HashLink smooth to="/#home">
      <img
        src={logo}
        alt="Meet Patel Logo"
        width="100"
        height="100"
        className="img-fluid"
      />
    </HashLink>
  );
}