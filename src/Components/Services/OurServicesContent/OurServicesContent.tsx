import data from "../../../data.json";
import { motion } from "framer-motion";

type Props = {
  id?: number;
  Title_fr?: string;
  Title_ar?: string;
  Paragraph_fr?: string;
  Paragraph_ar?: string;
};

function OurServicesContent() {
  const header = data.ourServicesContent_title.map(
    ({ id, Title_fr, Title_ar }: Props) => {
      return (
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
            className="text-center"
          >
            <h1 className="mb-2">
              {Title_fr}{" "}
              <span className="text-main">
                La climatisation, réfrigération, chauffage et ventilation
              </span>
            </h1>
            <h1>
              {Title_ar}{" "}
              <span className="text-main">التدفئة والتهوية وتكييف الهواء</span>{" "}
            </h1>
          </motion.div>
        </div>
      );
    }
  );

  const content = data.ourServicesContent_content.map(
    ({ id, Paragraph_fr, Paragraph_ar, Title_fr, Title_ar }: Props) => {
      return (
        <div key={id}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="w-full my-8 md:w-[90%]"
          >
            <div className="mb-2">
              <h1 className="relative text-main">
                <span className="mr-2 text-sm md:text-base text-second">
                  &#x25CF;
                </span>
                {Title_fr}
              </h1>{" "}
              <h1 className="text-main">{Title_ar}</h1>
            </div>
            <div>
              <p>{Paragraph_fr}</p>
              <p className="mt-2 text-right">{Paragraph_ar}</p>
            </div>
          </motion.div>
        </div>
      );
    }
  );

  return (
    <>
      <div className="px-4 py-4 my-8 md:py-8 md:my-16 back">
        <div>
          <div>{header}</div>
        </div>
        <div>{content}</div>
      </div>
    </>
  );
}

export default OurServicesContent;
