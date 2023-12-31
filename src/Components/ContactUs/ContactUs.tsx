import { lazy } from "react";
const Header = lazy(() => import("./Header/Header.tsx"));
const GetInTouch = lazy(() => import("./GetInTouch/GetInTouch.tsx"));
const Map = lazy(() => import("./Map/Map.tsx"));

const ContactUs = () => {
  return (
    <>
      <div>
        <Header />
        <div className="container">
          <GetInTouch />
          <Map />
        </div>
      </div>
    </>
  );
};

export default ContactUs;
