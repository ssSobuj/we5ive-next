const { Button } = require("../ui/button");
import { GoArrowUpRight } from "react-icons/go";

function ShopButton() {
  return (
    // <button className="flex items-center">
    //   <span className="bg-primary-500 text-white font-semibold py-2 px-4 rounded-full">
    //     Shop Now
    //   </span>
    //   <span className="bg-primary-500 text-white py-3 px-3 rounded-[50%]">
    //     <GoArrowUpRight className=" text-lg" />
    //   </span>
    // </button>
    <button className="relativegroup flex items-center justify-center">
      <span className=" bg-primary-500 text-white p-[1.7rem] rounded-full text-base font-medium ">
        Shop Now
      </span>
      <span
        className="absolute top-1/2  -translate-y-1/2 rounded-full flex 
           items-center justify-center text-white text-2xl 
           after:content-['↗'] group-hover:after:content-['↘'] 
           transition-all duration-300 ease-in-out"
      ></span>
    </button>
  );
}

export default ShopButton;
