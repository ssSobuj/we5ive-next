"use client";
import { useState } from "react";
import { SlLike } from "react-icons/sl";
import Star from "./Star";
import { PiStar, PiStarFill } from "react-icons/pi";

const ReviewsSection = () => {
  const [activeTab, setActiveTab] = useState("review");

  return (
    <div className="container mx-auto py-8 px-4 md:px-8  lg:px-20">
      {/* Tabs */}
      <div className="flex justify-start md:gap-x-[4.5rem] gap-x-4 md:text-xl mb-6 text-[#1D1D1D]">
        <button
          onClick={() => setActiveTab("details")}
          className={`pb-2 border-b-2 ${
            activeTab === "details"
              ? "text-primary-600 font-semibold text-[19px] border-primary-500"
              : "text-[#747474] border-transparent hover:border-primary-500 hover:text-primary-600"
          }`}
        >
          Details
        </button>
        <button
          onClick={() => setActiveTab("review")}
          className={`pb-2 border-b-2 ${
            activeTab === "review"
              ? "text-primary-600 font-semibold text-[19px] border-primary-500"
              : "text-[#747474] border-transparent hover:border-primary-500 hover:text-primary-600"
          }`}
        >
          Review & Rating
        </button>
        <button
          onClick={() => setActiveTab("discussion")}
          className={`pb-2 border-b-2 ${
            activeTab === "discussion"
              ? "text-primary-600 font-semibold text-[19px] border-primary-500"
              : "text-[#747474] border-transparent hover:border-primary-500 hover:text-primary-600"
          }`}
        >
          Discussion
        </button>
      </div>

      {/* Tab Content */}
      <div className="min-h-96">
        {activeTab === "details" && (
          <div className="rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-4">Product Details</h2>
            <p className="text-gray-700">
              This product is made with high-quality materials to ensure
              durability and long-lasting performance. It is designed with the
              user in mind, providing both functionality and style.
            </p>
          </div>
        )}

        {activeTab === "review" && (
          <div className="flex flex-col lg:flex-row-reverse gap-6">
            {/* Right side content */}
            <div className="lg:w-1/3 p-4">
              <div className="flex items-center gap-x-8">
                <h2 className="text-lg font-semibold mb-4 text-black">
                  Product Review
                </h2>
                <h2 className="text-lg font-semibold mb-4 text-primary-600">
                  121 reviews
                </h2>
              </div>
              <div className="flex items-center justify-between gap-2 border-b border-dashed pb-4">
                <span className="text-yellow-400 text-2xl ms-3">
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
                  </ul>
                </span>
                <span className="text-gray-700 text-xl font-bold">(4.0)</span>
              </div>
              <div className="space-y-2 mt-4">
                {[5, 4, 3, 2, 1].map((star, index) => (
                  <div
                    className="flex text-base items-center gap-2"
                    key={index}
                  >
                    <span className="w-6 text-right text-[#1D1D1D]">
                      {star}
                    </span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-yellow-400 h-2 rounded-full"
                        style={{ width: `${star * 10 + 10}%` }}
                      ></div>
                    </div>
                    <span className="text-[#1D1D1D]">{star * 10}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Left side content */}
            <div className="lg:w-2/3 p-4">
              <select className="py-2 px-4 border border-primary-600 outline-none text-[#1D1D1D] font-semibold rounded-lg mb-4">
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="highest">Highest Rating</option>
                <option value="lowest">Lowest Rating</option>
              </select>
              <div className="space-y-4">
                {[1, 2].map((index) => (
                  <div
                    className="flex items-start border-b border-dashed pb-3"
                    key={index}
                  >
                    <img
                      src="/images/avatar.png"
                      alt="User avatar"
                      className="rounded-full mr-3 w-10 h-10"
                    />
                    <div>
                      <div className="flex items-center gap-x-2 ">
                        <h3 className="font-semibold text-[#1D1D1D]">
                          Cameron Williamson
                        </h3>
                        <p className="text-sm text-gray-500">3 days ago</p>
                      </div>
                      <div className="flex items-center">
                        <Star />
                      </div>
                      <p className="text-[#1D1D1D] font-bold">Very Nice!!</p>
                      <div className="flex text-[#1D1D1D] items-center text-sm gap-x-2">
                        <SlLike />
                        <p>10</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "discussion" && (
          <div className="rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-4">Discussion</h2>
            <p className="text-gray-700">
              Have questions or need more information? Join the discussion here!
              Share your thoughts, ask questions, and connect with others who
              have purchased or are considering this product.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewsSection;
