import data from "../../../data.json";
import { motion } from "framer-motion";
import Title from "../../../GeneralFunction/GeneralFunction.tsx";

type Prop = {
  id: number;
  Title_fr: string;
  Title_ar: string;
  Paragraph_fr: string;
  Paragraph_ar: string;
};

const Header = () => {
  Title("Serviclim | Blog");
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
        className="mt-4"
      >
        <div className="py-12 text-white BlogBack">
          <div className="container">
            <div className="w-full mb-2 md:w-2/4">
              {data.blog_header.map(
                ({
                  Title_ar,
                  Title_fr,
                  Paragraph_fr,
                  Paragraph_ar,
                  id,
                }: Prop) => {
                  return (
                    <div key={id}>
                      <div>
                        <h1>{Title_fr}</h1>
                        <h1 className="text-right">{Title_ar} </h1>
                      </div>
                      <div className="w-full md:w-4/4">
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
