export default function Footer() {
  return (
    <>
<footer className="bg-gradiant pt-5">
<div className="container">
<div className="row text-center">
<div className="col-12">
<a href="#" className="text-decoration-none">
<div className="logo">
<img src="/assets/images/logo-01.png" height="100px" width="100px" className="img-fluid" alt="" />
</div>
</a>
<div className="footer-nav-bar text-center">
<ul className="list-unstyled d-flex justify-content-center gap-4 my-4">
<li className="header-li pointer position-relative">
<a href="/#about" className="text-decoration-none text-white">About</a>
</li>
<li className="header-li pointer position-relative">
<a href="#/#services" className="text-decoration-none text-white">Service</a>
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
                            <a href="#" className="text-decoration-none">
<span>Meet Patel</span>
</a>
</h2>
</div>
</div>
</div>
</div>
</footer>
    </>
  );
}
