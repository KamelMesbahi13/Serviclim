import data from "../../../data.json";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import ImgOne from "../../../assets/peugeot.png";
import ImgTwo from "../../../assets/Mla.png";
import ImgThree from "../../../assets/LaBelle.png";
import Icon from "../../../assets/quote.png";

type Props = {
  id?: number;
  Title_fr?: string;
  Title_ar?: string;
  Paragraph_fr?: string;
  Paragraph_ar?: string;
  Client_name?: string;
  Client_image?: string;
  Icon?: string;
};

const testimonial: Props[] = [
  {
    id: 1,
    Icon: Icon,
    Paragraph_fr:
      "Nous soussignés, PEUGEOT ALGERIE, attestons que la société  SERVICLIM a finalisé les travaux conformément à nos exigences qui consiste en Maintenance préventive et curative des installations de climatisation centralisée de nos locaux. Cela dans les délais impartis.",
    Paragraph_ar:
      "نحن الموقعون أدناه، شركة بيجو الجزائر. سيرفيكليم قد أنهت العمل وفقًا لمتطلباتنا التي تتكون من الصيانة الوقائية والعلاجية لتركيبات تكييف الهواء المركزية في مبانينا. وذلك ضمن الإطار الزمني المخصص",
    Client_name: "PEUGEOT",
    Client_image: ImgOne,
  },
  {
    id: 2,
    Icon: Icon,
    Paragraph_fr:
      "Nous soussignés, MAGHREB LEASING ALGERIE, attestons que la société  SERVICLIM a finalisé les travaux conformément à nos exigences qui consiste en : Installation des climatiseurs Split System.Cela dans les délais impartis.",
    Paragraph_ar:
      "نحن الموقعون أدناه، شركة المغرب للإجارة والتأجير، نشهد أن شركة سيرفيكليم قد أنهت العمل وفقا لمتطلباتنا والتي تتمثل في: تركيب مكيفات الهواء بنظام سبليت، وذلك في الإطار الزمني المحدد",
    Client_name: "MLA",
    Client_image: ImgTwo,
  },
  {
    id: 3,
    Icon: Icon,
    Paragraph_fr:
      "Nous soussignés SPA,GRD, la belle , attestons que la société Serveclim , a finalisé les travaux conformément aux exigences de notre bon commande qui consiste en : la fourniture et pose d’un système de climatisation centralisée. Cela dans les delais impartis",
    Paragraph_ar:
      "نحن الموقعون أدناه لا بيل. نشهد أن شركة سيرفيكليم قد أنهت العمل وفقًا لمتطلباتنا: توريد وتركيب نظام تكييف مركزي خلال الإطار الزمني المخصص",
    Client_name: "LA BELLE",
    Client_image: ImgThree,
  },
];

const Testimonial = () => {
  return (
    <>
      <div className="relative pb-12 back">
        <div className="container">
          <div className="z-10 p-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7 }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              className="my-4 text-center"
            >
              <h1 className="mb-2">
                Ce Que Disent <span className="headerColor">Les Clients</span>{" "}
              </h1>
              <h1>
                ما يقوله <span className="headerColor">العملاء</span>{" "}
              </h1>
            </motion.div>
            <div className="flex flex-col bg-white md:flex-row">
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
                {data.testimonial_header.map(
                  ({
                    id,
                    Title_fr,
                    Title_ar,
                    Paragraph_fr,
                    Paragraph_ar,
                  }: Props) => {
                    return (
                      <div key={id}>
                        <div className="p-4 mt-0 md:mt-40">
                          <div>
                            <div>
                              <h1>
                                {" "}
                                <span className="headerColor">
                                  Témoignages de nos clients :{" "}
                                </span>{" "}
                                {Title_fr}
                              </h1>
                              <h1 className="text-right">
                                {" "}
                                <span className="headerColor">
                                  شهادات عملائنا :{" "}
                                </span>{" "}
                                {Title_ar}
                              </h1>{" "}
                            </div>
                            <div>
                              <p className="my-2">{Paragraph_fr}</p>
                              <p className="text-right">{Paragraph_ar}</p>
                            </div>
                            <div>
                              <a href="/Nos Références">
                                <button className="buttonCust">
                                  Découvrir plus
                                  <span className="first"></span>
                                  <span className="second"></span>
                                  <span className="third"></span>
                                  <span className="fourth"></span>
                                </button>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }
                )}
              </motion.div>
              <div className="z-10 p-4">
                {testimonial.map(
                  ({
                    id,
                    Icon,
                    Paragraph_fr,
                    Paragraph_ar,
                    Client_name,
                    Client_image,
                  }: Props) => {
                    return (
                      <div key={id}>
                        <motion.div
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, amount: 0.5 }}
                          transition={{ duration: 0.5 }}
                          variants={{
                            hidden: { opacity: 0, x: 50 },
                            visible: { opacity: 1, x: 0 },
                          }}
                          className="relative flex px-4 pt-0 pb-4 bg-white shadow-md md:p-4"
                        >
                          <div>
                            <div>
                              <LazyLoadImage
                                className="w-10 md:w-12"
                                src={Icon}
                                alt="Quote Icon"
                                effect="blur"
                              />
                            </div>
                            <div>
                              <div>
                                <p>{Paragraph_fr}</p>
                                <p className="mt-2 text-right">
                                  {Paragraph_ar}
                                </p>
                              </div>
                              <div className="flex items-center justify-between mt-4">
                                <div>
                                  <h6 className="text-main">{Client_name}</h6>
                                </div>
                                <div>
                                  <LazyLoadImage
                                    className="w-16 md:w-20"
                                    src={Client_image}
                                    alt={Client_name}
                                    effect="blur"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          className="bg-main w-full z-[1] absolute top-3/4 h-[10rem] "
        ></motion.div>
      </div>
    </>
  );
};

export default Testimonial;
