import { LazyLoadImage } from "react-lazy-load-image-component";
import data from "../../data.json";
import Logo from "../../assets/LogoOne.png";
import Facebook from "../../assets/Facebook.png";
import Youtube from "../../assets/Youtube.png";
import Linkedin from "../../assets/Linkidin.png";
import Gmail_img from "../../assets/Gmail.png";
import Time_img from "../../assets/Time.png";
import Phone_img from "../../assets/Phone.png";
import Location_img from "../../assets/Location.png";

type Props = {
  id?: number;
  Image_one?: string;
  Image_two?: string;
  Image_three?: string;
  Image_four?: string;
  Title_fr?: string;
  Title_ar?: string;
  Location?: string;
  Location_image?: string;
  Phone?: string;
  Phone_image?: string;
  Email?: string;
  Email_image?: string;
  Time?: string;
  Time_image?: string;
  Definition_fr?: string;
  Definition_ar?: string;
  Logo?: string;
};

const links: string[] = [
  "Accueil",
  "Nos Services",
  "Nos Références",
  "Blog",
  "À Propos de Nous",
  "Contactez-Nous",
];

const year = new Date().getFullYear();

const Footer = () => {
  const Images = (
    <div>
      <div>
        <div className="flex">
          <div key="facebook">
            <a href="https://web.facebook.com/serviclim.studio" target="_blank">
              {" "}
              <LazyLoadImage
                className="w-8 md:w-7"
                src={Facebook}
                alt="Facebook"
              />
            </a>
          </div>
          <div className="mx-4" key="linkedin">
            <a
              href="https://www.linkedin.com/company/serviclimalgerie/"
              target="_blank"
            >
              {" "}
              <LazyLoadImage
                className="w-8 md:w-7"
                src={Linkedin}
                alt="Linkedin"
              />
            </a>
          </div>
          <div key="youtube">
            <a href="https://www.youtube.com/@serviclimdz9413" target="_blank">
              {" "}
              <LazyLoadImage
                className="w-8 md:w-7"
                src={Youtube}
                alt="Youtube"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  const Definition = data.footer_content.map(
    ({ id, Definition_fr, Definition_ar }: Props) => {
      return (
        <div key={id}>
          <div>
            <div>
              <div>
                <div>
                  <LazyLoadImage
                    className="w-2/4 lg:w-3/4"
                    src={Logo}
                    alt="Logo"
                  />
                </div>
                <div className="md:ml-4">
                  <p>{Definition_fr}</p>
                  <p className="mt-4 text-right">{Definition_ar}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  );

  const LinksHeading = data.footer_links.map(
    ({ id, Title_fr, Title_ar }: Props) => {
      return (
        <div key={id}>
          <div>
            <div className="mb-4">
              <h1 className="text-main">{Title_fr}</h1>
              <h1 className="text-main">{Title_ar}</h1>
            </div>
          </div>
        </div>
      );
    }
  );

  const Links = links.map((el, i) => {
    return (
      <div key={i}>
        <div className="my-4 md:my-2">
          <a
            className="text-sm tracking-[1px] relative before:content-empty before:absolute before:w-0 before:bg-main before:h-[2px] before:top-full before:ease-linear before:duration-300 hover:before:w-full"
            href={el}
          >
            {el}
          </a>
        </div>
      </div>
    );
  });

  const ContactInfo = data.footer_contact.map(
    ({ id, Title_fr, Title_ar, Location, Phone, Email, Time }: Props) => {
      return (
        <div key={id}>
          <div>
            <div>
              <div>
                <div className="mb-4">
                  <h1 className="text-main">{Title_fr}</h1>
                  <h1 className="text-right text-main">{Title_ar}</h1>
                </div>
                <div>
                  <div>
                    <div className="flex items-center">
                      <div className="mr-4">
                        <LazyLoadImage
                          className="w-7 h-7"
                          src={Location_img}
                          alt={Location}
                        />
                      </div>
                      <p>{Location}</p>
                    </div>
                    <div className="flex items-center mt-4">
                      <div className="mr-4">
                        <a href="tel:+213770914510" className="flex">
                          <LazyLoadImage
                            className="w-7 h-7"
                            src={Phone_img}
                            alt={Phone}
                          />
                          <p className="ml-4">{Phone}</p>
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center my-4">
                      <div className="mr-4">
                        <LazyLoadImage
                          className="w-7 h-7"
                          src={Gmail_img}
                          alt={Email}
                        />
                      </div>
                      <p>{Email}</p>
                    </div>
                    <div className="flex items-center">
                      <div className="mr-4">
                        <LazyLoadImage
                          className="w-7 h-7"
                          src={Time_img}
                          alt={Time}
                        />
                      </div>
                      <p>{Time}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  );

  return (
    <footer>
      <div className="pb-12 mt-8 border-b-2 lg:mt-24 border-grey">
        <div className="container">
          <div className="flex flex-col items-center justify-between lg:flex-row">
            <div className="w-full lg:w-1/4">
              <div>{Definition}</div>
            </div>
            <div className="w-full my-8 lg:my-0 lg:w-1/4 lg:text-center">
              <div>{LinksHeading}</div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-1">
                {Links}
              </div>
            </div>
            <div className="w-full lg:w-1/4">
              <div>{ContactInfo}</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container">
          <div className="flex justify-between mt-8">
            <div>
              <h6>Contactez-Nous Sur Les Réseaux Sociaux</h6>
              <h6 className="text-right">
                اتصل بنا على وسائل التواصل الاجتماعي
              </h6>
            </div>
            <div>{Images}</div>
          </div>
        </div>
        <div className="pb-4 mt-8 text-center">
          <p>
            Copyright <span>&#169;</span> All Rights Reserved To{" "}
            <span className="italic font-semibold">SERVICLIM {year} </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
