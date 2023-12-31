import data from "../../../data.json";
import { motion } from "framer-motion";
import Title from "../../../GeneralFunction/GeneralFunction.tsx";

type Prop = {
  Title_fr: string;
  Title_ar: string;
  Paragraph_fr: string;
  Paragraph_ar: string;
  id: number;
};

const Header = () => {
  Title("Serviclim | Nos Références");

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
        className="py-12 md:py-12 ReferenceBack"
      >
        <div className="container">
          <div>
            <div className="w-full py-4 mb-4 text-white lg:w-2/4">
              {data.referance_header.map(
                ({
                  id,
                  Title_fr,
                  Title_ar,
                  Paragraph_fr,
                  Paragraph_ar,
                }: Prop) => {
                  return (
                    <div key={id}>
                      <div>
                        <h1>{Title_fr}</h1>
                        <h1 className="text-right">{Title_ar} </h1>
                      </div>
                      <div className="w-full">
                        <p className="my-4">{Paragraph_fr}</p>
                        <p className="text-right">{Paragraph_ar}</p>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Header;
