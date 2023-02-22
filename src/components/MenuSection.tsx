import React from "react";

const MenuSection = () => {
  return (
    <div className="font-open-sans lg:px-44 px-24 lg:py-32 py-24 grid md:grid-cols-2 md:grid-rows-1 grid-rows-2  gap-8  bg-[#111111]">
      <div className=" flex flex-col gap-6 justify-center items-end text-right ">
        <h3 className="text-white text-4xl">
          <span className="text-red-800">VISIT</span> <br></br> OUR MENU
        </h3>
        <p className="text-zinc-500">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean.
        </p>
        <button className="text-red-800 p-4 border border-primary hover:text-white hover:bg-red-800 ease-in duration-200">
          View Full Menu
        </button>
      </div>
      <div className=" grid md:grid-cols-2 grid-cols-1 md:w-[325px] md:h-[400px] lg:w-[475px] gap-4 lg:gap-y-8 ">
        <img
          className=" lg:-translate-y-3  w-full h-24 md:h-full md:w-full object-cover overflow-hidden bg-slate-400"
          src="src/assets/pexels-jonathan-borba-2983101.jpg"
          alt=""
        />
        <img
          className="lg:translate-y-3  w-full h-24 md:h-full md:w-full  object-cover overflow-hidden bg-slate-400"
          src="src/assets/pexels-narda-yescas-1566837.jpg"
          alt=""
        />
        <img
          className=" lg:-translate-y-3 w-full h-24 md:h-full md:w-full  object-cover overflow-hidden bg-slate-400"
          src="src/assets/pexels-oleksandr-pidvalnyi-3147493.jpg"
          alt=""
        />
        <img
          className=" lg:translate-y-3 w-full h-24 md:h-full md:w-full  object-cover  overflow-hidden bg-slate-400"
          src="src/assets/pexels-senuscape-2313686.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default MenuSection;
