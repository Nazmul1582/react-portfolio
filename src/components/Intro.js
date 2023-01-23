import React from "react";
import img from "../assets/images/nazmul-hasan-2.png";
import { Typewriter } from "react-simple-typewriter";
import { layout } from "../style";

export default function Intro() {
  return (
    <div
      id="home"
      className={`${layout.sectionReverse} h-screen my-10 sm:my-20`}
    >
      <div className="sm:flex-1  dark:text-white">
        <h3 className="text-xl font-semibold text-slate-500">
          Hi! I'm Nazmul Hasan
        </h3>
        <h2 className="text-xl font-bold mt-3">
          I'm a
          <span className="gradientText text-2xl sm:text-4xl md:text-2xl lg:text-4xl">
            {" "}
            <Typewriter
              words={["Frontend Developer", "Web Designer", "React Developer!"]}
              loop={false}
              cursor
              cursorStyle="|"
              cursorColor="#f59e0b"
              typeSpeed={100}
              deleteSpeed={100}
              delaySpeed={1000}
            />
          </span>
        </h2>
        <p className="my-5">
          I am a passionate frontend developer. I am a Junior Frontend
          Developer. I am working with React JS and Tailwind CSS. I also have
          experience in developing static websites using HTML5, CSS3, and
          JavaScript.
        </p>
        <a href="#contact" className="button">
          Hire Me
        </a>
      </div>
      <div className="sm:flex-1 grid place-items-center">
        <div className="flex justify-center items-end bg-gradient-to-b from-orange-400 to-slate-900 w-60 h-60 rounded-t-full">
          <img
            className="max-w-full w-52 h-56 object-cover rounded-t-3xl"
            src={img}
            alt="pic"
          />
        </div>
      </div>
    </div>
  );
}
