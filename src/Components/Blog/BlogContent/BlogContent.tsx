import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";
import data from "../../../data.json";
import ImgOne from "../../../assets/Listening.jpg";
import ImgTwo from "../../../assets/Advice.jpg";
import ImgThree from "../../../assets/Achievement.jpg";
import ImgFour from "../../../assets/Support.jpg";

type Props = {
  id?: number;
  Title_fr?: string;
  Title_ar?: string;
  Paragraph_fr?: string;
  Paragraph_ar?: string;
  SubTitle_fr?: string;
  SubTitle_ar?: string;
  Image?: string;
};

const BlogBoxContent = [
  {
    id: 1,
    Title_fr: "L’Écoute",
    Title_ar: "الاستماع",
    Image: ImgOne,
    SubTitle_fr: "Comprendre vos besoins ",
    SubTitle_ar: "فهم احتياجاتكم",

    Paragraph_fr:
      "Pour nous, tout commence par l’écoute. Nous savons que chaque client est unique et a des besoins spécifiques. C'est pourquoi nous prenons le temps d'écouter et de comprendre vos besoins en profondeur. Nos conseils reposent sur une compréhension approfondie de vos besoins, garantissant des solutions qui vous correspondent parfaitement. C'est en vous écoutant attentivement que nous sommes en mesure de proposer des solutions sur mesure, adaptées à vos attentes et à vos besoins.",
    Paragraph_ar:
      "بالنسبة لنا، كل شيء يبدأ بالاستماع. نحن نعلم أن كل عميل فريد من نوعه و احتياجاتكم تختلف . لهذا السبب نأخذ الوقت الكافي للاستماع إليكم و فهم احتياجاتكم  بتعمق. نصائحنا  مبنية على الفهم الشامل لحالتكم، وضمان الحلول التي تناسبكم . نحن قادرون على تقديم حلول تتكيف مع توقعاتكم و احتياجاتكم بالاستماع إليكم",
  },
  {
    id: 2,
    Title_fr: "Le Conseil",
    Title_ar: "المشاورة",
    Image: ImgTwo,
    SubTitle_fr: "Structurer vos objectifs ",
    SubTitle_ar: "تصميم أهدافكم",
    Paragraph_fr:
      "Une fois que nous avons une compréhension claire de vos besoins, l'étape suivante est le conseil. Nous croyons que pour réussir votre projet, il est crucial de structurer vos objectifs de manière claire et précise. C'est pourquoi nous travaillons en étroite collaboration avec vous pour définir la voie à suivre pour atteindre vos aspirations. Nous vous guidons à travers le processus, vous aidant à clarifier vos objectifs et à tracer un plan d'action pour les atteindre.",
    Paragraph_ar:
      "بمجرد أن يكون لدينا فهم واضح لاحتياجاتكم، فإن الخطوة التالية هي المشاورة. نحن نؤمن أنه لتحقيق النجاح في مشروعك، من الضروري هيكلة أهدافكم . بطريقة واضحة ودقيقة. ولهذا السبب نعمل بشكل وثيق معكم من أجل تحديد الطريق الذي يجب اتباعه لتحقيق تطلعاتكم و نرشدكم خلال هذه العملية،في توضيح أهدافكم ووضع خطة عمل لتحقيقها",
  },
  {
    id: 3,
    Title_fr: "La Réalisation",
    Title_ar: "التنفيذ",
    Image: ImgThree,
    SubTitle_fr: "Concrétiser votre projet ",
    SubTitle_ar: "اجعل مشروعك حقيقة",
    Paragraph_fr:
      "La troisième étape de notre processus est la réalisation. C'est à ce stade que nous mettons en œuvre le plan d'action que nous avons établi ensemble. Nous travaillons avec ardeur pour donner vie à votre vision, en façonnant un ouvrage qui reflète pleinement vos aspirations. Grâce à notre expertise et à notre dévouement, nous sommes en mesure de transformer vos idées en réalité, en créant un ouvrage qui non seulement répond à vos besoins, mais les dépasse.",
    Paragraph_ar:
      "المرحلة الثالثة في عمليتنا هي التنفيذ. وفي هذه المرحلة نقوم بتنفيذ خطة العمل التي وضعناها معًا. نحن نعمل بجد لتحقيق رؤيتكم وصياغة عمل يعكس تطلعاتكم .من خلال خبرتنا و إخلاصنا ، نحن قادرون على تحويل أفكاركم إلى واقع ملموس، وإنشاء عمل لا يلبي احتياجاتك فحسب، بل يتجاوزها ايضا",
  },
  {
    id: 4,
    Title_fr: "L'Accompagnement",
    Title_ar: "المرافقة",
    Image: ImgFour,
    SubTitle_fr: "Sauvegarder votre ouvrage ",
    SubTitle_ar: "احفظوا عملكم",
    Paragraph_fr:
      "Enfin, la dernière étape de notre processus est l'accompagnement. Nous savons que la durabilité de votre ouvrage est essentielle. C'est pourquoi nous nous engageons à maintenir une qualité constante et un niveau optimal tout au long de sa vie. Nous fournissons un soutien continu, garantissant que votre ouvrage reste en excellent état et continue de répondre à vos besoins pendant de nombreuses années. Grâce à notre engagement envers l'excellence et le service client, nous sommes en mesure de garantir votre confort et votre satisfaction à chaque étape du processus.",
    Paragraph_ar:
      "احفظوا عملكم. وأخيرًا، الخطوة الأخيرة في عمليتنا هي الدعم. ونحن نعلم أن متانة عملكم أمر ضروري. ولهذا السبب نحن ملتزمون بالحفاظ على جودة متسقة ومستوى أمثل طوال حياتها. نحن نقدم الدعم مستمر، مما يضمن بقاء عملكم في حالة ممتازة و نستمر في تلبية متطلباتكم  لسنوات عديدة. من خلال التزامنا بالتميز و خدمة العملاء، نحن قادرون على ضمان راحتكم ورضاكم في كل خطوة من العملية",
  },
];

const header = (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5 }}
    variants={{
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 },
    }}
    className="w-full"
  >
    {data.blog_box_header.map(({ id, Paragraph_fr, Paragraph_ar }: Props) => {
      return (
        <div key={id}>
          <div>
            <div>
              <h6>{Paragraph_fr}</h6>
              <h6 className="text-right">{Paragraph_ar}</h6>
            </div>
          </div>
        </div>
      );
    })}
  </motion.div>
);

const content = (
  <div>
    <div>
      {BlogBoxContent.map(
        ({
          id,
          Title_fr,
          Title_ar,
          Paragraph_fr,
          Paragraph_ar,
          SubTitle_fr,
          SubTitle_ar,
          Image,
        }: Props) => {
          return (
            <div key={id}>
              <div className="p-4 my-8 shadow-xl md:p-8 md:my-12">
                <div>
                  <div>
                    <h1 className="text-main">
                      <span className="mr-2 text-base text-second">
                        &#x25CF;
                      </span>
                      {Title_fr}
                    </h1>{" "}
                    <h1 className="text-main">{Title_ar}</h1>
                  </div>
                  <div className="my-4 w-fit">
                    <h6>{SubTitle_fr} :</h6>
                    <h6 className="text-right">: {SubTitle_ar}</h6>
                  </div>

                  <div className="mb-8">
                    <p>{Paragraph_fr}</p>
                    <p className="mt-2 text-right">{Paragraph_ar}</p>
                  </div>
                </div>
                <div className="mb-4 md:mb-16">
                  <LazyLoadImage
                    className="md:h-[30rem] md:w-[50rem]"
                    src={Image}
                    alt={Title_fr}
                  />
                </div>
              </div>
            </div>
          );
        }
      )}
    </div>
  </div>
);

const BlogContent = () => {
  return (
    <>
      <div className="py-4 md:pt-28 back">
        <div className="container">
          <div>{header}</div>
          <div>{content}</div>
        </div>
      </div>
    </>
  );
};

export default BlogContent;
