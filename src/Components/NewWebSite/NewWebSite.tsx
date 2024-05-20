import { motion } from "framer-motion";
import Title from "../../GeneralFunction/GeneralFunction";
import TimerFUnction from "./TimerFunction";

const Header = () => {
  Title("Serviclim | Shop");

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
        className="pb-12 md:pb-48 md:pt-16 NewWebsite"
      >
        <div className="container">
          <div className="textCenter">
            <div className="w-full py-12 mb-4 md:py-4 lg:w-2/4">
              <div>
                <div>
                  <h1>Nouveau Site Web Bientôt Lancé !</h1>
                </div>
                <div className="mt-4">
                  <h6>
                    Des Recommandations Expertes en Climatisation Vous Attendent
                    !
                  </h6>
                </div>
              </div>{" "}
            </div>
            <div>
              <TimerFUnction />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Header;
