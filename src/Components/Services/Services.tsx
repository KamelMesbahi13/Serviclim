import { lazy } from "react";
const Header = lazy(() => import("./Header/Header.tsx"));
const OurServicesBox = lazy(
  () => import("./OurServicesBox/OurServicesBox.tsx")
);
const OurServicesContent = lazy(
  () => import("./OurServicesContent/OurServicesContent.tsx")
);
const ContactUsSection = lazy(
  () => import("../../Ui/ContactUsSection/ContactUsSection.tsx")
);

const Services = () => {
  return (
    <>
      <Header />
      <div className="container">
        <OurServicesBox />
        <OurServicesContent />
      </div>
      <ContactUsSection />
    </>
  );
};

export default Services;
