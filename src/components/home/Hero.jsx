import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

function Hero() {
  return (
    <>
      <section className="h-[31.25rem] bg-[url('/images/hero.png')] bg-cover bg-center bg-no-repeat">
        <div className="flex justify-center gap-8 flex-col items-center text-center h-full">
          <h1 className="text-white text-5xl font-bold">
            Elevate Your Everyday Style
          </h1>
          <Button>Shop Now</Button>
        </div>
      </section>
      <section className="h-[5.125rem] w-full bg-[url('/images/option.png')] bg-cover bg-center bg-no-repeat">
        <div className="px-24 py-4 flex justify-between items-center ">
          <div className="flex gap-5">
            <div>
              <Image src="/images/truck-delivery.png" width={30} height={30} />{" "}
            </div>
            <div className="flex flex-col">
              <h5 className="text-white font-semibold text-[1.188rem]">
                FREE SHIPPING
              </h5>
              <p className="text-white text-[13px]">
                BUY BDT 3000+ & GET FREE DELIVERY
              </p>
            </div>
          </div>{" "}
          <div className="flex gap-5">
            <div>
              <Image src="/images/exchange.png" width={30} height={30} />{" "}
            </div>
            <div className="flex flex-col">
              <h5 className="text-white font-semibold text-[1.188rem]">
                7 DAYS EXCHANGE
              </h5>
              <p className="text-white text-[13px]">
                EXCHANGE WITHIN 7 DAYS WITH SIMILAR TYPE OF PRODUCTS
              </p>
            </div>
          </div>{" "}
          <div className="flex gap-5">
            <div>
              <Image src="/images/payment.png" width={30} height={30} />{" "}
            </div>
            <div className="flex flex-col">
              <h5 className="text-white font-semibold text-[1.188rem]">
                100% PAYMENT SECURE
              </h5>
              <p className="text-white text-[13px]">
                CASH ON DELIVERY AND SECURED ONLINE PAYMENT
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
