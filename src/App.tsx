import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
const Navbar = lazy(() => import("./Components/Navbar/Navbar.tsx"));
const Home = lazy(() => import("./Components/Home/Home.tsx"));
const Services = lazy(() => import("./Components/Services/Services.tsx"));
const References = lazy(() => import("./Components/References/References.tsx"));
const Blog = lazy(() => import("./Components/Blog/Blog.tsx"));
const AboutUs = lazy(() => import("./Components/AboutUs/AboutUs.tsx"));
const Loader = lazy(() => import("./Ui/Loader/Loader.tsx"));
const Up = lazy(() => import("./Ui/Up/Up.tsx"));
const ContactUs = lazy(() => import("./Components/ContactUs/ContactUs.tsx"));
const Footer = lazy(() => import("./Ui/Footer/Footer.tsx"));
const Error = lazy(() => import("./Components/404Error/404Error.tsx"));

const App = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div
        className="z-50 fixed top-0 left-0 right-0 h-2 bg-main origin-[0%]"
        style={{ scaleX }}
      />

      <Suspense
        fallback={
          <div className="mt-20 text-center">
            <Loader />
          </div>
        }
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Accueil" element={<Home />} />
          <Route path="/Nos Services" element={<Services />} />
          <Route path="/Nos Références" element={<References />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/À Propos de Nous" element={<AboutUs />} />
          <Route path="/Contactez-Nous" element={<ContactUs />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Up />
        <Footer />
      </Suspense>
    </>
  );
};

export default App;
