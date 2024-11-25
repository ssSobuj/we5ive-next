import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

function Discount() {
  return (
    <section className="h-[28.125rem] px-20 mb-24">
      <div className="h-full pl-16 overflow-hidden bg-primary-100 grid grid-cols-[7fr_5fr] items-center gap-6">
        {/* Left Content - 7 parts */}
        <div className="px-6 pb-14">
          <h5 className="text-2xl text-primary-700 font-semibold mb-6">
            Big Deal
          </h5>
          <h1 className="text-5xl font-semibold mb-6">
            <span className="text-primary-600">30%</span> Off for New Customers
          </h1>
          <Button className="px-6 py-2">Shop Now</Button>
        </div>

        {/* Right Image - 5 parts */}
        <div className="flex justify-center">
          <Image
            src="/images/discount.png"
            height={400}
            width={500}
            alt="Discount"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default Discount;
