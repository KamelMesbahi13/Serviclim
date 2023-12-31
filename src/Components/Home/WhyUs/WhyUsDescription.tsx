import data from "../../../data.json";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import ImgOne from "../../../assets/ServiclimOne.jpg";
import ImgTwo from "../../../assets/VentilationTwo.jpg";

const Images: { ImgOne: string; ImgTwo: string }[] = [
  {
    ImgOne,
    ImgTwo,
  },
];

type Props = {
  id: number;
  Title_fr: string;
  Title_ar: string;
  Paragraph_fr: string;
  Paragraph_ar: string;
};

const WhyUsDescription = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Nos Services", { replace: true });
  };

  return (
    <>
      <div className="mt-4 lg:mt-20">
        <div className="flex">
          {data.whyUsDescription.map(
            ({ id, Title_fr, Title_ar, Paragraph_fr, Paragraph_ar }: Props) => {
              return (
                <div
                  key={id}
                  className="flex flex-col-reverse items-center lg:flex-row"
                >
                  <div>
                    <div className="relative flex gap-x-8 lg:block">
                      <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                          hidden: { opacity: 0, x: -50 },
                          visible: { opacity: 1, x: 0 },
                        }}
                      >
                        {Images.map((el, i) => {
                          return (
                            <div key={i}>
                              <LazyLoadImage
                                className="h-[10rem] md:h-[15rem] lg:w-[65%] lg:h-auto w-[70rem]"
                                src={el.ImgOne}
                                alt="Climatiseur"
                                effect="blur"
                              />{" "}
                            </div>
                          );
                        })}
                      </motion.div>

                      <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8 }}
                        variants={{
                          hidden: { opacity: 0 },
                          visible: { opacity: 1 },
                        }}
                      >
                        {Images.map((el, i) => {
                          return (
                            <div key={i}>
                              <LazyLoadImage
                                className="h-[10rem] md:h-[15rem] w-[70rem] lg:absolute lg:border-[18px] lg:border-[#fefefe] lg:w-[60%] lg:h-[18rem] lg:top-[60%] lg:left-[35%]"
                                src={el.ImgTwo}
                                alt="Reparation"
                              />
                            </div>
                          );
                        })}
                      </motion.div>
                    </div>
                  </div>
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                      hidden: { opacity: 0, x: 50 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    className="my-12 lg:mb-0 lg:mt-28"
                  >
                    <div>
                      <div className="mx-auto mb-4 lg:mb-0">
                        <h1>
                          Parce que{" "}
                          <span className="headerColor">SERVICLIM</span>{" "}
                          {Title_fr}
                        </h1>
                        <h1 className="my-2 text-right">
                          لأن <span className="headerColor">سيرفكليم</span>
                          {Title_ar}
                        </h1>
                      </div>
                    </div>
                    <div>
                      <p className="lg:my-4">{Paragraph_fr}</p>
                      <p className="text-right">{Paragraph_ar}</p>
                    </div>
                    <div>
                      <div onClick={handleClick}>
                        <button className="buttonCust">
                          Découvrir plus
                          <span className="first"></span>
                          <span className="second"></span>
                          <span className="third"></span>
                          <span className="fourth"></span>
                        </button>
                      </div>{" "}
                    </div>
                  </motion.div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </>
  );
};

export default WhyUsDescription;
