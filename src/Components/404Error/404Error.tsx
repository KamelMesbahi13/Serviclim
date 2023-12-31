import { LazyLoadImage } from "react-lazy-load-image-component";
import Img from "../../assets/404Page.webp";
import { Link } from "react-router-dom";
import data from "../../data.json";
import Title from "../../GeneralFunction/GeneralFunction";

const Error = () => {
  Title("Serviclim | 404");

  return (
    <>
      <div>
        <div>
          <div className="container">
            {data.error.map(
              ({ id, Title_fr, Title_ar, Paragraph_fr, Paragraph_ar }) => {
                return (
                  <div key={id}>
                    <div>
                      <div>
                        <div className="my-2 textCenter">
                          <div>
                            <LazyLoadImage src={Img} alt="404 Image" />
                          </div>
                          <div>
                            <h1 className="mb-4">{Title_fr}</h1>
                            <h1 className="mb-4">{Title_ar}</h1>
                          </div>
                          <div>
                            <p>{Paragraph_fr}</p>
                            <p>{Paragraph_ar}</p>
                          </div>
                          <Link to="/">
                            <button className="buttonCust">
                              Découvrir plus
                              <span className="first"></span>
                              <span className="second"></span>
                              <span className="third"></span>
                              <span className="fourth"></span>
                            </button>
                          </Link>
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

export default Error;
