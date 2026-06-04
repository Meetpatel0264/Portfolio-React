export default function Contact() {
  return (
    <>
<section className="form-section form-bg" id="contact">
<div className="container">
<div className="d-lg-flex">
<div className="col-lg-6 row gy-4">
<div className="form p-sm-5 text-center">
<div className="mb-2">
<h2 className="form-heading">Let’s work together!</h2>
<p className="form-contect">I design and code beautifully simple things, and I love what I
                                    do. It’s that simple!</p>
<form action="https://api.web3forms.com/submit" method="POST">
<input type="hidden" name="access_key" required value="12a0a0db-ac30-4bed-9699-b6f2bced9a8f" />
<div className="row gy-4">
<div className="col-lg-6">
<div className="border-1">
<input type="text" required placeholder="First name" className="w-100 p-3 rounded-3 border info-form ps-3" />
</div>
</div>
<div className="col-lg-6">
<div className="border-1">
<input type="text" required placeholder="Last name" className="w-100 p-3 rounded-3 border info-form ps-3" />
</div>
</div>
<div className="col-lg-6">
<div className="border-1">
<input type="text" required placeholder="Email Address" className="w-100 p-3 rounded-3 border info-form ps-3" />
</div>
</div>
<div className="col-lg-6">
<div className="border-1">
<input type="number" required placeholder="Phone Number" className="w-100 p-3 rounded-3 border info-form ps-3" />
</div>
</div>
<div className="col-12">
<select title="1" name="web" className="w-100 rounded-3 p-3 px-4 info-form">
<option value="1">Select an option</option>
<option value="2">Choose Service</option>
<option value="3">Branding Design</option>
<option value="4">Web Design</option>
<option value="5">UI/UX Design</option>
<option value="6">App Design</option>
</select>
</div>
<div className="col-12">
<textarea name="" id="" placeholder="Massege" className="w-100 info-form p-3" rows="7"></textarea>
</div>
<div className="w-auto">
<button className="rounded-pill send-button py-3 px-4">Send Message</button>
</div>
</div>
</form>
</div>
</div>
</div>
<div className="col-lg-6">
<div className="m-auto p-sm-5 py-5 justify-content-center align-items-center">
<div className="contect-me my-contect d-flex align-items-center">
<div>
<a href="tel:+919510537044" className="text-decoration-none"> <i className="ri-phone-line connect-by-with me-3"></i></a>
</div>
<div className="contact-all-media">
<h6 className="ps-2">Phone</h6>
<h5>+91 951 0537 044</h5>
</div>
</div>
<div className="contect-me pt-5 d-flex align-items-center">
<div>
<a href="mailto:meetpatel9996@gmail.com" className="text-decoration-none"><i className="ri-mail-line connect-by-with me-3"></i></a>
</div>
<div className="contact-all-media">
<h6 className="ps-2">Email</h6>
<h5>meetpatel9996@mail.com</h5>
</div>
</div>
<div className="contect-me pt-5 d-flex align-items-center">
<div>
<i className="ri-map-pin-2-line connect-by-with me-3"></i>
</div>
<div className="contact-all-media">
<h6 className="ps-2">Address</h6>
<h5>Avadhut Darshan,
                                        Surat, Gujarat</h5>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
    </>
  );
}
