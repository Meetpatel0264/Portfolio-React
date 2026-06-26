import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

export default function Contact() {
  return (
    <section
      className="form-section form-bg"
      id="contact"
    >
      <div className="container">

        <div className="row">

          <div className="col-lg-6">
            <ContactForm />
          </div>

          <div className="col-lg-6">
            <ContactInfo />
          </div>

        </div>

      </div>
    </section>
  );
}