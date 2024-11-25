import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

function Discount() {
  return (
    <section className="h-auto px-4  md:px-20 mb-24">
      <div className="h-full bg-primary-100 grid md:grid-cols-[7fr_5fr] items-center gap-6 p-4 sm:p-8 md:pl-16 overflow-hidden">
        {/* Left Content */}
        <div className="text-center md:text-left px-4 sm:px-6 pb-8 md:pb-14">
          <h5 className="text-lg sm:text-xl md:text-2xl text-primary-700 font-semibold mb-4 md:mb-6">
            Big Deal
          </h5>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold mb-4 md:mb-6">
            <span className="text-primary-600">30%</span> Off for New Customers
          </h1>
          <div className="flex justify-center md:justify-start">
            <Button className="px-4 sm:px-6 py-2">Shop Now</Button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <Image
            src="/images/discount.png"
            height={300}
            width={400}
            alt="Discount"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default Discount;
