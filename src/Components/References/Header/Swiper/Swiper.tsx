import { Swiper, SwiperSlide } from "swiper/react";
import ImgOne from "../../../../assets/RefetanceOne.jpg";
import ImgTwo from "../../../../assets/RefetanceTwo.jpg";
import ImgThree from "../../../../assets/RefetanceThree.jpg";
import ImgFour from "../../../../assets/RefetanceFour.jpg";
import ImgFive from "../../../../assets/RefetanceFive.jpg";
import ImgSix from "../../../../assets/RefetanceSix.jpg";
import ImgSeven from "../../../../assets/RefetanceSeven.jpg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { Pagination, Navigation } from "swiper/modules";

export default function SwiperContent() {
  return (
    <>
      <div className="mt-8 md:mt-20">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              className="w-[35rem] md:w-[30rem]"
              src={ImgOne}
              alt="Reference One"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-[25rem] md:w-[30rem]"
              src={ImgTwo}
              alt="Reference Two"
            />
          </SwiperSlide>{" "}
          <SwiperSlide>
            <img
              className="w-[25rem] md:w-[30rem]"
              src={ImgThree}
              alt="Reference Three"
            />
          </SwiperSlide>{" "}
          <SwiperSlide>
            <img
              className="w-[25rem] md:w-[30rem]"
              src={ImgFour}
              alt="Reference Four"
            />
          </SwiperSlide>{" "}
          <SwiperSlide>
            <img
              className="w-[25rem] md:w-[30rem]"
              src={ImgFive}
              alt="Reference Five"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-[25rem] md:w-[30rem]"
              src={ImgSix}
              alt="Reference Six"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-[25rem] md:w-[30rem]"
              src={ImgSeven}
              alt="Reference Seven"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
