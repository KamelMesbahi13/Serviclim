import { ArrowRightIcon } from "@heroicons/react/20/solid";

const ContactUsSection = () => {
  return (
    <>
      <div className="py-8 bg-grey">
        <div className="container">
          <div className="flex justify-between">
            <div>
              <h6 className="md:text-3xl">
                Si Vous Avez <br /> Des Questions
              </h6>
            </div>
            <div>
              <div className="cursor-pointer">
                <a href="/Contactez-Nous">
                  <div className="flex items-center">
                    <h6 className="md:text-3xl text-second">Contactez-Nous</h6>{" "}
                    <ArrowRightIcon className="relative text-3xl md:w-8 text-second" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsSection;
