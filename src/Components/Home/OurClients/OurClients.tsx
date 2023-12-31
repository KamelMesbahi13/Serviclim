import { motion } from "framer-motion";
import data from "../../../data.json";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ImgOne from "../../../assets/peugeot.png";
import ImgTwo from "../../../assets/LaBelle.png";
import ImgThree from "../../../assets/Biopharm.jpg";
import ImgFour from "../../../assets/cpa.png";
import ImgFive from "../../../assets/Cnep.png";
import ImgSix from "../../../assets/Mla.png";

type Prop = {
  id?: number;
  Title_fr?: string;
  Title_ar?: string;
  Client_image?: string;
  images?: HTMLImageElement;
  imgOne: string;
  imgTwo: string;
  imgThree: string;
  imgFour: string;
  imgFive: string;
  imgSix: string;
};

const OurClients = () => {
  const images: {
    id: number;
    imgOne: string;
    imgTwo: string;
    imgThree: string;
    imgFour: string;
    imgFive: string;
    imgSix: string;
  }[] = [
    {
      id: 1,
      imgOne: ImgOne,
      imgTwo: ImgTwo,
      imgThree: ImgThree,
      imgFour: ImgFour,
      imgFive: ImgFive,
      imgSix: ImgSix,
    },
  ];

  const Images = images.map(
    ({ imgOne, imgTwo, imgThree, imgFour, imgFive, imgSix, id }: Prop) => {
      return (
        <div key={id}>
          <div className="flex justify-center w-12 mt-8 md:mt-20 sm:w-20 lg:w-24 ">
            <LazyLoadImage src={imgOne} alt="Client" />
            <LazyLoadImage className="ml-4" src={imgTwo} alt="Client" />
            <LazyLoadImage className="mx-4" src={imgThree} alt="Client" />
            <LazyLoadImage className="mr-4" src={imgFour} alt="Client" />
            <LazyLoadImage src={imgFive} alt="Client" />
            <LazyLoadImage src={imgSix} alt="Client" />
          </div>
        </div>
      );
    }
  );
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 0.8 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
      >
        <div className="container">
          <div className="my-12">
            {data.ourClients.map(({ id, Title_fr, Title_ar }) => {
              return (
                <div key={id}>
                  <div className="text-center">
                    <div>
                      <h1 className="mb-2">
                        {Title_fr}{" "}
                        <span className="headerColor">Travaillé</span>{" "}
                      </h1>
                      <h1>
                        {Title_ar}{" "}
                        <span className="headerColor">عملوا معنا</span>{" "}
                      </h1>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="textCenter">
          <div>
            <a href="/Nos Références">
              <div className="pb-12 shadow-lg">{Images}</div>
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default OurClients;
