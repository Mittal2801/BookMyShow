import React, { useState, useEffect } from "react";
import { FunActivities, LatestPlays, LaughterTherapy, LiveEvents, MusicStudio, OutdoorEvents, PopularEvents, Premieres, RecommendedMovies } from "../assets/Asserts";

function Home() {
  const images = [
        "https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1778912523150_sardarweb.jpg",
        "https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1780396065565_killbillthewholebloodyaffairweb.jpg",
        "https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1781164338250_connplexcinemaswebjun.jpg",
        "https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1781176602960_michaelweb12june.jpg"
  ];

  const [current, setCurrent] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div>
      <div className="slider-container">

        <div className="slider">
          <button className="btn prev" onClick={prevSlide}>
            ❮
          </button>

          <img
            src={images[current]}
            alt={`Slide ${current + 1}`}
            className="slide-image"
          />

          <button className="btn next" onClick={nextSlide}>
            ❯
          </button>
        </div>

        <div className="dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={current === index ? "dot active" : "dot"}
              onClick={() => setCurrent(index)}
            ></span>
          ))}
        </div>
      </div>
      <div className="text-[#333333] font-bold text-2xl mx-30 mb-2 mt-10">Recommended Movies</div>
      <div className="grid md:grid-cols-5 mx-30 mb-10">
        {
          RecommendedMovies.map((p)=>{
            return(
              <div className="me-10 mb-5">
                <img src={p.image} alt="" className="rounded-sm" />
                <div className="font-semibold py-2">{p.name}</div>
                <div className="text-gray-500 font-medium">{p.type}</div>
              </div>  
            )
          })
        }
       
      </div>
      <div>
        <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/stream-leadin-web-collection-202210241242.png" alt="" className="w-[100%]"/>
      </div>
      <div className="text-[#333333] font-bold text-2xl mx-30 mb-2 mt-10">The Best Of Live Events</div>
      <div className="grid md:grid-cols-5 mx-30 mb-10">
        {
          LiveEvents.map((p)=>{
            return(
              <div className="me-10 mb-5">
                <img src={p.image} alt="" className="rounded-sm" />
              </div>  
            )
          })
        }
      </div>
      <div className="bg-[#2b3148] py-10">
          <div className="px-30 pb-10">
            <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-banner-web-collection-202208191200.png" alt="" />
          </div>
          <div className="font-bold text-white px-30 text-2xl">Premieres</div>
          <div className="text-white py-2 px-30">Brand new releases every Friday</div>
          <div className="grid grid-cols-5 px-30">
            {
              Premieres.map((p)=>{
                return(
                  <div className="me-10">
                    <div><img src={p.image} alt="" className="rounded-4xl py-3"/></div>
                    <div className="text-white font-semibold">{p.name}</div>
                    <div className="text-white">{p.language}</div>
                  </div>
                )
              })
            }
          </div>
      </div>
      <div className="text-[#333333] font-bold text-2xl mx-30 mb-2 mt-10">Your Music studio</div>
      <div className="grid grid-cols-5 mx-30">
        {
          MusicStudio.map((p)=>{
            return(
              <div className="mb-10 me-10">
                <div><img src={p.image} alt="" className="rounded-sm"/></div>
                <div className="font-semibold py-2">{p.name}</div>
                <div className="text-gray-500 font-medium">{p.location}</div>
                <div className="text-gray-500 font-medium">Concerts</div>
              </div>
            )
          })
        }
      </div>
      <div className="text-[#333333] font-bold text-2xl mx-30 mb-2 mt-10">Outdoor Events</div>
      <div className="grid grid-cols-5 mx-30">
        {
          OutdoorEvents.map((p)=>{
            return(
              <div className="mb-10 me-10">
                <div><img src={p.image} alt="" className="rounded-sm"/></div>
                <div className="font-semibold py-2">{p.name}</div>
                <div className="text-gray-500 font-medium">{p.location}</div>
                <div className="text-gray-500 font-medium">Concerts</div>
              </div>
            )
          })
        }
      </div>

      <div className="text-[#333333] font-bold text-2xl mx-30 mb-2 mt-10">Laghter Therapy</div>
      <div className="grid grid-cols-5 mx-30">
        {
          LaughterTherapy.map((p)=>{
            return(
              <div className="mb-10 me-10">
                <div><img src={p.image} alt="" className="rounded-sm"/></div>
                <div className="font-semibold py-2">{p.name}</div>
                <div className="text-gray-500 font-medium">{p.location}</div>
              </div>
            )
          })
        }
      </div>

      <div className="text-[#333333] font-bold text-2xl mx-30 mb-2 mt-10">Popular Events</div>
      <div className="grid grid-cols-5 mx-30">
        {
          PopularEvents.map((p)=>{
            return(
              <div className="mb-10 me-10">
                <div><img src={p.image} alt="" className="rounded-sm"/></div>
                <div className="font-semibold py-2">{p.name}</div>
                <div className="text-gray-500 font-medium">{p.location}</div>
              </div>
            )
          })
        }
      </div>

      <div className="text-[#333333] font-bold text-2xl mx-30 mb-2 mt-10">The Latest Plays</div>
      <div className="grid grid-cols-5 mx-30">
        {
          LatestPlays.map((p)=>{
            return(
              <div className="mb-10 me-10">
                <div><img src={p.image} alt="" className="rounded-sm"/></div>
                <div className="font-semibold py-2">{p.name}</div>
                <div className="text-gray-500 font-medium">{p.language}</div>
              </div>
            )
          })
        }
      </div>

      <div className="text-[#333333] font-bold text-2xl mx-30 mb-2 mt-10">Explore Fun Activities</div>
      <div className="grid grid-cols-5 mx-30">
        {
          FunActivities.map((p)=>{
            return(
              <div className="mb-10 me-10">
                <div><img src={p.image} alt="" className="rounded-sm"/></div>
                <div className="font-semibold py-2">{p.name}</div>
                <div className="text-gray-500 font-medium">{p.location}</div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default Home;