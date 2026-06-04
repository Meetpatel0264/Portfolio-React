import { useEffect } from "react";

export default function useIsotope() {
  useEffect(() => {
  const timer = setTimeout(() => {
    const $ = window.jQuery || window.$;

    if ($ && $.fn?.isotope) {
      const $grid = $(".main-row-box").isotope({
        itemSelector: ".filter-item",
        layoutMode: "fitRows",
      });

      $(".filtter-gallery-section")
        .off("click")
        .on("click", function () {
          $(".filtter-gallery-section").removeClass("active");

          $(this).addClass("active");

          const filterValue = $(this).attr("data-filter");

          $grid.isotope({
            filter: filterValue,
          });
        });
    }
  }, 500);

  return () => clearTimeout(timer);
}, []);
}