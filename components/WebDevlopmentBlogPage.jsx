export default function WebDevlopmentBlogPage() {
    return (
        <>

            <header className="header-bg">
                <div className="container">
                    <div className="header d-flex justify-content-between align-items-center">
                        <a href="/" className="text-decoration-none">
                            <div className="logo">
                                <img src="/assets/images/logo-01.png" height="60px" width="60px" className="img-fluid" alt="" />
                            </div>
                        </a>
                        <nav className="nav-bar d-none d-lg-block">
                            <ul className="d-flex gap-xl-5 gap-4 list-unstyled m-0">
                                <li className="header-li pointer position-relative">
                                    <a href="/#about" className="text-decoration-none text-white">About Us</a>
                                </li>
                                <li className="header-li pointer position-relative">
                                    <a href="/#services" className="text-decoration-none text-white">Service</a>
                                </li>
                                <li className="header-li pointer position-relative">
                                    <a href="/#work" className="text-decoration-none text-white">Work</a>
                                </li>
                                <li className="header-li pointer position-relative">
                                    <a href="/#resume" className="text-decoration-none text-white">Resume</a>
                                </li>
                                <li className="header-li pointer position-relative">
                                    <a href="/#skills" className="text-decoration-none text-white">Skills</a>
                                </li>
                                <li className="header-li pointer position-relative">
                                    <a href="/#testimonials" className="text-decoration-none text-white">Testimonials</a>
                                </li>
                                <li className="header-li pointer position-relative">
                                    <a href="/#contact" className="text-decoration-none text-white">Contact</a>
                                </li>
                            </ul>
                        </nav>
                        <div className="head-btn">
                            <a href="/#contact" className="text-decoration-none text-white">
                                <button className="header-btn">
                                    Hire Me!
                                </button>
                            </a>
                            <i className="ri-menu-2-line fs-2 d-lg-none" value="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop"></i>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <section className="back-home py-5">
                    <div className="container">
                        <div className="d-flex">
                            <a href="/" className="blog-all header-all pointer position-relative"><h3 className="pe-3 m-0 text-white">HOME</h3></a>
                            <h3>/</h3>
                            <a href="/#blog" className="blog-all header-all pointer position-relative"><h3 className="ps-3 m-0 text-white">BLOG</h3></a>
                        </div>
                    </div>
                </section>
                <section className="service py-100">
                    <div className="container">
                        <div className="title-portfolio-blog text-center py-3 pb-5">
                            <h2 className="fs-1">WHY I LOVE CREATIVE WEB DEVELOPMENT PROJECTS</h2>
                        </div>
                        <hr />
                        <div className="text-start">
                            <h3 className="fs-3">
                                1. REDUCING WEBSITE LOAD TIMES: WHY SPEED MATTERS
                            </h3>
                            <div className="ps-md-5 d-flex align-items-center text-center">
                                <i className="ri-arrow-right-double-line pt-3"></i>
                                <p className="ps-2 pb-0 mb-0 fs-5 pt-3">How Load Time Affects SEO and User Retention</p>
                            </div>
                            <div className="ps-md-5 d-flex align-items-center text-center">
                                <i className="ri-arrow-right-double-line pt-3"></i>
                                <p className="ps-2 pb-0 mb-0 fs-5 pt-3">The Impact of Mobile-First Design on Load Speed</p>
                            </div>
                            <div className="ps-md-5 d-flex align-items-center text-center">
                                <i className="ri-arrow-right-double-line pt-3"></i>
                                <p className="ps-2 pb-0 mb-0 fs-5 pt-3">The Role of First Contentful Paint (FCP) in User Experience</p>
                            </div>
                            <div className="ps-md-5 d-flex align-items-center text-center">
                                <i className="ri-arrow-right-double-line pt-3"></i>
                                <p className="ps-2 pb-0 mb-0 fs-5 pt-3">How to Measure and Benchmark Your Website’s Load Time</p>
                            </div>
                        </div>
                        <hr />
                        <div className="text-start">
                            <h3 className="fs-3">
                                2. HOW TO COMPRESS IMAGES WITHOUT SACRIFICING QUALITY
                            </h3>
                            <div className="ps-md-5 d-flex align-items-center text-center">
                                <i className="ri-arrow-right-double-line pt-3"></i>
                                <p className="ps-2 pb-0 mb-0 fs-5 pt-3">Best Image Compression Formats for Different Website Needs</p>
                            </div>
                            <div className="ps-md-5 d-flex align-items-center text-center">
                                <i className="ri-arrow-right-double-line pt-3"></i>
                                <p className="ps-2 pb-0 mb-0 fs-5 pt-3">Why WebP is the Future of Image Compression</p>
                            </div>
                            <div className="ps-md-5 d-flex align-items-center text-center">
                                <i className="ri-arrow-right-double-line pt-3"></i>
                                <p className="ps-2 pb-0 mb-0 fs-5 pt-3">How to Automate Image Compression with Build Tools</p>
                            </div>
                            <div className="ps-md-5 d-flex align-items-center text-center">
                                <i className="ri-arrow-right-double-line pt-3"></i>
                                <p className="ps-2 pb-0 mb-0 fs-5 pt-3">Tools for Batch-Compressing Images to Save Time</p>
                            </div>
                        </div>
                        <hr />
                        <div className="text-start">
                            <h3 className="fs-3">
                                3. THE POWER OF CACHING: BOOSTING YOUR SITE’S SPEED
                            </h3>
                            <div className="ps-md-5 d-flex align-items-center text-center">
                                <i className="ri-arrow-right-double-line pt-3"></i>
                                <p className="ps-2 pb-0 mb-0 fs-5 pt-3">The Difference Between Browser, Server, and CDN Caching</p>
                            </div>
                            <div className="ps-md-5 d-flex align-items-center text-center">
                                <i className="ri-arrow-right-double-line pt-3"></i>
                                <p className="ps-2 pb-0 mb-0 fs-5 pt-3">How to Set Up Caching Headers for Better Performance</p>
                            </div>
                            <div className="ps-md-5 d-flex align-items-center text-center">
                                <i className="ri-arrow-right-double-line pt-3"></i>
                                <p className="ps-2 pb-0 mb-0 fs-5 pt-3">Cache Invalidation Strategies: Keeping Content Fresh</p>
                            </div>
                            <div className="ps-md-5 d-flex align-items-center text-center">
                                <i className="ri-arrow-right-double-line pt-3"></i>
                                <p className="ps-2 pb-0 mb-0 fs-5 pt-3">Implementing Object Caching for Dynamic Websites</p>
                            </div>
                        </div>
                        <hr />
                        <div className="text-start">
                            <h3 className="fs-3">
                                4. USING A CONTENT DELIVERY NETWORK (CDN) TO IMPROVE PERFORMANCE
                            </h3>
                            <div className="ps-md-5 d-flex align-items-center text-center">
                                <i className="ri-arrow-right-double-line pt-3"></i>
                                <p className="ps-2 pb-0 mb-0 fs-5 pt-3">How CDNs Work and Why They Speed Up Your Website</p>
                            </div>
                            <div className="ps-md-5 d-flex align-items-center text-center">
                                <i className="ri-arrow-right-double-line pt-3"></i>
                                <p className="ps-2 pb-0 mb-0 fs-5 pt-3">Choosing the Right CDN for Your Website’s Needs</p>
                            </div>
                            <div className="ps-md-5 d-flex align-items-center text-center">
                                <i className="ri-arrow-right-double-line pt-3"></i>
                                <p className="ps-2 pb-0 mb-0 fs-5 pt-3">Leveraging Edge Servers in Your CDN for Ultra-Low Latency</p>
                            </div>
                            <div className="ps-md-5 d-flex align-items-center text-center">
                                <i className="ri-arrow-right-double-line pt-3"></i>
                                <p className="ps-2 pb-0 mb-0 fs-5 pt-3">How to Set Up a CDN for WordPress, Shopify, or Custom Sites</p>
                            </div>
                        </div>
                        <hr />
                        <div className="text-start">
                            <h3 className="fs-3">
                                5. MINIFYING CODE: A SIMPLE WAY TO IMPROVE WEBSITE SPEED
                            </h3>
                            <div className="ps-md-5 d-flex align-items-center text-center">
                                <i className="ri-arrow-right-double-line pt-3"></i>
                                <p className="ps-2 pb-0 mb-0 fs-5 pt-3">The Importance of Minifying HTML, CSS, and JavaScript</p>
                            </div>
                            <div className="ps-md-5 d-flex align-items-center text-center">
                                <i className="ri-arrow-right-double-line pt-3"></i>
                                <p className="ps-2 pb-0 mb-0 fs-5 pt-3">How to Automate Code Minification in Your Workflow</p>
                            </div>
                            <div className="ps-md-5 d-flex align-items-center text-center">
                                <i className="ri-arrow-right-double-line pt-3"></i>
                                <p className="ps-2 pb-0 mb-0 fs-5 pt-3">Best Tools for Minifying Code: A Comprehensive Guide</p>
                            </div>
                            <div className="ps-md-5 d-flex align-items-center text-center">
                                <i className="ri-arrow-right-double-line pt-3"></i>
                                <p className="ps-2 pb-0 mb-0 fs-5 pt-3">Combining and Minifying Files to Reduce HTTP Requests</p>
                            </div>
                        </div>
                        <hr />
                    </div>
                </section>
            </main>
            <footer className="bg-gradiant pt-5">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-12">
                            <a href="/" className="text-decoration-none">
                                <div className="logo">
                                    <img src="/assets/images/logo-01.png" height="60px" width="60px" className="img-fluid" alt="" />
                                </div>
                            </a>
                            <div className="footer-nav-bar text-center">
                                <ul className="list-unstyled d-flex justify-content-center gap-4 my-4">
                                    <li className="header-li pointer position-relative">
                                        <a href="/#about" className="text-decoration-none text-white">About</a>
                                    </li>
                                    <li className="header-li pointer position-relative">
                                        <a href="/#services" className="text-decoration-none text-white">Service</a>
                                    </li>
                                    <li className="header-li pointer position-relative">
                                        <a href="/#resume" className="text-decoration-none text-white">Resume</a>
                                    </li>
                                    <li className="header-li pointer position-relative">
                                        <a href="/#contact" className="text-decoration-none text-white">Contact</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="copyright-box mb-4">
                                <h2 className="copyright">© 2024 All rights reserved by
                                    <a href="/" className="text-decoration-none">
                                        <span>ThemeJunction</span>
                                    </a>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <a href="#" title="top">
                <button className="btn-top-arrow" title="arrow">
                    <i className="ri-arrow-up-line"></i>
                </button>
            </a>

        </>
    );
}
