import Price from "@/components/Price";
import { singleProduct } from "@/data";
import Image from "next/image";
import React from "react";

const SingleProductPage = () => {
  return (
    <div className="p-4 lg:px-20 h-[calc(100vh-9rem)] md:h-[calc(100vh-15rem)] flex flex-col justify-around text-sky-700 md:flex-row md:gap-8 md:items-center">
      {/* IMAGE CONTAINER */}
      {singleProduct.img && (
        <div className="relative w-full h-1/2 md:h-1/3 xl:h-1/2">
          <Image
            src={singleProduct.img}
            alt=""
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* TEXT CONTAINER  */}
      <div className="h-1/2 flex flex-col gap-4 md:h-1/3 md:justify-center md:gap-6 lg:gap-8 xl:h-1/2">
        <h1 className="text-3xl font-bold uppercase xl:text-5xl">{singleProduct.title}</h1>
        <p>{singleProduct.desc}</p>
        <Price
          price={singleProduct.price}
          id={singleProduct.id}
          options={singleProduct.options}
        />
      </div>
    </div>
  );
};

export default SingleProductPage;
