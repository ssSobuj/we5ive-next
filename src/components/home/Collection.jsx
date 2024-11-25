import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import ShopButton from "../pertial/ShopButton";

function Collection() {
  return (
    <section className="h-auto px-4 sm:px-10 md:px-20 mb-56">
      <div className="h-full overflow-hidden flex flex-col-reverse md:grid md:grid-cols-[6fr_6fr] items-center gap-6">
        {/* Text Section */}
        <div className="px-6 h-auto text-center md:text-left pb-8 md:pb-52">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6">
            MEN COLLECTION
          </h1>
          <div className="flex justify-center md:justify-start">
            <ShopButton />
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center bg-primary-100">
          <Image
            src="/images/collection.png"
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

export default Collection;
