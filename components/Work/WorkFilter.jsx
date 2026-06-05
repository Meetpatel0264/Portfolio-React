export default function WorkFilter({
  filter,
  setFilter,
}) {
  return (
    <span className="button-group filter-button-group d-flex gap-sm-3 gap-2 justify-content-center">

      <button
        className={`filtter-gallery-section ${
          filter === "*" ? "active" : ""
        }`}
        onClick={() => setFilter("*")}
      >
        All
      </button>

      <button
        className={`filtter-gallery-section ${
          filter === "website" ? "active" : ""
        }`}
        onClick={() => setFilter("website")}
      >
        Website
      </button>

      <button
        className={`filtter-gallery-section ${
          filter === "section" ? "active" : ""
        }`}
        onClick={() => setFilter("section")}
      >
        Section
      </button>

      <button
        className={`filtter-gallery-section ${
          filter === "game" ? "active" : ""
        }`}
        onClick={() => setFilter("game")}
      >
        Game
      </button>

    </span>
  );
}