import React, { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="relative">
      <div className="relative font-open-sans md:bg-transparent bg-zinc-900 flex  text-slate-200 justify-center  py-6 px-10 border-b border-slate-100/25 whitespace-nowrap">
        <div className="w-[1100px] items-center justify-between  flex">
          <h1 className="text-center text-3xl leading-6 ">
            Coffee <br></br>
            <span className="text-lg">Company</span>
          </h1>
          <ul className="  gap-10 hidden md:flex items-center">
            <li>
              <button className="tracking-widest">HOME</button>
            </li>
            <li>
              <button className="tracking-widest">MENU</button>
            </li>
            <li>
              <button className="tracking-widest">ABOUT</button>
            </li>
            <li>
              <button className="tracking-widest">SHOP</button>
            </li>
            <li>
              <button className="tracking-widest">CONTACT</button>
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
          <div className="md:hidden flex">
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
          toggle ? "flex" : "hidden"
        } absolute bg-zinc-900 text-slate-100  w-full z-[0]`}
      >
        <ul className="flex flex-col gap-3 m-6">
          <li>Home</li>
          <li>Menu</li>
          <li>About</li>
          <li>Shop</li>
          <li>Contact</li>
          <li>
            <img src="#" alt="Shopping Cart" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
