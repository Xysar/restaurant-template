import React from "react";

const BackgroundSection = () => {
  return (
    <div className="font-open-sans md:flex">
      <div className="md:w-[50%]">
        <img
          className="h-[400px] md:h-[650px] w-full object-cover object-center "
          src="src/assets/pexels-rene-asmussen-1581384.jpg"
          alt="Coffee shop"
        />
      </div>
      <div className="bg-zinc-900  md:w-[50%] flex items-center justify-start">
        <div className="md:ml-[-90px] md:min-w-[400px] md:max-w-[90%]  p-10 pb-16 bg-black bg-opacity-60 text-white">
          <h3 className="text-3xl mb-8">
            <span className=" text-red-800  ">Established</span> <br></br> in
            San Diego
          </h3>
          <p className="text-md text-zinc-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis
            ullamcorper lacus. Donec pellentesque viverra diam, sed pellentesque
            erat. Suspendisse potenti. Nulla facilisi. Suspendisse potenti.
            Vivamus quis leo maximus, tristique augue a, molestie mi. Vivamus
            varius leo et tortor feugiat, et scelerisque felis aliquet. Aliquam
            dapibus convallis rhoncus. Quisque varius odio urna, id aliquet sem
            vulputate vel. Nulla enim diam, convallis ac justo ac, sagittis
            facilisis turpis. Ut ultricies, nulla ut rutrum molestie, risus
            sapien ullamcorper dui, sed feugiat metus nisi at tortor.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BackgroundSection;
