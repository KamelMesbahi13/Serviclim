import { lazy } from "react";
const Header = lazy(() => import("./Header/Header.tsx"));
const OurStory = lazy(() => import("./OurStory/OurStory.tsx"));
const WeAreTheBest = lazy(() => import("./WeAreTheBest/WeAreTheBest.tsx"));
const Testimonial = lazy(() => import("../Home/Testimonial/Testimonial.tsx"));
const ContactUsSection = lazy(
  () => import("../../Ui/ContactUsSection/ContactUsSection.tsx")
);

const AboutUs = () => {
  return (
    <>
      <div>
        <Header />
        <OurStory />
        <div className="container">
          <WeAreTheBest />
        </div>
        <Testimonial />
        <ContactUsSection />
      </div>
    </>
  );
};

export default AboutUs;
