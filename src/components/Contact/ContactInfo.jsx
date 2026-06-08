import ContactItem from "./ContactItem";
import { contactInfo } from "../data/contactData";

export default function ContactInfo() {
  return (
    <div className="m-auto p-sm-5 py-5">

      {contactInfo.map((item) => (
        <ContactItem
          key={item.id}
          {...item}
        />
      ))}

    </div>
  );
}