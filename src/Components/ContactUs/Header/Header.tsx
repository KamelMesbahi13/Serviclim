import { motion } from "framer-motion";
import data from "../../../data.json";
import Title from "../../../GeneralFunction/GeneralFunction.tsx";

const Header = () => {
  Title("Serviclim | Contactez-Nous");
  return (
    <>
      <div className="text-white py-28 ContactBack">
        <div>
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.8 }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
            >
              {data.contactUs_header.map(
                ({ id, Title_fr, Title_ar, Paragraph_fr, Paragraph_ar }) => {
                  return (
                    <div key={id}>
                      <div>
                        <div className="w-full md:w-2/4">
                          <div>
                            <h1>{Title_fr} </h1>
                            <h1 className="text-right">{Title_ar} </h1>
                          </div>
                          <div>
                            <p>{Paragraph_fr}</p>
                            <p className="text-right">{Paragraph_ar}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
