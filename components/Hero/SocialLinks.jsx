import { socialLinks } from "../data/socialLinks";

export default function SocialLinks() {
  return (
    <div className="d-flex gap-3 align-items-center justify-content-center">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-anchor text-decoration-none"
        >
          <i
            className={`${social.icon} social-icon rounded-circle d-inline-block`}
          ></i>
        </a>
      ))}
    </div>
  );
}