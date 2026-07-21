import React, { useEffect, useState } from "react";

const Events = () => {
  
  const Categories = [
    "Workshops",
    "Comedy Shows",
    "Music Shows",
    "Performances",
    "Meetups",
    "Conferences",
    "Exhibitions",
    "Kids",
    "Spirituality",
    "Talks"
  ];

  return (
    <div className="bg-[#f2f5f9] min-h-screen">

      <div className="max-w-7xl mx-auto px-4 py-8">

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

          <div>

            <h2 className="text-2xl font-bold mb-5">
              Filters
            </h2>


            <div className="bg-white rounded-lg p-5 shadow-sm">

              <div className="flex justify-between mb-5">

                <h3 className="font-semibold text-red-500">
                  Categories
                </h3>

                <button className="text-gray-500 text-sm">
                  Clear
                </button>

              </div>

              <div className="flex flex-wrap gap-3">
                 {Categories.map((cat) => (
                  <button
                    key={cat}
                    className="border border-gray-300 px-4 py-2 text-sm rounded text-red-500 hover:bg-red-500 hover:text-white duration-300"
                  >
                    {cat}
                  </button>
                ))}
              </div>

            </div>


            <div className="bg-white rounded-lg p-5 mt-5 shadow-sm flex justify-between text-sm">
              <span>Date</span>
              <span className="text-gray-500 text-sm">
                Clear
              </span>
            </div>


            <div className="bg-white rounded-lg p-5 mt-5 shadow-sm flex justify-between text-sm">
              <span>Languages</span>
              <span className="text-gray-500 text-sm">
                Clear
              </span>
            </div>

            <div className="bg-white rounded-lg p-5 mt-5 shadow-sm flex justify-between text-sm">
              <span>More Filters</span>
              <span className="text-gray-500">
                Clear
              </span>
            </div>

            <div className="bg-white rounded-lg p-5 mt-5 shadow-sm flex justify-between">
              <span>Price</span>
              <span className="text-gray-500">
                Clear
              </span>
            </div>

            <button className="w-full mt-5 border border-red-500 text-red-500 rounded-lg py-3 hover:bg-red-500 hover:text-white duration-300">
              Browse by Venus
            </button>

          </div>


          <div className="lg:col-span-3">

            <h2 className="text-3xl font-bold mb-6">
              Events In Ahmedabad
            </h2>


            <div className="flex flex-wrap gap-3 mb-8">
              {Categories.map((cat) => (
                <button
                  key={cat}
                  className="border border-gray-300 bg-white text-red-500 text-sm rounded-full px-5 py-2 hover:bg-red-500 hover:text-white duration-300"
                >
                  {cat}
                </button>
              ))}
            </div>


            <div className="bg-white rounded-lg p-5 shadow-sm flex flex-col sm:flex-row sm:justify-between sm:items-center">

              <h3 className="text-xl font-semibold">
                Coming Soon
              </h3>

              <button className="text-red-500 mt-3 sm:mt-0">
                Explore Upcoming Events
              </button>

            </div>


            

          </div>

        </div>

      </div>
              <div className="bg-white px-30">

              <div className="max-w-7xl  px-4 sm:px-6 lg:px-8 py-4 text-sm text-gray-500">
                Home / Events
              </div>

            </div>
    </div>
  );
};

export default Events;