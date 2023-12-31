import data from "../../../data.json";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useForm } from "react-hook-form";
import CallUsImage from "../../../assets/Phone.png";
import VisitUsImage from "../../../assets/Location.png";

type Props = {
  id?: number;
  Title_fr?: string;
  Title_ar?: string;
  Paragraph_fr?: string;
  Paragraph_ar?: string;
  CallUs?: string;
  CallUs_Title_fr?: string;
  CallUs_Title_ar?: string;
  CallUs_paragraph_fr?: string;
  CallUs_paragraph_ar?: string;
  VisitUs?: string;
  VisitUs_Title_fr?: string;
  VisitUs_Title_ar?: string;
  VisitUs_paragraph_fr?: string;
  VisitUs_paragraph_ar?: string;
};

const GetInTouch = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  const inputStyles = `w-full mt-5 rounded-md focus:outline-none bg-grey px-5 py-3`;

  return (
    <>
      <div className="pt-8 mt-20 border-4 shadow-xl md:pt-0 border-grey">
        <div>
          <div>
            {data.contactUs_getInTouch.map(
              ({
                id,
                Title_fr,
                Title_ar,
                Paragraph_fr,
                Paragraph_ar,
                CallUs,
                CallUs_Title_fr,
                CallUs_Title_ar,
                CallUs_paragraph_fr,
                CallUs_paragraph_ar,
                VisitUs,
                VisitUs_Title_fr,
                VisitUs_Title_ar,
                VisitUs_paragraph_fr,
                VisitUs_paragraph_ar,
              }: Props) => {
                return (
                  <div key={id}>
                    <div className="flex flex-col md:items-center md:justify-between md:flex-row">
                      <div className="w-full px-8 md:w-[40%]">
                        <div>
                          <div className="mb-4">
                            <h1 className="mb-2 text-main">{Title_fr}</h1>
                            <h1 className="text-right text-main">{Title_ar}</h1>
                          </div>
                          <div>
                            <p>{Paragraph_fr}</p>
                            <p className="text-right">{Paragraph_ar}</p>
                          </div>
                        </div>
                        <form
                          target="_blank"
                          className="mb-8 text-center md:mb-0"
                          onSubmit={onSubmit}
                          action="https://formsubmit.co/6395d8fc7fae129f685568c077ef27b9"
                          method="POST"
                        >
                          <input
                            type="text"
                            placeholder="Nom"
                            className={inputStyles}
                            {...register("name", {
                              required: true,
                              maxLength: 100,
                            })}
                          />
                          {errors.name && (
                            <p className="mt-1 text-primary-500">
                              {errors.name.type === "required" &&
                                "This field is require"}
                              {errors.name.type === "maxLength" &&
                                "Max Length is 100 character"}
                            </p>
                          )}
                          <input
                            type="text"
                            placeholder="Email"
                            className={inputStyles}
                            {...register("email", {
                              required: true,
                              pattern:
                                /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            })}
                          />
                          {errors.email && (
                            <p className="mt-1 text-primary-500">
                              {errors.email.type === "required" &&
                                "This field is require"}
                              {errors.email.type === "pattern" &&
                                "Invalid Email Address"}
                            </p>
                          )}
                          <textarea
                            placeholder="Message"
                            className={inputStyles}
                            rows={4}
                            cols={50}
                            {...register("message", {
                              required: true,
                              maxLength: 2000,
                            })}
                          />
                          {errors.message && (
                            <p className="mt-1 text-primary-500">
                              {errors.message.type === "required" &&
                                "This field is require"}
                              {errors.message.type === "maxLength" &&
                                "Max length is 2000 char"}
                            </p>
                          )}
                          <div>
                            <button className="w-full buttonCust">
                              Envoyer
                              <span className="first"></span>
                              <span className="second"></span>
                              <span className="third"></span>
                              <span className="fourth"></span>
                            </button>
                          </div>
                        </form>
                      </div>
                      <div className="w-full md:w-[40%] bg-grey p-8 shadow-xl">
                        <div>
                          <div>
                            <div>
                              <h6 className="font-bold text-main">
                                <span className="mr-2 text-xl text-second">
                                  &#x25CF;
                                </span>
                                {CallUs_Title_fr}
                              </h6>
                              <h6 className="font-bold text-right text-main">
                                {CallUs_Title_ar}
                                <span className="ml-2 text-sm md:text-base text-second">
                                  &#x25CF;
                                </span>{" "}
                              </h6>
                            </div>
                            <div>
                              <p>{CallUs_paragraph_fr}</p>
                              <p className="my-4 text-right">
                                {CallUs_paragraph_ar}
                              </p>
                            </div>
                            <div className="flex items-center">
                              <div className="mr-4">
                                <a href="tel:+213770914510" className="flex">
                                  <LazyLoadImage
                                    className="w-7 h-7"
                                    src={CallUsImage}
                                    alt={CallUs_Title_fr}
                                  />
                                  <p className="ml-4">{CallUs}</p>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-12">
                          <div>
                            <h6 className="font-bold text-main">
                              <span className="mr-2 text-xl text-second">
                                &#x25CF;
                              </span>
                              {VisitUs_Title_fr}
                            </h6>
                            <h6 className="font-bold text-right text-main">
                              {VisitUs_Title_ar}
                              <span className="ml-2 text-xl text-second">
                                &#x25CF;
                              </span>
                            </h6>
                          </div>
                          <div>
                            <p>{VisitUs_paragraph_fr}</p>
                            <p className="my-4 text-right">
                              {VisitUs_paragraph_ar}
                            </p>
                          </div>
                          <div className="flex items-center">
                            <div className="mr-4">
                              <LazyLoadImage
                                className="w-7 h-7"
                                src={VisitUsImage}
                                alt={VisitUs_Title_fr}
                              />
                            </div>
                            <p>{VisitUs}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default GetInTouch;
