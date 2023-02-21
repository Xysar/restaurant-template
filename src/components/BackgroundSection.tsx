import React from "react";

const BackgroundSection = () => {
  return (
    <div className="font-open-sans md:flex">
      <div className="md:w-[50%]">
        <img
          className="h-[400px] md:h-[650px] w-full object-cover object-center "
          src="src/assets/bgsectionimage.jpg"
          alt="Coffee shop"
        />
      </div>
      <div className="bg-zinc-900  md:w-[50%] flex items-center justify-start">
        <div className="md:ml-[-90px] md:min-w-[400px] md:max-w-[90%]  p-10 pb-16 bg-black bg-opacity-60 text-white">
          <h3 className="text-3xl mb-8">
            <span className=" text-amber-800">Discover</span> <br></br>Our Story
          </h3>
          <p className="text-md text-zinc-500">
            On her way she met a copy. The copy warned the Little Blind Text,
            that where it came from it would have been rewritten a thousand
            times and everything that was left from its origin would be the word
            "and" and the Little Blind Text should turn around and return to its
            own, safe country. But nothing the copy said could convince her and
            so it didn't take long until a few insidious Copy Writers ambushed
            her, made her drunk with Longe and Parole and dragged her into their
            agency, where they abused her for their.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BackgroundSection;
