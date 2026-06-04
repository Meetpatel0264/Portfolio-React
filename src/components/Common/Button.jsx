export default function Button({
  text,
  href,
  download = false,
  className = "",
}) {
  return (
    <a
      href={href}
      download={download}
      className="text-decoration-none"
    >
      <button className={`hero-btn rounded-pill ${className}`}>
        {text}
      </button>
    </a>
  );
}