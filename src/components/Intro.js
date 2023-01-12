import React from "react";
import img from "../assets/images/nazmul-hasan-2.png";
import { Typewriter } from "react-simple-typewriter";
import { layout } from "../style";

export default function Intro() {
  return (
    <div id="home" className={`${layout.sectionReverse} my-10 sm:my-20`}>
      <div className="sm:flex-1  dark:text-white">
        <h3 className="text-xl font-bold ">Hi! I'm Nazmul Hasan</h3>
        <h2 className="text-3xl sm:text-5xl font-bold mt-3">
          I'm a
          <span className="gradientText">
            {" "}
            <Typewriter
              words={["Frontend Developer!"]}
              loop={false}
              cursor
              cursorStyle="|"
              cursorColor="#f59e0b"
              typeSpeed={100}
              deleteSpeed={100}
              delaySpeed={10000}
            />
          </span>
        </h2>
        <p className="my-5">
          I am a passionate frontend developer. I am a Junior Frontend
          Developer. I am working with React JS and Tailwind CSS. I also have
          experience in developing static websites using HTML5, CSS3, and
          JavaScript.
        </p>
        <button className="button">Hire Me</button>
      </div>
      <div className="sm:flex-1 grid place-items-center">
        <div className="flex justify-center items-end bg-gradient-to-b from-orange-400 to-slate-900 w-60 h-60 rounded-t-full">
          <img
            className="max-w-full w-56 h-56 object-cover rounded-t-3xl"
            src={img}
            alt="pic"
          />
        </div>
      </div>
    </div>
  );
}
