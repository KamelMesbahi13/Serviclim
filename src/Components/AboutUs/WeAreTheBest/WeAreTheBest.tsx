import data from "../../../data.json";
import { motion } from "framer-motion";
import Img from "../../../assets/AboutUs.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

type Props = {
  id: number;
  Title_fr: string;
  Title_ar: string;
  Paragraph_fr: string;
  Paragraph_ar: string;
};

const WeAreTheBest = () => {
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        className="my-8 lg:my-28"
      >
        <div>
          {data.aboutUs_theBest.map(
            ({ id, Title_fr, Title_ar, Paragraph_fr, Paragraph_ar }: Props) => {
              return (
                <div key={id}>
                  <div>
                    <div className="flex flex-col lg:flex-row">
                      <div className="w-full lg:w-3/4">
                        <div>
                          <h1>
                            {Title_fr}{" "}
                            <span className="headerColor">
                              {" "}
                              climatisation, réfrigération, chauffage et
                              ventilation
                            </span>
                          </h1>
                          <h1 className="text-right">
                            {Title_ar}{" "}
                            <span className="headerColor">
                              التكييف ، التبريد، التدفئة و التهوية
                            </span>
                          </h1>
                        </div>
                        <div className="mt-4">
                          <p>{Paragraph_fr}</p>
                          <p className="mt-4 text-right">{Paragraph_ar}</p>
                        </div>
                      </div>
                      <div className="mt-8 lg:mt-0 lg:textRight">
                        <LazyLoadImage
                          effect="blur"
                          src={Img}
                          alt={Title_fr}
                          className="w-full lg:w-8/12"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </motion.div>
    </>
  );
};

export default WeAreTheBest;
