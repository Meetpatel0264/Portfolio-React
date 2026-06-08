export default function ContactItem({
  icon,
  title,
  value,
  link,
}) {
  const content = (
    <>
      <i className={`${icon} connect-by-with me-3`}></i>

      <div className="contact-all-media">
        <h6 className="ps-2 mb-1">
          {title}
        </h6>

        <h5 className="mb-0">
          {value}
        </h5>
      </div>
    </>
  );

  return (
    <div className="contect-me pt-5 d-flex align-items-center">

      {link ? (
        <a
          href={link}
          target={
            link.startsWith("http")
              ? "_blank"
              : undefined
          }
          rel={
            link.startsWith("http")
              ? "noopener noreferrer"
              : undefined
          }
          className="text-decoration-none d-flex align-items-center text-white"
        >
          {content}
        </a>
      ) : (
        content
      )}

    </div>
  );
}