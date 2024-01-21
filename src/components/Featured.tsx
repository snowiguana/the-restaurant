import { featuredProducts } from "@/data";
import Image from "next/image";
import React from "react";

const Featured = () => {
  return (
    <div className="w-[100vw-1rem] overflow-x-scroll text-sky-700">
      {/* Wrapper */}
      <div className="w-max flex">
        {/* Single Items */}
        {featuredProducts.map((item) => (
          <div key={item.id} className="w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-cyan-100 transition-all duration-700 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]">
            {/* Image Container */}
            {item.img && (
              <div className="relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500">
                <Image src={item.img} alt="" fill className="object-contain" />
              </div>
            )}
            {/* Text Container */}
            <div className="flex-1 flex flex-col items-center justify-center text-center gap-4">
              <h1 className="texl-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">{item.title}</h1>
              <p className="p-4 2xl:p-8">{item.desc}</p>
              <span className="text-xl font-bold">$ {item.price}</span>
              <button className="bg-cyan-500 text-white p-2 rounded-md">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
