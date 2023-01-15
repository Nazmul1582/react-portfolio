import React from "react";
import { layout } from "../style";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";
import { skills } from "../constants";

export default function Skills() {
  return (
    <section className={`${layout.section}`}>
      <h2 className="heading">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 items-center justify-items-center gap-10 dark:text-slate-100">
        {skills.map((skill) => (
          <div key={skill.id} className="max-w-[150px]">
            <CircularProgressbar
              value={skill.parcentage}
              text={skill.parcentage}
              styles={buildStyles({
                pathColor: "orange",
                textColor: "#94a3b8",
                trailColor: "#fff",
                backgroundColor: "orange",
              })}
            />
            <p className="mt-2 text-center font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
