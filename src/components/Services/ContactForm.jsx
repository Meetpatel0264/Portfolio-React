export default function ContactForm() {
  return (
    <div className="my-services rounded-3">

      <h2 className="pb-4">
        Get in Touch
      </h2>

      <form className="text-center w-100 get-my-touch">

        <input
          type="text"
          className="pe-5 py-3 rounded-3 mb-3"
          placeholder="Name"
        />

        <input
          type="email"
          className="pe-5 py-3 rounded-3 mb-3"
          placeholder="Email"
        />

        <textarea
          className="rounded-3 mb-3"
          cols="27"
          rows="5"
          placeholder="Message"
        ></textarea>

        <button
          type="submit"
          className="px-5 py-2 rounded-5 btn-devlopment"
        >
          Send Message
        </button>

      </form>
    </div>
  );
}