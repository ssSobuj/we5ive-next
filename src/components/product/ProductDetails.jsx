"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Star from "./Star";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";

const ProductDetails = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="mx-auto py-8 px-4 md:px-8  lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Image Section */}
      <div>
        {/* Main Image Slider */}
        <Swiper
          style={{
            "--swiper-navigation-color": "#000",
            "--swiper-pagination-color": "#000",
          }}
          spaceBetween={10}
          navigation={{
            prevEl: ".prev-arrow",
            nextEl: ".next-arrow",
          }}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="rounded-lg"
        >
          {[
            "/images/product/details1.png",
            "/images/product/details2.png",
            "/images/product/details3.png",
            "/images/product/details4.png",
          ].map((src, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={src}
                alt={`Product Image ${idx + 1}`}
                className="rounded-lg w-full max-h-[24rem] sm:max-h-[28rem] lg:max-h-[32.5rem] object-cover"
              />
            </SwiperSlide>
          ))}

          {/* Custom Navigation Arrows */}
          <button className="prev-arrow absolute left-2 top-1/2 transform -translate-y-1/2 border-primary-600 text-primary-600 rounded-full p-2 z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button className="next-arrow absolute right-2 top-1/2 transform -translate-y-1/2 border-primary-600 text-primary-600 rounded-full p-2 z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </Swiper>

        {/* Thumbnail Slider */}
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={6}
          slidesPerView={4}
          freeMode
          watchSlidesProgress
          modules={[FreeMode, Navigation, Thumbs]}
          className="my-4"
        >
          {[
            "/images/product/details1.png",
            "/images/product/details2.png",
            "/images/product/details3.png",
            "/images/product/details4.png",
          ].map((src, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={src}
                alt={`Thumbnail ${idx + 1}`}
                className="w-full max-h-[6rem] sm:max-h-[7rem] lg:max-h-[9rem] bg-primary-500 rounded-lg object-fill object-cover border bg-transparent cursor-pointer hover:border-primary-600"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Details Section */}
      <div className="flex flex-col gap-6">
        <div className="w-max">
          <Button variant="secondary">New Arrival</Button>
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
          White Hoodie
        </h1>

        <div className="flex items-center gap-2">
          <div>
            <Star />
          </div>
          <p className="text-primary-600 font-semibold">121 reviews</p>
        </div>

        <h5 className="text-xl sm:text-[1.5rem] lg:text-[1.75rem] font-bold text-black">
          BDT 2500
        </h5>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          {/* Sizes */}
          <div>
            <p className="font-semibold mb-2 text-base sm:text-lg">
              Available Size
            </p>
            <div className="flex gap-2">
              {["S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  className="px-3 py-2 border border-primary-600 rounded-lg bg-primary-50 hover:bg-primary-200"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Colors */}
          <div>
            <p className="font-semibold mb-2 text-base sm:text-lg">
              Available Color
            </p>
            <div className="flex gap-2 items-center">
              <input
                type="radio"
                name="color"
                id="off-white"
                className="accent-primary-100 w-6 h-6"
              />
              <label htmlFor="off-white">Off White</label>
              <input
                type="radio"
                name="color"
                id="black"
                className="accent-gray-900 w-6 h-6"
              />
              <label htmlFor="black">Black</label>
            </div>
          </div>
        </div>

        {/* Quantity */}
        <div className="flex items-center mt-8 gap-4">
          <p className="font-medium text-base sm:text-lg">Quantity</p>
          <div className="flex items-center border bg-primary-100 rounded-full">
            <button className="px-4 py-2 text-lg font-semibold text-gray-600 hover:bg-gray-200">
              -
            </button>
            <Input
              type="text"
              min="1"
              defaultValue="1"
              className="w-8 text-center border-0 font-semibold focus:ring-0 focus:outline-none outline-none"
            />
            <button className="px-4 py-2 text-lg font-semibold text-gray-600 hover:bg-gray-200">
              +
            </button>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Button className="w-full bg-primary-600 text-white">Buy Now</Button>
          <Button variant="outline" className="w-full">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
