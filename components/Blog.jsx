export default function Blog() {
  return (
    <>
<section className="blog-section service" id="blog">
<div className="container">
<div className="text-center align-items-center d-flex flex-column mb-4 justify-content-center">
<h2 className="service-heading">Recent Blogs</h2>
<p className="form-contect">We put your ideas and thus your wishes in the form of a unique web project
                        that inspires you and you customers.</p>
</div>
<div className="row gy-4 gx-4 justify-content-center">
<div className="col-lg-4 col-md-6">
<div className="blog position-relative">
<a href="/first-portfolio">
<img src="/assets/images/web-developer-portfolio.png" alt="" width="100%" className="rounded-4 images img-fluid" />
<span className="blog-box-head rounded-pill position-absolute">Beginner-Friendly Topics
                                </span>
<span className="blog-box-title position-absolute">
<div className="blog-bottom-box">
<h2 className="blog-bottom-box-title">How I Built My First Developer Portfolio</h2>
</div>
</span>
</a>
</div>
</div>
<div className="col-lg-4 col-md-6">
<div className="blog position-relative">
<a href="/helpful-guid">
<img src="/assets/images/blog-2-img.png" alt="" width="100%" className="rounded-4 images img-fluid" />
<span className="blog-box-head rounded-pill position-absolute">Practical & Helpful Guides
                                </span>
<span className="blog-box-title position-absolute">
<div className="blog-bottom-box">
<h2 className="blog-bottom-box-title">Responsive Design: Websites That Fit Every
                                            Screen</h2>
</div>
</span>
</a>
</div>
</div>
<div className="col-lg-4 col-md-6">
<div className="blog position-relative">
<a href="/web-devlopment-blog">
<img src="/assets/images/blog-3.jpg" alt="" width="100%" className="rounded-4 images img-fluid" />
<span className="blog-box-head rounded-pill position-absolute">Tech & Project-Based Posts

                                </span>
<span className="blog-box-title position-absolute">
<div className="blog-bottom-box">
<h2 className="blog-bottom-box-title">Why I Love Creative Web Development Projects
                                        </h2>
</div>
</span>
</a>
</div>
</div>
</div>
</div>
</section>
    </>
  );
}
