import { useParams } from "react-router-dom";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import ServiceBanner from "../components/Services/ServiceBanner";
import ServiceContent from "../components/Services/ServiceContent";
import ServiceSidebar from "../components/Services/ServiceSidebar";

import { serviceDetails } from "../components/data/servicesDetails";

export default function ServiceDetails() {
  const { slug } = useParams();

  const service = Object.values(serviceDetails).find(
    (item) => item.slug === slug
  );

  if (!service) {
    return (
      <div className="container py-5">
        <h1>Service Not Found</h1>
      </div>
    );
  }

  return (
    <>
      <Header />

      <ServiceBanner
        title={service.title}
      />

      <section className="Services-and-contect py-100">
        <div className="container">

          <div className="row gy-4">

            <div className="col-lg-8">
              <ServiceContent
                {...service}
              />
            </div>

            <div className="col-lg-4">
              <ServiceSidebar />
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}