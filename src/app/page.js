import Hero from "@/components/home/Hero";
import ShopButton from "@/components/pertial/ShopButton";
import FeaturedProduct from "@/components/product/FeaturedProduct";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedProduct />
    </div>
  );
}
