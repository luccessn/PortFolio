/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import SpotlightCard from "./secondComp/SpotlightCard"; // Fixed extra space
import emailjs from "emailjs-com"; // Import EmailJS
import Greenalert from "./alerts/Greenalert";
import Redalert from "./alerts/Redalert";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setloading] = useState(false);
  const ChangeInput = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const [greenAlert, setgreenAlert] = useState(false);
  const [redAlert, setredAlert] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    //LXSkZ2wdpNYn9gY7q
    //template_d9cot79
    //service_w80mw8g
    setloading(true);
    emailjs
      .send(
        "service_w80mw8g",
        "template_d9cot79",
        {
          from_name: formData.name,
          to_name: "Luka",
          from_email: formData.email,
          to_email: "gulualuka0@gmail.com",
          message: formData.message,
        },
        "LXSkZ2wdpNYn9gY7q"
      )
      .then(
        () => {
          setloading(false);
          setgreenAlert(true);
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setloading(false);
          console.log(error);
          console.log("somtheing wrong");

          setredAlert(true);
        }
      );
  };

  return (
    <div className="relative w-full">
      {greenAlert && <Greenalert />}
      {redAlert && <Redalert />}
      <SpotlightCard
        className="w-full max-w-[500px]  relative 
        -top-[13em]  md:-top-[5em] xxl:top-[2em] xxl:w-[320px] xxl:left-2
        min-h-[50px]  sm:min-h-[400px]  sm:right-20 sm:-top-[5em] ssm:h-[280px] ssm:-top-[13em]   md:right-0 
         rounded-lg p-4 sm:p-6 shadow-[0px_4px_16px_#B10AE0]"
        spotlightColor="rgb(159, 43, 104)"
      >
        <form className="flex flex-col gap-1 h-[220px]" onSubmit={handleSubmit}>
          <div className="flex flex-col -gap-5">
            <h1 className="text-gray-600 font-semibold text-sm sm:text-2xl md:text-3xl text-center mb-4 sm:mb-6">
              Contact Me
            </h1>

            <div className="mb-1 sm:mb-3">
              <label htmlFor="name" className="sr-only">
                Your Name
              </label>
              <input
                placeholder="Your Name"
                className="w-full text-white p-2 border-b-2 border-purple-400 bg-transparent outline-none focus:border-b-2 focus:border-red-600"
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={ChangeInput}
                required
              />
            </div>

            <div className="mb-1 sm:mb-3">
              <label htmlFor="email" className="sr-only">
                Your Email
              </label>
              <input
                placeholder="Your Email"
                className="w-full text-white p-2 border-b-2 border-purple-400 bg-transparent outline-none focus:border-b-2 focus:border-red-600"
                name="email"
                id="email"
                type="email"
                value={formData.email}
                onChange={ChangeInput}
                required
              />
            </div>

            <div className="mb-1 sm:mb-3 flex-grow">
              <label htmlFor="message" className="sr-only">
                Your Message
              </label>
              <textarea
                placeholder="Your Message"
                className="w-full text-white p-2 border-b-2 border-purple-400 bg-transparent outline-none focus:border-b-2 focus:border-red-600 min-h-[10px] sm:min-h-[100px]"
                name="message"
                id="message"
                value={formData.message}
                onChange={ChangeInput}
                required
              />
            </div>

            <div>
              <button
                className="w-full bg-[#825D8D] text-white font-semibold p-3 rounded-lg transition-all hover:bg-[#B10AE0] disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                type="submit"
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </div>
          </div>
        </form>
      </SpotlightCard>
    </div>
  );
};

export default Contact;
