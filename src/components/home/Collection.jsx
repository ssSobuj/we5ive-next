import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import ShopButton from "../pertial/ShopButton";

function Collection() {
  return (
    <section className="h-[28.125rem] px-20 mb-56">
      <div className="h-full overflow-hidden grid grid-cols-[6fr_6fr]  items-center gap-6">
        <div className="flex justify-center bg-primary-100 ">
          <Image
            src="/images/collection.png"
            height={400}
            width={500}
            alt="Discount"
            className="object-contain"
          />
        </div>{" "}
        <div className="px-6 h-auto pb-52">
          <h1 className="text-5xl font-semibold mb-6">MEN COLLECTION</h1>
          {/* <Button className="px-6 py-2">Shop Now</Button> */}
          <ShopButton />
        </div>
      </div>
    </section>
  );
}

export default Collection;
