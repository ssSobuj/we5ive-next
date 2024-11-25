import Collection from "@/components/home/Collection";
import Discount from "@/components/home/Discount";
import Hero from "@/components/home/Hero";
import FeaturedProduct from "@/components/product/FeaturedProduct";
import SummerProduct from "@/components/product/SummerProduct";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedProduct />
      <Discount />
      <Collection />
      <SummerProduct />
    </div>
  );
}
