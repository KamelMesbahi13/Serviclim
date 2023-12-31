import data from "../../../data.json";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { lazy } from "react";
import Title from "../../../GeneralFunction/GeneralFunction.tsx";
const ScrollDown = lazy(() => import("../../../Ui/ScrollDown/ScrollDown.tsx"));

type Prop = {
  Heading_fr: string;
  Heading_ar: string;
  Paragraph_fr: string;
  Paragraph_ar: string;
  id: number;
};

const Header = () => {
  Title("Serviclim");

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
        className="md:py-12 md:text-white headerBackTwo md:headerBack"
      >
        <div className="container">
          <div>
            <div className="w-full py-4 mb-4 lg:w-2/4">
              {data.header.map(
                ({
                  Heading_fr,
                  Heading_ar,
                  Paragraph_fr,
                  Paragraph_ar,
                  id,
                }: Prop) => {
                  return (
                    <div key={id}>
                      <div>
                        <h1>{Heading_fr}</h1>
                        <h1 className="text-right">{Heading_ar} </h1>
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

            <div className="pb-8">
              <Link to="/À Propos de Nous">
                <button className="buttonCust">
                  Découvrir plus
                  <span className="first"></span>
                  <span className="second"></span>
                  <span className="third"></span>
                  <span className="fourth"></span>
                </button>
              </Link>
              <div>
                <ScrollDown />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Header;
