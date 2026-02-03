import React from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        Colaborando com marcas <br /> e agências para criar <br />
        resultados impactantes
      </h1>
      <div
        className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 
      md:grid-cols-2 xl:grid-cols-4 gap-10 mt-20 items-center"
      >
        <div>
          <ServicesCard
            icon="/images/s1.png"
            name="UI and UX"
            description="sdfsdfsdf"
          />
        </div>
        <div>
          <ServicesCard
            icon="/images/s2.png"
            name="Web and Mobile App"
            description="sdfsdfsdf"
          />
        </div>
        <div>
          <ServicesCard
            icon="/images/s3.png"
            name="Design and Creative"
            description="sdfsdfsdf"
          />
        </div>
        <div>
          <ServicesCard
            icon="/images/s4.png"
            name="Development"
            description="sdfsdfsdf"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
