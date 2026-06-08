export default function FooterCopyright({
  owner,
}) {
  return (
    <div className="copyright-box mb-4">

      <h2 className="copyright">
        © {new Date().getFullYear()} All rights reserved by{" "}
        <span>{owner}</span>
      </h2>

    </div>
  );
}