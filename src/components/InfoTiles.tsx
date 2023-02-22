import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const InfoTiles = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
    });
  }, []);

  return (
    <div className="w-full font-open-sans px-24 md:px-32 bg-black  flex justify-center">
      <div className="flex md:flex-row flex-col md:justify-center gap-8 items-start text-slate-100 py-16">
        <div data-aos="fade-up" className="flex-1 flex justify-center gap-4 ">
          <img
            src="assets/phone-call.png"
            alt="Phone Information"
            className="w-8 h-8"
          />
          <div>
            <h1 className="text-lg">(760) 907 2719</h1>
            <p className="text-slate-400">Call to order or make appointment</p>
          </div>
        </div>
        <div data-aos="fade-up" className="flex-1 justify-center flex gap-4">
          {" "}
          <img src="assets/compass.png" alt="directions" className="w-8 h-8" />
          <div>
            <h1 className="text-lg">830 Emerald St</h1>
            <p className="text-slate-400">San Diego, California, USA</p>
          </div>
        </div>
        <div data-aos="fade-up" className="flex-1 justify-center flex gap-4">
          {" "}
          <img
            src="assets/clock.png"
            alt="Times we are Open"
            className="w-8 h-8"
          />
          <div>
            <h1 className="text-lg">Open Everyday</h1>
            <p className="text-slate-400">4:00pm - 10:00pm</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoTiles;
