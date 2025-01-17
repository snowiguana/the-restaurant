import { menu } from "@/data";
import Link from "next/link";
import React from "react";

const MenuPage = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h[calc(100vh-9rem)] flex flex-col md:flex-row items-center">
      {menu.map((category) => (
        <Link
          key={category.id}
          href={`/menu/${category.slug}`}
          className="w-full h-1/3 bg-cover p-8"
          style={{ backgroundImage: `url(${category.img})` }}
        >
          <div className={`text-${category.color} w-1/2`}>
            <h1 className="uppercase font-bold text-3xl">{category.title}</h1>
            <p className="text-sm my-8">{category.desc}</p>
            <button
              className={`2xl:block py-2 px-4 rounded-md font-bold`}
              style={{
                background:
                  category.color === "white" ? "white" : "rgb(6 182 212)",
                color: category.color === "white" ? "black" : "white",
              }}
            >
              Explore
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPage;
