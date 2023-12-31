import { lazy } from "react";
const Header = lazy(() => import("./Header/Header.tsx"));
const SwiperContent = lazy(() => import("./Header/Swiper/Swiper.tsx"));

const References = () => {
  return (
    <>
      <div>
        <Header />
        <div className="container">
          <SwiperContent />
        </div>
      </div>
    </>
  );
};

export default References;
