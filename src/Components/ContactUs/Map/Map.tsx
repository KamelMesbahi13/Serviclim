import { motion } from "framer-motion";

const Map = () => {
  return (
    <>
      <div className="py-40">
        <div>
          <div className="relative">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              className="bg-main w-full z-[1] shadow-2xl h-[10rem] md:h-[20rem] "
            >
              <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3196.700376525822!2d3.4563210747269753!3d36.75376237031775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128e69cf1d39597b%3A0x9d15ce9154d8419!2sServiclim!5e0!3m2!1sen!2sdz!4v1702302499142!5m2!1sen!2sdz"
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps"
                  className="md:w-[600px] md:h-[450px] w-[300px] h-[250px] border-[10px] border-white"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Map;
