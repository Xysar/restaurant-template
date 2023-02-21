import React from "react";
import Navbar from "./Navbar";
const Hero = () => {
  return (
    <section className="z-[1] font-open-sans m-0 relative h-screen w-full ">
      {" "}
      <img
        src="./src/assets/coffeeshop.jpg"
        alt=""
        className=" z-[-1] absolute object-cover w-full h-full brightness-75"
      />
      <Navbar />
      <div className="text-white flex flex-col h-[calc(100%-105px)] justify-center items-center">
        <h3 className="text-5xl tracking-wider text-center leading-snug mb-4">
          AMAZING TASTE & <br />
          BEAUTIFUL PLACE
        </h3>
        <p className="text-xl text-center mb-10">
          Serving coffee, tea, and sweets since 1917
        </p>
        <div className="flex gap-4 ">
          <button className="border w-32 p-4 hover:bg-transparent hover:text-slate-100 bg-amber-900 border-amber-900 flex-1">
            Order Now
          </button>
          <button className="border w-32 p-4 hover:bg-amber-900 hover:border-amber-900 flex-1">
            View Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
