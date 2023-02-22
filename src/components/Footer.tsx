import React from "react";

const Footer = () => {
  return (
    <div className="font-open-sans text-white bg-neutral-900">
      <div className="grid md:grid-cols-5 justify-center gap-16 py-32 px-32  ">
        <div className="col-span-2">
          <h3 className="mb-10 text-lg tracking-widest ">ABOUT US</h3>
          <p className="text-lg text-zinc-400">
            Curabitur non aliquam risus. Etiam ut ligula placerat orci imperdiet
            mollis. Donec et leo neque.
          </p>
          <div className="mt-8 flex gap-8">
            <a
              href="#"
              className="rounded-full w-14 h-14 bg-zinc-800 hover:bg-black flex justify-center items-center flex-shrink-0"
            >
              <img
                className="w-8 h-8"
                src="src/assets/facebook-symbol.png"
                alt="facebook"
              />
            </a>
            <a
              href="#"
              className="rounded-full w-14 h-14 bg-zinc-800 hover:bg-black flex justify-center items-center flex-shrink-0"
            >
              <img
                className="w-8 h-8"
                src="src/assets/twitter.png"
                alt="twitter"
              />
            </a>
            <a
              href="#"
              className="rounded-full w-14 h-14 bg-zinc-800 hover:bg-black flex justify-center items-center flex-shrink-0"
            >
              <img
                className="w-8 h-8"
                src="src/assets/instagram.png"
                alt="instagram"
              />
            </a>
          </div>
        </div>
        <div className="text-lg">
          <h3 className=" mb-10 tracking-widest ">SERVICES</h3>
          <ul className="flex-col flex gap-5 text-zinc-400">
            <li className="hover:text-white duration-200 ease-in">
              <a href="#">Menu</a>
            </li>
            <li className="hover:text-white duration-200 ease-in">
              <a href="#">Services</a>
            </li>
            <li className="hover:text-white duration-200 ease-in">
              <a href="#">Careers</a>
            </li>
            <li className="hover:text-white duration-200 ease-in">
              <a href="#">Shop</a>
            </li>
          </ul>
        </div>
        <div className="text-lg col-span-2">
          <h3 className=" mb-10 tracking-widest ">HAVE QUESTIONS?</h3>
          <ul>
            <li className="text-zinc-400">
              203 Olive St. San Diego, California, USA
            </li>
            <li>+2 392 3929 210</li>
            <li>info@yourdomain.com</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center pb-20">
        <p>2023 | Made by Cesar Camacho</p>
      </div>
      <div className="flex items-center gap-2 flex-col p-4">
        <a href="https://www.flaticon.com/free-icons/phone" title="phone icons">
          Phone icons created by Prosymbols - Flaticon
        </a>
        <a
          href="https://www.flaticon.com/free-icons/compass"
          title="compass icons"
        >
          Compass icons created by Creative Stall Premium - Flaticon
        </a>
        <a href="https://www.flaticon.com/free-icons/clock" title="clock icons">
          Clock icons created by dmitri13 - Flaticon
        </a>
      </div>
    </div>
  );
};

export default Footer;
