import Title from "../../../GeneralFunction/GeneralFunction.tsx";
import data from "../../../data.json";
import { motion } from "framer-motion";

type Props = {
  id: number;
  Title_fr: string;
  Title_ar: string;
  Paragraph_fr: string;
  Paragraph_ar: string;
};

const Header = () => {
  Title("Serviclim | Nos Services");

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
        className="py-12 text-white ServicesBack"
      >
        <div className="container">
          <div>
            {data.services_header.map(
              ({
                id,
                Title_fr,
                Title_ar,
                Paragraph_fr,
                Paragraph_ar,
              }: Props) => {
                return (
                  <div key={id}>
                    <div className="flex flex-col-reverse md:justify-between md:flex-row">
                      <div className="w-full md:w-1/2">
                        <div className="my-4 md:mt-0">
                          <h1>{Title_fr}</h1>
                          <h1 className="text-right">{Title_ar} </h1>
                        </div>
                        <div>
                          <p className="my-4">{Paragraph_fr}</p>
                          <p className="text-right">{Paragraph_ar}</p>
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

export default Header;
