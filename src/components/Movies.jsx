import React, { useEffect, useState } from "react";

const Movies = () => {
  const images = [
    "https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1783513987339_webjpg.jpeg",
    "https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1783671474644_moanaweb.jpg",
    "https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1783497566614_michaelweb2.jpg",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const languages = [
    "English",
    "Hindi",
    "Gujarati",
    "Tamil",
    "Telugu",
    "Malayalam",
    "Kannada",
    "Marathi",
  ];

  return (
    <div className="bg-[#f2f5f9] min-h-screen">


      <div className="max-w-7xl mx-auto px-4 py-5">

        <div className="relative">

          <img
            src={images[current]}
            alt=""
            className="w-full h-[180px] sm:h-[250px] md:h-[320px] lg:h-[380px] object-cover rounded-xl"
          />

          <button
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 text-white h-10 w-10 rounded-full"
          >
            ❮
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 text-white h-10 w-10 rounded-full"
          >
            ❯
          </button>
        </div>

        <div className="flex justify-center mt-4 gap-2">
          {images.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-3 w-3 rounded-full cursor-pointer ${
                current === index ? "bg-red-600" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>
      </div>


      <div className="max-w-7xl mx-auto px-4 py-8">

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">


          <div>

            <h2 className="text-2xl font-bold mb-5">
              Filters
            </h2>


            <div className="bg-white rounded-lg p-5 shadow-sm">

              <div className="flex justify-between mb-5">

                <h3 className="font-semibold text-red-500">
                  Languages
                </h3>

                <button className="text-gray-500 text-sm">
                  Clear
                </button>

              </div>

              <div className="flex flex-wrap gap-3">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    className="border border-gray-300 px-4 py-2 text-sm rounded text-red-500 hover:bg-red-500 hover:text-white duration-300"
                  >
                    {lang}
                  </button>
                ))}
              </div>

            </div>


            <div className="bg-white rounded-lg p-5 mt-5 shadow-sm flex justify-between text-sm">
              <span>Genres</span>
              <span className="text-gray-500 text-sm">
                Clear
              </span>
            </div>


            <div className="bg-white rounded-lg p-5 mt-5 shadow-sm flex justify-between text-sm">
              <span>Format</span>
              <span className="text-gray-500 text-sm">
                Clear
              </span>
            </div>

            <button className="w-full mt-5 border border-red-500 text-red-500 rounded-lg py-3 hover:bg-red-500 hover:text-white duration-300">
              Browse by Cinemas
            </button>

          </div>


          <div className="lg:col-span-3">

            <h2 className="text-3xl font-bold mb-6">
              Movies In Ahmedabad
            </h2>


            <div className="flex flex-wrap gap-3 mb-8">
              {languages.map((lang) => (
                <button
                  key={lang}
                  className="border border-gray-300 bg-white text-red-500 text-sm rounded-full px-5 py-2 hover:bg-red-500 hover:text-white duration-300"
                >
                  {lang}
                </button>
              ))}
            </div>


            <div className="bg-white rounded-lg p-5 shadow-sm flex flex-col sm:flex-row sm:justify-between sm:items-center">

              <h3 className="text-xl font-semibold">
                Coming Soon
              </h3>

              <button className="text-red-500 mt-3 sm:mt-0">
                Explore Upcoming Movies
              </button>

            </div>


            

          </div>

        </div>

      </div>
              <div className="bg-white px-30">

              <div className="max-w-7xl  px-4 sm:px-6 lg:px-8 py-4 text-sm text-gray-500">
                Home / Movies
              </div>

            </div>
    </div>
  );
};

export default Movies;