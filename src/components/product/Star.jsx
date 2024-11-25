import React from "react";
import { PiStar, PiStarFill } from "react-icons/pi";

function Star() {
  return (
    <ul className="flex gap-[2px] items-center">
      <li>
        <PiStarFill className="text-[#FFC700]" />
      </li>
      <li>
        <PiStarFill className="text-[#FFC700]" />
      </li>
      <li>
        <PiStarFill className="text-[#FFC700]" />
      </li>
      <li>
        <PiStar className="text-[#FFC700]" />
      </li>
      <li>
        <PiStar className="text-[#FFC700]" />
      </li>
      <li className="font-bold">(50)</li>
    </ul>
  );
}

export default Star;
