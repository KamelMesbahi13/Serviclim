import data from "../../../data.json";
import { motion } from "framer-motion";
import ImgOne from "../../../assets/Experiance.png";
import ImgTwo from "../../../assets/Solutions.png";
import ImgThree from "../../../assets/Trust.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

type Props = {
  id: number;
  Title_fr: string;
  Title_ar: string;
  Paragraph_fr: string;
  Paragraph_ar: string;
  Icon: string;
};

const whyUsBoxes: Props[] = [
  {
    id: 1,
    Title_fr: "Expérience",
    Title_ar: "الخبرة",
    Paragraph_fr:
      "Nous avons une vaste expérience dans le domaine de la climatisation centralisée, du froid commercial et de la ventilation. Nous avons déjà réalisé de nombreux projets réussis et avons une équipe d'experts qualifiés pour vous accompagner à chaque étape, de l'étude à la réalisation.",
    Paragraph_ar:
      "لدينا خبرة واسعة في مجال التكييف المركزي،التبريد و التهوية. لقد حققنا العديد من المشاريع الناجحة ولدينا فريق من الخبراء المؤهلين لإتباعكم في كل مرحلة، من الدراسة حتى  التنفيذ",
    Icon: ImgOne,
  },
  {
    id: 2,
    Title_fr: "Solutions",
    Title_ar: "حلول",
    Paragraph_fr:
      "Nous comprenons l'importance de solutions personnalisées pour répondre à vos besoins spécifiques. Nous travaillons en étroite collaboration avec nos clients pour comprendre leurs exigences et leur fournir des solutions adaptées à leurs besoins.",
    Paragraph_ar:
      "نحن نتفهم أهمية الحلول المخصصة لتلبية احتياجاتكم الخاصة. نحن نعمل بشكل وثيق مع عملائنا لفهم متطلباتهم وتقديم حلول مكيفة لتلبية احتياجاتهم",
    Icon: ImgTwo,
  },
  {
    id: 3,
    Title_fr: "Confiance",
    Title_ar: "الثقة",
    Paragraph_fr:
      "Enfin, nous sommes engagés à fournir un excellent service à la clientèle. Nous sommes là pour répondre à toutes vos questions, vous conseiller et vous assurer une satisfaction totale.",
    Paragraph_ar:
      "اخيرا ، نحن ملزمون بتقديم احسن الخدمات لعملائنا ، الإجابة على جميع اسئلتكم ، تقديم لكم النصائح اللازمة و ضمان راحتكم التامة",
    Icon: ImgThree,
  },
];

const WhyUs = () => {
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
        className="mt-4 lg:mt-20"
      >
        <div>
          <div className="mt-4">
            <div className="text-center">
              <div>
                <div className="mt-2 mb-4">
                  <h1 className="mb-2">
                    Pourquoi{" "}
                    <span className="headerColor">Nous Choisir ??</span>{" "}
                  </h1>

                  <h1>
                    لماذا <span className="headerColor">تخترنا ؟؟</span>{" "}
                  </h1>
                </div>
              </div>

              <div className="w-full mx-auto lg:w-3/4">
                {data.whyUsHeader.map(({ Paragraph_fr, Paragraph_ar }, i) => {
                  return (
                    <div key={i}>
                      {" "}
                      <p>{Paragraph_fr}</p>
                      <p>{Paragraph_ar}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="grid gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3">
            {whyUsBoxes.map(
              ({
                id,
                Title_fr,
                Paragraph_fr,
                Paragraph_ar,
                Title_ar,
                Icon,
              }: Props) => {
                return (
                  <div key={id}>
                    <div>
                      <div className="p-4 duration-500 shadow-lg hover:shadow-xl hover:bg-[#eeeeee60] hover:scale-[1.02] border box border-grey md:h-[30rem] lg:h-[32rem] textCenter">
                        <div className="pb-4 md:pb-0">
                          <LazyLoadImage
                            className="w-12"
                            src={Icon}
                            alt={Title_fr}
                          />
                          <div>
                            <h6 className="mt-2 text-main">{Title_fr}</h6>
                            <h6 className="text-main">{Title_ar}</h6>
                          </div>
                          <div>
                            <p className="mb-4">{Paragraph_fr}</p>
                            <p>{Paragraph_ar}</p>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default WhyUs;
