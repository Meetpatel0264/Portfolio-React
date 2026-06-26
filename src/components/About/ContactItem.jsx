export default function ContactItem({
  icon,
  label,
  value,
  link,
}) {
  return (
    <a
      href={link}
      className="text-decoration-none text-white"
    >
      <div className="d-flex gap-3">

        <div>
          <i className={`${icon} email-icon-about`}></i>
        </div>

        <div>
          <p className="mb-2">
            {label}
          </p>

          <p className="fw-semibold m-0">
            {value}
          </p>
        </div>

      </div>
    </a>
  );
}