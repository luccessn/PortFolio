/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from "react";
import { prjcCards } from "../constants/myprojectsCards";
import ProjectCard from "./ProjectCard";
import Aboutme from "./Aboutme";
import Contact from "./Contact";

const MyProjectsCards = () => {
  const [isVisible, setisVisible] = useState(false);
  const [isVisible2, setisVisible2] = useState(false);
  const [isVisible3, setisVisible3] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setisVisible(true);
    }, 7500);
    const showTimer2 = setTimeout(() => {
      setisVisible2(true);
    }, 8500);
    const showTimer3 = setTimeout(() => {
      setisVisible3(true);
    }, 9600);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(showTimer2);
      clearTimeout(showTimer3);
    };
  }, []);

  return (
    <div>
      <div
        className={`flex flex-col gap-5 transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <Aboutme />
      </div>
      <div className="flex flex-col  sm:flex-row xxl:gap-96 ">
        <div
          className={`flex flex-row relative right-16 gap-[40px] lg:right-0 p-20 transition-all duration-1000 ease-out ${
            isVisible2
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {prjcCards.map((item) => (
            <ProjectCard key={item.name} props={item} />
          ))}
        </div>
        <div
          className={` relative top-[150px] transition-all duration-1000 ease-out ${
            isVisible3
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default MyProjectsCards;
