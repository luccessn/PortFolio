/* eslint-disable prettier/prettier */
import React from "react";
import "./ProjectCard.css";
import { Button } from "@heroui/react";

const ProjectCard = ({ props }) => {
  const goCode = () => {
    window.open(props.code, "_blank", "noopener,noreferrer");
  };

  const goLink = () => {
    window.open(props.link, "_blank", "noopener,noreferrer");
  };
  return (
    <div>
      <div className=" backdrop-blur-sm shadow-[0px_4px_16px_#B10AE0] w-[130px] ssm:w-[170px] md:w-[220px] ssm:h-[280px] md:h-[420px] lg:w-[300px] group gap-[0.5em] rounded-[1.5em] relative flex justify-end flex-col   p-[1.5em] z-[1] overflow-hidden">
        <div className="absolute top-0 left-0 h-full flex  w-full ">
          <img
            src={props.img}
            alt=" "
            className="w-full h-[150px]  md:h-[200px] lg:h-[250px] rounded-[2em] p-5 "
          />
        </div>
        <div className="container text-white z-[2] relative font-nunito flex flex-col gap-[0.5em]">
          <div className="h-fit w-full">
            <h1
              className="card_heading text-small md:text-medium lg:text-[1.5em] tracking-[.2em]"
              style={{
                fontWeight: 900,
                WebkitTextFillColor: "transparent",
                WebkitTextStrokeWidth: "1px",
                textShadow: "0 0 7px #fff",
              }}
            >
              {props.name}
            </h1>
            <p
              className=" text-small md:text-medium lg:text-[1.2em]"
              style={{
                fontWeight: 900,
                WebkitTextFillColor: "transparent",
                WebkitTextStrokeWidth: "1px",
                textShadow: "0 0 7px #fff",
              }}
            >
              {props.year}
            </p>
          </div>

          <div className="flex justify-left items-center h-fit w-full gap-[1.5em]">
            <div className=" w-[50px]  sm:w-[70px] md:w-fit h-fit flex justify-left gap-[0.5em]">
              {[...Array(4)].map((_, index) => (
                <svg
                  key={index}
                  viewBox="0 0 576 512"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[1em] w-[1em]"
                  fill="white"
                >
                  <path d="M316.7 17.8l65.43 132.4l146.4 21.29c26.27 3.796 36.79 36.09 17.75 54.59l-105.9 102.1l25.05 145.5c4.508 26.31-23.23 45.9-46.49 33.7L288 439.6l-130.9 68.7C133.8 520.5 106.1 500.9 110.6 474.6l25.05-145.5L29.72 226.1c-19.03-18.5-8.516-50.79 17.75-54.59l146.4-21.29l65.43-132.4C271.1-6.083 305-5.786 316.7 17.8z"></path>
                </svg>
              ))}
            </div>

            <div className="w-fit h-fit text-white font-nunito text-[10px] sm:text-[15px] md:text-[1.2em] font-light">
              <p>4.5/5 stars</p>
            </div>
          </div>

          <div className="flex justify-center items-center h-fit w-fit gap-2 md:gap-10 lg:gap-20">
            <div className="group relative">
              <button onClick={goCode}>
                <svg
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                  className=" w-3 sm:w-8 hover:scale-125 duration-200 hover:stroke-blue-500"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </button>
              <span
                className="absolute -top-14 left-[50%] -translate-x-[50%] 
      z-20 origin-left scale-0 px-3 rounded-lg border 
      border-gray-300 bg-black py-2 text-sm font-bold
      shadow-md transition-all duration-300 ease-in-out 
      group-hover:scale-100"
              >
                See Code<span></span>
              </span>
            </div>
            <Button
              className="text-tiny text-white blur-xs w-[10px] h-[10px] sm:w-[100px] sm:h-[30px] lg:w-[150px] lg:h-[30px]  "
              color="default"
              radius="lg"
              size=" sm"
              variant="flat"
              onPress={goLink}
            >
              <ion-icon
                name="unlink-outline"
                className="  text-xl top-[10px] "
              ></ion-icon>
              <h1 className=" text-[8px] lg:text-small"> Web-Site</h1>
            </Button>
          </div>
        </div>
        <p className="font-nunito block text-white font-light relative h-[0em] group-hover:h-[10em] text-[8px] sm:text-[12px] md:text-small lg:group-hover:h-[6em] leading-[1.2em] duration-500 overflow-hidden">
          {props.dscrp}
          <br></br>
          {props.used &&
            props.used.map((tech, index) => (
              <span
                key={index}
                className={`px-1 py-1 text-[8px] sm:text-[12px]  lg:text-sm ${
                  index % 3 === 0
                    ? "text-blue-800"
                    : index % 3 === 1
                    ? "text-yellow-400"
                    : "text-sky-400"
                }`}
              >
                # {tech}
              </span>
            ))}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
