import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "../../assets/LogoOne.png";
import Facebook from "../../assets/Facebook.png";
import Youtube from "../../assets/Youtube.png";
import Linkedin from "../../assets/Linkidin.png";

const menuItems: string[] = [
  "Accueil",
  "Nos Services",
  "Nos Références",
  "Blog",
  "À Propos de Nous",
  "Contactez-Nous",
];

const Navbar = () => {
  const [nav, setNav] = useState<boolean>(true);

  const navHandler = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav id="nav">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
        >
          <div className="container">
            <div className="z-30 hidden w-full pt-6 lg:flex">
              <div className="flex w-full mx-auto">
                <div className="flex justify-between w-full">
                  <img src={Logo} className="w-48" alt="Logo" />
                  <div className="flex items-center w-full justify-evenly">
                    <div className="flex gap-8 text-sm">
                      <div className="flex w-full gap-8">
                        {menuItems.map((el, i) => (
                          <div key={i}>
                            <Link
                              className="text-sm tracking-[1px] relative before:content-empty before:absolute before:w-0 before:bg-main before:h-[2px] before:top-full before:ease-linear before:duration-300 hover:before:w-full"
                              key={i}
                              to={el}
                            >
                              {el}
                            </Link>
                          </div>
                        ))}{" "}
                      </div>
                    </div>
                    <div className="hidden gap-2 md:flex">
                      <a
                        href="https://web.facebook.com/serviclim.studio"
                        target="_blank"
                      >
                        <img className="w-6" src={Facebook} alt="Facebook" />
                      </a>

                      <a
                        href="https://www.youtube.com/@serviclimdz9413"
                        target="_blank"
                      >
                        <img className="w-6" src={Youtube} alt="Youtube" />
                      </a>

                      <a
                        href="https://www.linkedin.com/company/serviclimalgerie/"
                        target="_blank"
                      >
                        <img className="w-6" src={Linkedin} alt="Linkedin" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-row-reverse items-center justify-between">
                <div className={nav ? "visible lg:invisible" : "invisible"}>
                  <img src={Logo} className="w-36" alt="Logo" />
                </div>
                <div>
                  <div className="lg:hidden">
                    <div className="cursor-pointer">
                      {nav ? (
                        <Bars3Icon className="w-6 h-6" onClick={navHandler} />
                      ) : (
                        <XMarkIcon className="w-6 h-6" onClick={navHandler} />
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div
                  className={
                    nav
                      ? "absolute w-full left-[-150%] duration-500"
                      : "duration-500 absolute left-0 mr-4 w-full bg-grey shadow-2xl z-50"
                  }
                >
                  <div className="flex flex-col p-4 mr-4">
                    {menuItems.map((el, i) => (
                      <div key={i}>
                        <div className="my-4">
                          <Link
                            className="text-sm tracking-[1px] relative before:content-empty before:absolute before:w-0 before:bg-main before:h-[2px] before:top-full before:ease-linear before:duration-300 hover:before:w-full"
                            key={i}
                            to={el}
                            onClick={navHandler}
                          >
                            {el}
                          </Link>
                        </div>
                      </div>
                    ))}{" "}
                    <div className="flex gap-2 mt-4">
                      <a
                        href="https://web.facebook.com/serviclim.studio"
                        target="_blank"
                      >
                        <img className="w-5" src={Facebook} alt="Facebook" />
                      </a>

                      <a
                        href="https://www.youtube.com/@serviclimdz9413"
                        target="_blank"
                      >
                        <img className="w-5" src={Youtube} alt="Youtube" />
                      </a>

                      <a
                        href="https://www.linkedin.com/company/serviclimalgerie/"
                        target="_blank"
                      >
                        <img className="w-5" src={Linkedin} alt="Linkedin" />
                      </a>
                    </div>
                    <div className="mx-auto mt-2 lg:hidden">
                      <img
                        className={nav ? "invisible w-36" : "visible w-36"}
                        src={Logo}
                        alt="Logo"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </nav>
    </>
  );
};

export default Navbar;
