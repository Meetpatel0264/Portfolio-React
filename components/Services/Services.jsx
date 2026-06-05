import SectionTitle from "../Common/SectionTitle";
import ServiceCard from "./ServiceCard";
import { servicesData } from "../data/servicesData";

export default function Services() {
  return (
    <section
      className="service py-100"
      id="services"
    >
      <div className="container">

        <SectionTitle
          title="My Quality Services"
          description="We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers."
        />

        <div className="row bottom-border gy-4 py-4">

          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              {...service}
            />
          ))}

        </div>

      </div>
    </section>
  );
}