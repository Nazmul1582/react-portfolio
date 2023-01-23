import React from "react";
import { services } from "../constants";
import { layout } from "../style";

export default function Services() {
  return (
    <section
      id="services"
      className={`${layout.section} dark:text-slate-100 scroll-m-20`}
    >
      <h2 className="heading">Services</h2>

      <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service) => (
          <div key={service.id} className="single-service">
            <h4 className="text-2xl font-bold mb-3 dark:text-white">
              {service.title}
            </h4>
            <p className="text-sm">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
