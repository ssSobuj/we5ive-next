import React from "react";
import { Button } from "@/components/ui/button"; // ShadCN Button component
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"; // ShadCN Carousel components

const products = [
  {
    id: 1,
    name: "Indian Sharee",
    price: "BDT 2,300",
    image: "/images/product/3.jpg",
  },
  {
    id: 2,
    name: "Hoodie",
    price: "BDT 2,300",
    image: "/images/product/2.png",
  },
  {
    id: 3,
    name: "Plazu",
    price: "BDT 2,300",
    image: "/images/product/1.png",
  },
  {
    id: 4,
    name: "Jacket",
    price: "BDT 2,300",
    image: "/images/product/4.png",
  },
  {
    id: 1,
    name: "Indian Sharee",
    price: "BDT 2,300",
    image: "/images/product/3.jpg",
  },
  {
    id: 2,
    name: "Hoodie",
    price: "BDT 2,300",
    image: "/images/product/2.png",
  },
  {
    id: 3,
    name: "Plazu",
    price: "BDT 2,300",
    image: "/images/product/1.png",
  },
  {
    id: 4,
    name: "Jacket",
    price: "BDT 2,300",
    image: "/images/product/4.png",
  },
];

const FeaturedProduct = () => {
  return (
    <section className="py-8 px-4 md:px-20">
      <div className="container mx-auto ">
        {/* Section Header */}
        <p className="text-sm text-[1.188rem] text-primary-600">
          FEATURED PRODUCT
        </p>
        <h2 className="text-[1.75rem] font-bold mb-6">New Arrivals</h2>

        {/* ShadCN Carousel */}
        <div className="relative">
          <Carousel>
            <CarouselContent>
              {products.map((product) => (
                <CarouselItem
                  key={product.id}
                  className="basis-1/1 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <div className="rounded-lg bg-white p-3 flex flex-col items-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-[18.6rem] object-cover mb-4 rounded-lg"
                    />
                    <div className="w-full flex items-center justify-between mb-4">
                      <p className="text-[16px]">{product.name}</p>
                      <h3 className="text-[1.188rem] font-semibold">
                        {product.price}
                      </h3>
                    </div>
                    <Button variant="outline" className="w-full">
                      Add to Cart
                    </Button>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute top-[-50px] right-[26px] flex">
              <CarouselPrevious className="border-primary-600 text-primary-600 shadow-md rounded-full " />
              <CarouselNext className="border-primary-600 text-primary-600 right-[-26px] rounded-full " />
            </div>
          </Carousel>

          {/* See More Button */}
          <div className="text-center mt-6">
            <Button variant="default" className="px-6">
              See more
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
