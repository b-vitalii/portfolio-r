import React from "react";
import ReactTypingEffect from "react-typing-effect";
import heroImage from "../images/hero.jpg";
import style from "./Home.module.css";

export default function Home({ handleClickAside, status }) {
  console.log(handleClickAside);
  console.log(status);
  return (
    <section
      className={
        style.home +
        " " +
        style.section +
        " " +
        (status.home ? style.active : "")
      }
      id="home"
    >
      <div className={style.container}>
        <div className={style.row}>
          <div className={style.home_info}>
            <h3 className={style.hello}>
              Hello, my name is{" "}
              <span className={style.name}>Vitalii Boiko</span>
            </h3>
            <h3 className={style.my_profession}>
              I`m{" "}
              <span className={style.typing}>
                <ReactTypingEffect
                  text={[
                    "JavaScript Developer",
                    "React Developer",
                    "Web Designer",
                  ]}
                  speed={100}
                  eraseSpeed={100}
                  eraseDelay={1000}
                  typingDelay={100}
                />
              </span>
            </h3>
            <p>
              I've been in development for over a year, mostly working with
              JavaScript and libraries like React. I pay attention to various
              little things in order to achieve the highest quality result.
              Willing to learn new and expand my current knowledge of the above
              as needed to the point that it makes me do my job faster, better
              and more efficiently.
            </p>
            <button href="#" className={style.btn}>
              Download CV
            </button>
          </div>
          <div className={style.home_img}>
            <img src={heroImage} alt="hero" />
          </div>
        </div>
      </div>
    </section>
  );
}
