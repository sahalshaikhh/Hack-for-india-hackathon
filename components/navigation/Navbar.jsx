import React from "react";
// import Menu from "../../public/assets/Menu.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <div className="main-navbar-section flex justify-between items-center text-white font-bold bg-black px-8 py-2">
        <div className="left-section">
          <Image src="/Menu.png" alt="Logo" width={50} height={50} />
        </div>

        <div className="right-section bg-[#f00] text-white py-1 px-7 text-center font-semibold rounded-3xl">
          Your Dish : 0
          <br />
        </div>
      </div>
    </>
  );
};

export default Navbar;
