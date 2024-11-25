import React from "react";
import { Button } from "@/components/ui/button"; // ShadCN Button component
import Image from "next/image";
import { PiStarFill } from "react-icons/pi";
import { PiStar } from "react-icons/pi";
import Link from "next/link";
import Star from "./Star";

const products = [
  {
    id: 1,
    name: "Indian Sharee",
    price: "BDT 2,300",
    image: "/images/product/summer1.png",
  },
  {
    id: 2,
    name: "Half Sleeve Shirt",
    price: "BDT 2,300",
    image: "/images/product/summer2.png",
  },
  {
    id: 3,
    name: "Woman wearing sari",
    price: "BDT 2,300",
    image: "/images/product/summer3.png",
  },
  {
    id: 4,
    name: "Checkered shirt",
    price: "BDT 2,300",
    image: "/images/product/summer4.png",
  },
  {
    id: 1,
    name: "Indian Sharee",
    price: "BDT 2,300",
    image: "/images/product/summer1.png",
  },
  {
    id: 2,
    name: "Half Sleeve Shirt",
    price: "BDT 2,300",
    image: "/images/product/summer2.png",
  },
  {
    id: 3,
    name: "Woman wearing sari",
    price: "BDT 2,300",
    image: "/images/product/summer3.png",
  },
  {
    id: 4,
    name: "Checkered shirt",
    price: "BDT 2,300",
    image: "/images/product/summer4.png",
  },
];

const SummerProduct = () => {
  return (
    <section className="py-8 px-4 md:px-20">
      <div className="container mx-auto">
        {/* Section Header */}
        <p className="text-sm text-[1.188rem] text-primary-600">SUMMER</p>
        <h2 className="text-[1.75rem] font-bold mb-6">Big Deal</h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className=" rounded-xl bg-white p-3 flex flex-col items-center"
            >
              {/* Badge */}

              {/* Product Image */}
              <div className="rounded-xl relative bg-primary-100 p-2 w-full">
                <Link href="/product/slug">
                  <Image
                    width={166}
                    height={250}
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[18.6rem] object-cover mb-4 rounded-lg"
                  />
                </Link>
                <div className="absolute w-[2.75rem] font-bold top-0 right-3 bg-primary-700 text-white text-sm px-7 text-center py-2 rounded-b-full shadow-lg flex flex-col items-center">
                  <span>Up </span> <span>to</span> <span>40%</span>
                </div>
              </div>

              {/* Rating */}
              <div className="mt-3 text-start w-full">
                <Star />
              </div>

              {/* Product Name and Price */}
              <div className="w-full flex items-center justify-between mb-4 mt-4">
                <Link
                  href="/product/slug"
                  className="text-[16px]  hover:text-primary-700"
                >
                  {product.name}
                </Link>
                <h3 className="text-[1.188rem] font-semibold">
                  {product.price}
                </h3>
              </div>

              {/* Add to Cart Button */}
              <Button variant="outline" className="w-full">
                Add to Cart
              </Button>
            </div>
          ))}
        </div>

        {/* See More Button */}
        <div className="text-center mt-6">
          <Button variant="default" className="px-6">
            See more
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SummerProduct;
