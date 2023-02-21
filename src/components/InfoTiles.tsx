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
            src="src/assets/phone-call.png"
            alt="Phone Information"
            className="w-8 h-8"
          />
          <div>
            <h1 className="text-lg">(760) 456 7890</h1>
            <p className="text-slate-400">
              Call to order for pickup or ask any questions
            </p>
          </div>
        </div>
        <div data-aos="fade-up" className="flex-1 justify-center flex gap-4">
          {" "}
          <img
            src="src/assets/compass.png"
            alt="directions"
            className="w-8 h-8"
          />
          <div>
            <h1 className="text-lg">879 Washington St</h1>
            <p className="text-slate-400">San Francisco, California, USA</p>
          </div>
        </div>
        <div data-aos="fade-up" className="flex-1 justify-center flex gap-4">
          {" "}
          <img
            src="src/assets/clock.png"
            alt="Times we are Open"
            className="w-8 h-8"
          />
          <div>
            <h1 className="text-lg">Open Everyday</h1>
            <p className="text-slate-400">8:00am - 4:00pm</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoTiles;
