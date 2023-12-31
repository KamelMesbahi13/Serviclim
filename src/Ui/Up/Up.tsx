import { useState, useEffect } from "react";
import { ArrowUturnUpIcon } from "@heroicons/react/24/solid";
import { Link } from "react-scroll";

const Up = () => {
  const [up, setUp] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 2050) {
        setUp(true);
      } else {
        setUp(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={
        up
          ? "fixed bottom-20 w-full z-50 transition-all duration-500 opacity-100"
          : "transition-all duration-500 opacity-0"
      }
    >
      <div className="container">
        <div className="relative float-right w-12 h-12 transition-all duration-300 rounded-full shadow-lg cursor-pointer hover:bg-secondhttp://localhost:5173/ bg-main">
          <Link smooth={true} offset={0} duration={900} to="nav">
            <ArrowUturnUpIcon className="absolute text-4xl text-white -translate-x-1/2 -translate-y-1/2 text-second-color top-1/2 left-1/2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Up;
