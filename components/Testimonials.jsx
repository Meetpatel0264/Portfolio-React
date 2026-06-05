import { useEffect } from "react";

export default function Testimonials() {

    useEffect(() => {
    if (window.Swiper) {
      new window.Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        autoplay: {
          delay: 1500,
          disableOnInteraction: false,
        },
      });
    }
  }, []);

  return (
    <>
      <section className="bg-black py-100" id="testimonials">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="testimonial-top text-center">
                <h2 className="testimonial-title">Testimonials</h2>
                <p className="testimonial-dsc">We put your ideas and thus your wishes in the form of a unique
                  web
                  project that inspires you and you customers.</p>
              </div>
              <div className="swiper mySwiper">
                <div className="swiper-wrapper">
                  <div className="swiper-slide d-inline-block text-center">
                    <div className="testimonials-content">"Meet Patel’s design work is outstanding. His
                      creativity and attention to detail
                      helped bring our vision to life. We’re with the results and look forward to
                      working with him again."</div>
                    <div className="testimonials-img d-inline-block">
                      <img src="/assets/images/anantshah.png" alt="" width="70px" />
                    </div>
                    <div className="testimonials-client-name">Anant Shah</div>
                  </div>
                  <div className="swiper-slide d-inline-block text-center">
                    <div className="testimonials-content">"Meet Patel is a brilliant content writer. His
                      ability to understand our brand and most
                      produce engaging, content is unmatched. He’s an invaluable asset to any
                      team or project."</div>
                    <div className="testimonials-img d-inline-block">
                      <img src="/assets/images/rakeshsir1.jpeg" alt="" width="65px" />
                    </div>
                    <div className="testimonials-client-name">Rakesh Gosalia</div>
                  </div>
                  <div className="swiper-slide d-inline-block text-center">
                    <div className="testimonials-content">"Meet Patel is an outstanding web developer. His
                      technical skills and attention to
                      detail consistently deliver high-quality results, making him a valuable asset to
                      any
                      team or project."</div>
                    <div className="testimonials-img d-inline-block">
                      <img src="/assets/images/hiteshsir.jpeg" alt="" width="70px" />
                    </div>
                    <div className="testimonials-client-name">Hitesh Desai</div>
                  </div>
                  <div className="swiper-slide d-inline-block text-center">
                    <div className="testimonials-content">"Meet Patel’s creativity and design skills are
                      unparalleled. He helped elevate our
                      brand with eye-catching visuals and seamless design & Development.—Maan is an
                      asset to any project."</div>
                    <div className="testimonials-img d-inline-block">
                      <img src="/assets/images/darshansir.jpeg" alt="" width="70px" />
                    </div>
                    <div className="testimonials-client-name">Darshan Sir</div>
                  </div>
                  <div className="swiper-slide d-inline-block text-center">
                    <div className="testimonials-content">"Working with Meet Patel has been an amazing
                      experience. . His dedication,
                      communication, and commitment to excellence make him an invaluable asset to any
                      development team."</div>
                    <div className="testimonials-img d-inline-block">
                      <img src="/assets/images/maan.jpg" alt="" width="70px" />
                    </div>
                    <div className="testimonials-client-name">Maan Patel</div>
                  </div>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
