import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Img from "../../assets/404Page.webp";
import { Link } from "react-router-dom";
import Data from "../../data.json";
import Title from "../../GeneralFunction/GeneralFunction";

interface ErrorData {
  id: number;
  Title_fr: string;
  Title_ar: string;
  Paragraph_fr: string;
  Paragraph_ar: string;
}

const Error: React.FC = () => {
  Title("Serviclim | 404");

  return (
    <div>
      <div>
        <div className="container">
          {Data.error.map(
            ({
              id,
              Title_fr,
              Title_ar,
              Paragraph_fr,
              Paragraph_ar,
            }: ErrorData) => {
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
  );
};

export default Error;
