import { LazyLoadImage } from "react-lazy-load-image-component";
import data from "../../../data.json";
import { motion } from "framer-motion";
import ImgOne from "../../../assets/OurStory.jpg";

type Props = {
  id: number;
  Title_fr: string;
  Title_ar: string;
  Paragraph_fr: string;
  Paragraph_ar: string;
};

const OurStory = () => {
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
        className="py-12 mt-4 back md:mt-36"
      >
        <div>
          <div className="container">
            {data.aboutUs_ourStory.map(
              ({
                id,
                Title_fr,
                Title_ar,
                Paragraph_fr,
                Paragraph_ar,
              }: Props) => {
                return (
                  <div key={id}>
                    <motion.div>
                      <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                          hidden: { opacity: 0 },
                          visible: { opacity: 1 },
                        }}
                        className="w-full mb-4 text-2xl text-center"
                      >
                        <h1 className="md:text-5xl">{Title_fr}</h1>
                        <h1 className="text-2xl md:text-5xl">{Title_ar}</h1>
                      </motion.div>
                      <div>
                        <div className="flex items-center mb-4 md:mb-8">
                          <div>
                            <LazyLoadImage
                              className="w-20 h-20 rounded-full md:w-24 md:h-24"
                              src={ImgOne}
                              alt="Mr. abdelhak"
                            />
                          </div>
                          <div className="ml-4">
                            <p className="mb-2">Ferhat Abdelhak</p>
                            <p>
                              Directeur De{" "}
                              <span className="italic font-semibold text-main">
                                SERVICLIM
                              </span>{" "}
                            </p>
                          </div>
                        </div>
                        <div>
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
                            <p>{Paragraph_fr}</p>
                          </motion.div>
                          <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5 }}
                            variants={{
                              hidden: { opacity: 0, x: 50 },
                              visible: { opacity: 1, x: 0 },
                            }}
                          >
                            <p className="mt-4 text-right">{Paragraph_ar}</p>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default OurStory;
