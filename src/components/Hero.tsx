import React from "react";
import Navbar from "./Navbar";
const Hero = () => {
  return (
    <section className="z-[1] font-open-sans m-0 relative h-screen w-full ">
      {" "}
      <img
        src="assets/pexels-pixabay-260922.jpg"
        alt=""
        className=" z-[-1] absolute object-cover w-full h-full brightness-75"
      />
      <Navbar />
      <div className="text-white flex flex-col h-[calc(100%-105px)] justify-center items-center">
        <h3 className="text-5xl tracking-wider text-center leading-snug mb-4">
          TRUE INGREDIENTS <br /> TRUE EXPERIENCE
        </h3>
        <p className="text-xl text-center mb-10">
          Serving Food and Hospitality
        </p>
        <div className="flex gap-4 ">
          <button className="border w-32 p-4 hover:bg-transparent hover:text-slate-100 bg-primary border-primary flex-1">
            Order Now
          </button>
          <button className="border w-32 p-4 hover:bg-primary hover:border-primary flex-1">
            View Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
