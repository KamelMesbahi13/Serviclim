import { LazyLoadImage } from "react-lazy-load-image-component";
import data from "../../../data.json";
import { motion } from "framer-motion";
import "react-lazy-load-image-component/src/effects/blur.css";
import ImgOne from "../../../assets/Concept.png";
import ImgTwo from "../../../assets/Instalation.png";
import ImgThree from "../../../assets/Maintenance.png";

type Props = {
  id?: number;
  Title_fr?: string;
  Title_ar?: string;
  Paragraph_fr?: string;
  Paragraph_ar?: string;
  Img?: string;
};

const ourServicesTwo: Props[] = [
  {
    id: 1,
    Img: ImgOne,
    Title_fr: "Conception",
    Title_ar: "تصميم",
    Paragraph_fr:
      "Nous proposons également des services de conception de chambres froides et de systèmes de climatisation sur mesure ! Que ce soit pour une chambre froide pour votre entreprise alimentaire ou pour un système de climatisation et de ventilation pour votre bureau, nous pouvons vous aider à concevoir la solution parfaite. Notre équipe d'experts travaillera avec vous pour comprendre vos besoins et vos exigences ,afin de créer un système qui répondra à vos attentes.",
    Paragraph_ar:
      "كما نقدم أيضًا خدمات تصميم غرف التبريد ونظام تكييف الهواء المخصصة! سواء كانت غرف التبريد لأعمالكم الغذائية أو نظام تكييف وتهوية لمكتبكم، يمكننا مساعدتك في تصميم الحل الأمثل. سيعمل فريق الخبراء لدينا معك لفهم احتياجاتك ومتطلباتك من أجل إنشاء نظام يلبي توقعاتك",
  },
  {
    id: 2,
    Img: ImgTwo,
    Title_fr: "Installation",
    Title_ar: "التركيب",
    Paragraph_fr:
      "Notre entreprise propose l’installation de vos chambres froides et les services de climatisation et ventilation en vous fournissant un équipement de qualité pour différents secteurs tels que l'hôtellerie, les centres de données et les environnements industriels. Nous mettons l'accent sur l'assurance et le soutien de votre projet, ainsi que sur la satisfaction de nos clients.",
    Paragraph_ar:
      "تقدم شركتنا خدمات تركيب غرف التبريد وتكييف الهواء والتهوية من خلال تزويدك بمعدات عالية الجودة لمختلف القطاعات مثل الفندقة ومراكز البيانات والبيئات الصناعية. نحن نركز على ضمان ودعم مشروعك، و ارضاء عملائنا",
  },
  {
    id: 3,
    Img: ImgThree,
    Title_fr: "Maintenance",
    Title_ar: "خدمة صيانة",
    Paragraph_fr:
      "Entretien essentiel du HVAC pour des performances optimales. Nos techniciens qualifiés effectuent des vérifications approfondies, garantissant efficacité et confort tout au long de l'année",
    Paragraph_ar:
      "صيانة التدفئة و التهوية و تكييف الهواء الأساسية لتحقيق الأداء الأمثل. يقوم التقنيون المؤهلون بإجراء فحوصات متعمقة، مما يضمن الكفاءة و الراحة على مدار السنة",
  },
];

const OurServicesBox = () => {
  const firstPart = data.ourServicesOne.map(
    ({ id, Title_fr, Title_ar, Paragraph_fr, Paragraph_ar }: Props) => (
      <div key={id}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          className="textCenter"
        >
          <div className="p-4 mt-4 md:mt-20">
            <div>
              <h1>
                {Title_fr}{" "}
                <span className="headerColor">
                  La climatisation, réfrigération, chauffage et ventilation
                </span>{" "}
              </h1>
              <h1 className="mt-4">
                {Title_ar}{" "}
                <span className="headerColor">
                  التكييف ، التبريد، التدفئة و التهوية
                </span>
              </h1>
            </div>
            <div>
              <p className="my-4">{Paragraph_fr}</p>
              <p>{Paragraph_ar}</p>
            </div>
          </div>
        </motion.div>
      </div>
    )
  );

  const secondPart = ourServicesTwo.map(
    ({ id, Title_fr, Title_ar, Paragraph_fr, Paragraph_ar, Img }: Props) => (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
        key={id}
      >
        <div className="p-4 duration-500 border rounded-sm hover:shadow-xl border-grey">
          <div className="textCenter">
            <div>
              <LazyLoadImage
                className="w-12"
                effect="blur"
                src={Img}
                alt={Title_fr}
              />
            </div>
            <div>
              <h6 className="text-main">{Title_fr}</h6>
              <h6 className="text-main">{Title_ar}</h6>
            </div>
            <div>
              <p className="text-left">{Paragraph_fr}</p>
              <p className="mt-4 text-right">{Paragraph_ar}</p>
            </div>
          </div>
        </div>
      </motion.div>
    )
  );

  return (
    <div className="mt-12 shadow-2xl md:pb-8 md:mt-32">
      <div className="textCenter">
        <div className="w-full md:w-3/4">{firstPart}</div>
        <div className="grid w-full grid-cols-1 mt-8 gap-x-12 md:grid-cols-3">
          {secondPart}
        </div>
      </div>
    </div>
  );
};

export default OurServicesBox;
