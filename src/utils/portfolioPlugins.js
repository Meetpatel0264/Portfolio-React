export function initPortfolioPlugins() {
  const $ = window.jQuery || window.$;

  if ($ && $.fn?.isotope) {
    try {
      const $grid = $(".main-row-box").isotope({});

      $(".filtter-gallery-section")
        .off("click.reactPortfolio")
        .on("click.reactPortfolio", function () {
          $(".filtter-gallery-section").removeClass("active");

          $(this).addClass("active");

          const filterValue = $(this).attr("data-filter");

          $grid.isotope({
            filter: filterValue,
          });
        });
    } catch (error) {
      console.error("Isotope Error:", error);
    }
  }

  if (window.Swiper && document.querySelector(".mySwiper")) {
    try {
      new window.Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        autoplay: {
          delay: 1500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          300: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        },
      });
    } catch (error) {
      console.error("Swiper Error:", error);
    }
  }
}