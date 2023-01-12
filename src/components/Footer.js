import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaEnvelope,
  FaFacebookMessenger,
} from "react-icons/fa";
import { layout, styles } from "../style";

export default function Footer() {
  return (
    <footer className="dark:bg-black bg-slate-300">
      <div className="dark:text-slate-100">
        <div className={`${layout.section}`}>
          <div className={`${styles.flexBetween} mb-5`}>
            <div className="w-20">
              <a href="#home">
                <span className="gradientText text-4xl italic pr-2">
                  Nazmul
                </span>
              </a>
            </div>
            <div className="flex gap-5 text-xl">
              <div className=" footer-icon">
                <a href="https://www.facebook.com/nazmul1582">
                  <FaFacebook />
                </a>
              </div>
              <div className=" footer-icon">
                <a href="https://github.com/nazmul1582">
                  <FaGithub />
                </a>
              </div>
              <div className=" footer-icon">
                <a href="mailto: nazmulhasan1582@gmail.com">
                  <FaEnvelope />
                </a>
              </div>
              <div className=" footer-icon">
                <a href="https://www.messenger.com/t/nazmul1582">
                  <FaFacebookMessenger />
                </a>
              </div>
            </div>
          </div>
          <p className="text-center">
            Copyright &copy; 2023, Md. Nazmul Hasan. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
