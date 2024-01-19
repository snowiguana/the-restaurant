import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import CartIcon from "./CartIcon";
import Image from "next/image";

const Navbar = () => {
  const user = false;
  return (
    <div className="h-12 text-sky-700 p-4 flex items-center justify-between border-b-2 border-b-emerald-500 uppercase md:h-24 lg:px-20 xl:px-40">
      {/* Left links md+ screen */}
      <div className="hidden md:flex gap-4 flex-1">
        <Link href={"/"}>HomePage</Link>
        <Link href={"/menu"}>Menu</Link>
        <Link href={"/"}>Contact</Link>
      </div>
      {/* LOGO */}
      <div className="text-xl md:font-bold flex-1 md:text-center">
        <Link href={"/"}>The Restaurant</Link>
      </div>
      {/* Mobile Menu */}
      <div className="md:hidden">
        <Menu />
      </div>
      {/* right links md+ screen */}
      <div className="hidden md:flex gap-4 items-center justify-end flex-1">
        {/* Contact number and image */}
        <div className="md:absolute top-2 r-2 xl:static flex items-center gap-2 cursor-pointer bg-cyan-300 px-1 rounded-md">
          <Image src="/phone.png" alt="" width={20} height ={20}/>
          <span>984 007 7890</span>
        </div>
        {!user ? (
          <Link href={"/login"}>Login</Link>
        ) : (
          <Link href={"/orders"}>Order</Link>
        )}
        <CartIcon/>
      </div>
    </div>
  );
};

export default Navbar;
