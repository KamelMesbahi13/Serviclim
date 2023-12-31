import { lazy } from "react";
const Header = lazy(() => import("./Header/Header.tsx"));
const WhyUs = lazy(() => import("./WhyUs/WhyUs.tsx"));
const WhyUsServices = lazy(() => import("./WhyUs/WhyUsServices.tsx"));
const WhyUsDescription = lazy(() => import("./WhyUs/WhyUsDescription.tsx"));
const Testimonial = lazy(() => import("./Testimonial/Testimonial.tsx"));
const OurClients = lazy(() => import("./OurClients/OurClients.tsx"));

const Home = () => {
  return (
    <>
      <Header />
      <div className="container">
        <WhyUs />
        <WhyUsDescription />
        <WhyUsServices />
      </div>
      <Testimonial />
      <OurClients />
    </>
  );
};

export default Home;
