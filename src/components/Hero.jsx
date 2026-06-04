export default function Hero() {
  return (
    <>
      <section className="bg-gradiant py-100" id="resume">
        <div className="container">
          <div className="row row-gap-5">
            <div className="col-lg-6">
              <div className="profile">
                <h3 className="hero-sub-title">I am Meet Patel</h3>
                <span className="hero-title">I'm <span id="changingText"></span></span>
                <h3 className="hero-dsc-title">I break down complex user experience problems to create
                  integrity-focused solutions that connect people effectively.</h3>
                <div className="social-media gap-3 align-items-center d-flex d-block">
                  <div className="row gy-4 text-center align-items-center">
                    <div className="col-sm-6">
                      <div className="m-0">
                        <a href="/assets/Meet-Resume.pdf" download>
                          <button className="hero-btn rounded-pill">Download CV <i className="ri-download-2-line"></i>
                          </button>
                        </a>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="d-flex gap-3 align-items-center justify-content-center">
                        <a href="https://x.com/Meetpatel0264" rel="noopener" target="_blank" className="social-anchor text-decoration-none">
                          <i className="ri-twitter-fill social-icon rounded-circle d-inline-block"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/patel-meet-97b518325/" rel="noopener" target="_blank" className="social-anchor text-decoration-none">
                          <i className="ri-linkedin-fill social-icon rounded-circle d-inline-block"></i>
                        </a>
                        <a href="https://github.com/Meetpatel0264" className="social-anchor text-decoration-none" rel="noopener" target="_blank">
                          <i className="ri-github-fill social-icon rounded-circle d-inline-block"></i>
                        </a>
                        <a href="https://www.instagram.com/meetpatel0264/" className="social-anchor text-decoration-none" rel="noopener" target="_blank">
                          <i className="ri-instagram-fill social-icon rounded-circle d-inline-block"></i>
                        </a>
                        <a href="https://wa.me/916355923798" className="social-anchor text-decoration-none" rel="noopener" target="_blank">
                          <i className="ri-whatsapp-fill social-icon rounded-circle d-inline-block"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <div className="profile-img pointer text-center">
                <img src="/assets/images/profile-img.png" className="img-fluid" alt="" width="90%" />
              </div>
            </div>
          </div>
          <div className="funfact-area">
            <div className="row row-gap-4 d-flex text-center">
              <div className="col-lg-3 col-md-6">
                <div className="prifile-years d-flex justify-content-center align-items-center">
                  <span className="counter">10</span>
                  <p>Hard Work</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="prifile-years d-flex justify-content-center align-items-center">
                  <span className="counter">45</span>
                  <p>Project
                    Completed</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="prifile-years d-flex justify-content-center align-items-center">
                  <span className="counter">40</span>
                  <p>Happy
                    Clients</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="prifile-years d-flex justify-content-center align-items-center">
                  <span className="counter">1.5</span>
                  <p>Years of
                    Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
