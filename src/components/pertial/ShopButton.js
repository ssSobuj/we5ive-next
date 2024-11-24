const { Button } = require("../ui/button");
import { GoArrowUpRight } from "react-icons/go";

function ShopButton() {
  return (
    <button className="flex items-center py-2 px-6 rounded-full hover:bg-purple-800">
      <span className="bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white font-semibold py-2 px-4 rounded-l-full flex items-center">
        Shop Now
      </span>
      <span className="bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white font-semibold py-2 px-4 rounded-r-full flex items-center">
        <GoArrowUpRight className="w-5 h-5 ml-1 transform transition-transform duration-200 hover:translate-x-1" />
      </span>
    </button>
  );
}

export default ShopButton;
