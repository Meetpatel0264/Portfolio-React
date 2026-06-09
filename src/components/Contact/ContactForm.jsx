import { useRef } from "react";
import emailjs from "@emailjs/browser";

import ContactHeader from "./ContactHeader";
import { serviceOptions } from "../data/contactData";

export default function ContactForm() {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert("✅ Message Sent Successfully!");
        formRef.current.reset();
      })
      .catch((error) => {
        console.log(error);
        alert("❌ Failed to send message!");
      });
  };

  return (
    <div className="form p-sm-5 text-center">

      <ContactHeader />

      <form
        ref={formRef}
        onSubmit={handleSubmit}
      >
        <div className="row gy-4">

          <div className="col-lg-6">
            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              required
              className="w-100 p-3 rounded-3 info-form"
            />
          </div>

          <div className="col-lg-6">
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              required
              className="w-100 p-3 rounded-3 info-form"
            />
          </div>

          <div className="col-lg-6">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="w-100 p-3 rounded-3 info-form"
            />
          </div>

          <div className="col-lg-6">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              className="w-100 p-3 rounded-3 info-form"
            />
          </div>

          <div className="col-12">
            <select
              name="service"
              required
              className="w-100 rounded-3 p-3 px-4 info-form"
            >
              {serviceOptions.map((service, index) => (
                <option
                  key={index}
                  value={service}
                >
                  {service}
                </option>
              ))}
            </select>
          </div>

          <div className="col-12">
            <textarea
              name="message"
              rows="7"
              placeholder="Message"
              required
              className="w-100 info-form p-3"
            />
          </div>

          <div className="w-auto">
            <button
              type="submit"
              className="rounded-pill send-button py-3 px-4"
            >
              Send Message
            </button>
          </div>

        </div>
      </form>
    </div>
  );
}