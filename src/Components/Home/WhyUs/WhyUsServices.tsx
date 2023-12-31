import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import ImgOne from "../../../assets/Climatisation.jpg";
import IconOne from "../../../assets/AirConditioner.png";
import ImgTwo from "../../../assets/ChambreFroide.jpeg";
import IconTwo from "../../../assets/ColdRoom.png";
import ImgThree from "../../../assets/Ventilation.jpg";
import IconThree from "../../../assets/Fan.png";
import ImgFour from "../../../assets/Maintenance.jpg";
import IconFour from "../../../assets/Maintenance.png";

type Props = {
  id: number;
  Title_fr: string;
  Title_ar: string;
  Paragraph_fr: string;
  Paragraph_ar: string;
  Image_One: string;
  Image_Two: string;
};

const whyUsServices: Props[] = [
  {
    id: 1,
    Image_One: ImgOne,
    Image_Two: IconOne,
    Title_fr: "Climatisation",
    Title_ar: "التكييف",
    Paragraph_fr:
      "Nous proposons une gamme d'équipements de climatisation complète à détente directe et indirecte pour des applications de confort tels: l'hôtellerie, administration de précision, Data Center, industrie pharma et ateliers de production",
    Paragraph_ar:
      "نحن نقدم مجموعة شاملة من أجهزة التكييف بنظام التبريد المباشر وغير المباشر لتطبيقات الراحة في الفنادق والإدارة ومراكز معالجة البيانات ذات الدقة العالية وصناعة المصانع والصيدلة وورش العمل",
  },
  {
    id: 2,
    Image_One: ImgTwo,
    Image_Two: IconTwo,
    Title_fr: "Froid",
    Title_ar: "التبريد",
    Paragraph_fr:
      "Nous prenons en charge la conception de chambres froides de petit, moyen ou grand volume, avec une température positive ou négative selon votre besoin.",
    Paragraph_ar:
      "نتكفل بصياغة غرف التبريد صغيرة، متوسطة او كبيرة الحجم كانت، مع درجة حرارة ايجابية او سلبية وفق طلبكم",
  },
  {
    id: 3,
    Image_One: ImgThree,
    Image_Two: IconThree,
    Title_fr: "Ventilation",
    Title_ar: "التهوية",
    Paragraph_fr:
      "Nous proposons une solution globale de ventilation mécanique contrôlée, de traitement d'air, d'extraction et de rafraichissement adiabatique pour de multiples applications",
    Paragraph_ar:
      "نحن نقدم حلاً شاملاً للتهوية الميكانيكية المضبوطة، ومعالجة الهواء، والاستخراج، والتبريد الإضافي لتطبيقات متعددة",
  },
  {
    id: 4,
    Image_One: ImgFour,
    Image_Two: IconFour,
    Title_fr: "Maintenance",
    Title_ar: "خدمة صيانة",
    Paragraph_fr:
      "Nous offrons un service de maintenance complet, pluridisciplinaire avec une méthode de gestion des plannings optimale et un support technique en astreinte 7j/7 et 24h/24 au service de nos clients.",
    Paragraph_ar:
      "نحن نقدم خدمة صيانة شاملة، متعددة التخصصات، مع أسلوب إدارة جداول مثالي ودعم فني متوفر على مدار الساعة طوال أيام الأسبوع لخدمة عملائنا",
  },
];

const WhyUsServices = () => {
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
        className="mt-12 mb-[26rem] md:mt-48"
      >
        <div className="grid grid-cols-1 gap-x-8 place-items-center gap-y-[28rem] md:gap-y-[33em] md:pb-20 lg:gap-y-[30em] md:grid-cols-2">
          {whyUsServices.map(
            ({
              id,
              Title_fr,
              Title_ar,
              Paragraph_fr,
              Paragraph_ar,
              Image_One,
              Image_Two,
            }: Props) => {
              return (
                <div key={id}>
                  <div>
                    <div className="relative">
                      <LazyLoadImage
                        className="w-[30rem] h-[20rem]"
                        src={Image_One}
                        alt={Title_fr}
                        effect="blur"
                      />
                      <div className="absolute duration-500 hover:scale-[1.01] hover:shadow-2xl top-[80%] card h-[28rem] sm:h-[33rem] lg:h-[26rem] rounded-md p-4 left-[50%] w-[90%] -translate-x-1/2 shadow-xl bg-[#eeeeee]">
                        <div className="p-4 card-content">
                          <div className="mt-4 textCenter md:h-auto">
                            <LazyLoadImage
                              className="w-12 h-12 mb-2"
                              src={Image_Two}
                              alt={Title_fr}
                              effect="blur"
                            />
                            <h6 className="text-main">{Title_fr}</h6>
                            <h6 className="text-main">{Title_ar}</h6>
                          </div>

                          <p>{Paragraph_fr}</p>
                          <p className="text-right md:mt-4">{Paragraph_ar}</p>
                        </div>
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

export default WhyUsServices;
