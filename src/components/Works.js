import React from "react";
import { layout } from "../style";
import { FiEye, FiGithub } from "react-icons/fi";
import { works } from "../constants";

const Works = () => {
  return (
    <section id="works" className={`${layout.section}`}>
      <h2 className="heading underline-offset-[10px]">My Works</h2>
      <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {works.map((website) => (
          <div key={website.alt} className="max-w-[380px] mx-auto relative">
            <img
              src={website.img}
              alt={website.alt}
              className="rounded-xl object-cover w-[380px] h-[221px]"
            />
            <div className="overlay">
              <a
                href={website.link1}
                target="_blank"
                rel="noreferrer"
                className="overlay-icon"
              >
                <FiGithub />
              </a>
              <a
                href={website.link2}
                target="_blank"
                rel="noreferrer"
                className="overlay-icon"
              >
                <FiEye />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;
