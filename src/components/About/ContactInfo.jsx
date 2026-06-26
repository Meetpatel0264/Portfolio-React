import ContactItem from "./ContactItem";
import Button from "../Common/Button";
import { aboutData } from "../data/aboutData";

export default function ContactInfo() {
  return (
    <div className="text-white d-flex flex-column gap-4">

      {aboutData.contacts.map((item, index) => (
        <ContactItem
          key={index}
          {...item}
        />
      ))}

      <Button
        text="Download CV"
        href={aboutData.resume}
        download
      />

    </div>
  );
}