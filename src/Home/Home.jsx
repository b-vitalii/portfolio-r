import React from "react";
import heroImage from "../images/hero.jpg";
import style from "./Home.module.css";

export default function Home() {
  return (
    <section className="home active section" id="home">
      <div className="container">
        <div className="row">
          <div className="home-info padd-15">
            <h3 className="hello">
              Hello, my name is <span className="name">Vitalii Boiko</span>
            </h3>
            <h3 className="my-profession">
              I`m <span className="typing">web designer</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ut
              quo quos similique ex soluta, expedita culpa nihil aperiam? Rem
              officiis mollitia soluta reiciendis ipsam eveniet ad accusantium,
              quas commodi.
            </p>
            <button href="#" className="btn">
              Download CV
            </button>
          </div>
          <div className="home-img padd-15">
            <img src={heroImage} alt="hero" />
          </div>
        </div>
      </div>
    </section>
  );
}
