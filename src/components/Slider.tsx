"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "always fresh & always crispy & always hot",
    image: "/teal/t4.jpg",
  },
  {
    id: 2,
    title: "Celebrate with us, discover the limits of hospitality",
    image: "/teal/t14.jpg",
  },
  {
    id: 3,
    title: "the best cereal to share with your family",
    image: "/teal/t20.jpg",
  },
  {
    id: 4,
    title: "Explore the cusine",
    image: "/teal/t17.jpg",
  },
  {
    id: 5,
    title: "sourced locally",
    image: "/teal/t25.jpg",
  },
  {
    id: 6,
    title: "Let us show you what impecable food means",
    image: "/teal/t27.jpg",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row">
      {/* Text Container */}
      <div className="flex-1 flex items-center justify-center flex-col gap-8 text-sky-700 font-bold lg:h-full">
        <h1 className="text-5xl text-center uppercase p-4 md:p-10 md:6xl xl:7xl">
          {data[currentSlide].title}	
        </h1>
        <button className="bg-cyan-500 text-white py-4 px-8">Order Now</button>
      </div>
      {/* Image Container */}
      <div className="w-full relative lg:h-full flex-1">
        <Image
          src={data[currentSlide].image}
          alt=""
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Slider;
