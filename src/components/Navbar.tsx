import React, { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="relative">
      <div className="relative font-open-sans md:bg-transparent bg-black flex  text-slate-200 justify-center  py-6 px-10 md:border-b border-slate-100/25 whitespace-nowrap z-20">
        <div className="w-[1100px] items-center justify-between  flex">
          <h1 className="text-center text-3xl leading-6 ">
            Restaurant <br></br>
            <span className="text-lg">Company</span>
          </h1>
          <ul className="  gap-10 hidden md:flex items-center">
            <li>
              <button className="tracking-widest ease-linear duration-300 hover:text-amber-100">
                HOME
              </button>
            </li>
            <li>
              <button className="tracking-widest ease-linear duration-300 hover:text-amber-100">
                MENU
              </button>
            </li>
            <li>
              <button className="tracking-widest ease-linear duration-300 hover:text-amber-100">
                ABOUT
              </button>
            </li>
            <li>
              <button className="tracking-widest ease-linear duration-300 hover:text-amber-100">
                SHOP
              </button>
            </li>
            <li>
              <button className="tracking-widest ease-linear duration-300 hover:text-amber-100">
                CONTACT
              </button>
            </li>
            <li>
              <button className="tracking-widest">
                <img
                  src="src/assets/shopping-cart.png"
                  alt="Shopping Cart"
                  className="w-8 h-8"
                />
              </button>
            </li>
          </ul>
          <div className="md:hidden flex ">
            <button
              onClick={() => {
                setToggle((prev) => !prev);
              }}
              className="flex items-center "
            >
              <img
                src="src/assets/bars-white.png"
                alt="asd"
                className="w-14 h-14 p-2 cursor-pointer"
              />
              <h1 className="text-xl tracking-widest">MENU</h1>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${
          toggle ? "flex" : "-translate-y-[300px]"
        } absolute bg-black text-slate-100 ease-out duration-300 w-full z-10 md:hidden`}
      >
        <ul className="flex flex-col gap-6 m-6 mt-0 text-sm ">
          <li>
            <button className="ease-linear duration-300 tracking-[0.2em] hover:text-amber-200">
              HOME
            </button>
          </li>
          <li>
            <button className="ease-linear duration-300 tracking-[0.2em] hover:text-amber-200">
              MENU
            </button>
          </li>
          <li>
            <button className="ease-linear duration-300 tracking-[0.2em] hover:text-amber-200">
              ABOUT
            </button>
          </li>
          <li>
            <button className="ease-linear duration-300 tracking-[0.2em] hover:text-amber-200">
              SHOP
            </button>
          </li>
          <li>
            <button className="ease-linear duration-300 tracking-[0.2em] hover:text-amber-200">
              CONTACT
            </button>
          </li>
          <li>
            <button>
              <img
                className="w-6 h-6"
                src="src/assets/shopping-cart.png"
                alt="Shopping Cart"
              />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
