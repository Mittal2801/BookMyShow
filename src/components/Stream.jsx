import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";

const movies = [
  {
    id: 1,
    title: "Obsession",
    image:
      "https://assets-in.bmscdn.com/discovery-catalog/events/et00480914-luezcqbrmx-portrait.jpg",
    time: "1h 50m",
    genre: "Horror",
    age: "18+",
    date: "8 Nov,2021",
    lang: "English",
    description:
      "After breaking the mysterious One Wish Willow to win his crush's heart, a hopeless romantic gets exactly what he asked for, only to discover that some desires come at a dark sinister price.",
  },

  {
    id: 2,
    title: "The Drama",
    image:
      "https://assets-in.bmscdn.com/discovery-catalog/events/et00486484-rxlcelkwdk-portrait.jpg",
    time: "1h 47m",
    genre: "Comedy, Drama",
    age: "18+",
    date: "8 Nov,2021",
    lang: "English",
    description:
      "Set in the final days before a wedding, Emma and Charlie discover unexpected truths that change everything.",
  },

  {
    id: 3,
    title: "The People Upstairs",
    image:
      "https://assets-in.bmscdn.com/discovery-catalog/events/et00301467-mpczrrdtbn-portrait.jpg",
    time: "1h 21m",
    genre: "Comedy",
    age: "18+",
    date: "8 Nov,2021",
    lang: "Spanish",
    description:
      "Two couples embark on an emotional journey exploring modern relationships.",
  },

  {
    id: 4,
    title: "Passenger",
    image:
      "https://assets-in.bmscdn.com/discovery-catalog/events/et00500590-yrplxkzgrr-portrait.jpg",
    time: "1h 34m",
    genre: "Horror",
    age: "18+",
    date: "8 Nov,2021",
    lang: "English",
    description:
      "A demonic presence turns a road trip into an unforgettable nightmare.",
  },

  {
    id: 5,
    title: "Spider-Man: No Way Home",
    image:
      "https://assets-in.bmscdn.com/discovery-catalog/events/et00310790-mbpywupdwq-portrait.jpg",
    time: "2h 28m",
    genre: "Action",
    age: "18+",
    date: "8 Nov,2021",
    lang: "English",
    description:
      "Peter Parker faces his greatest challenge after Doctor Strange's spell goes wrong.",
  },

  {
    id: 6,
    title: "Michael",
    image:
      "https://assets-in.bmscdn.com/discovery-catalog/events/et00470110-awdekyqwkw-portrait.jpg",
    time: "2h 10m",
    genre: "Biography",
    age: "18+",
    date: "8 Nov,2021",
    lang: "English",
    description:
      "The life story of legendary singer Michael Jackson.",
  },

  {
    id: 7,
    title: "Oppenheimer",
    image:
      "https://assets-in.bmscdn.com/discovery-catalog/events/et00347867-zsfptfdyal-portrait.jpg",
    time: "3h 10m",
    genre: "Drama",
    age: "18+",
    date: "8 Nov,2021",
    lang: "English",
    description:
      "The story of J. Robert Oppenheimer and the creation of the atomic bomb.",
  },

  {
    id: 8,
    title: "Memento",
    image:
      "https://assets-in.bmscdn.com/discovery-catalog/events/et00036765-faekeqhlyp-portrait.jpg",
    time: "1h 53m",
    genre: "Thriller",
    age: "18+",
    date: "8 Nov,2021",
    lang: "English",
    description:
      "A man suffering memory loss searches for his wife's killer.",
  },

  {
    id: 9,
    title: "Undertone",
    image:
      "https://assets-in.bmscdn.com/discovery-catalog/events/et00505845-yuhcqmwcle-portrait.jpg",
    time: "1h 34m",
    genre: "Horror",
    age: "18+",
    date: "8 Nov,2021",
    lang: "English",
    description:
      "Hidden recordings unleash a terrifying supernatural force.",
  },

  {
    id: 10,
    title: "Vazhiye",
    image:
      "https://assets-in.bmscdn.com/discovery-catalog/events/et00504940-hrvqutfjfq-portrait.jpg",
    time: "1h 21m",
    genre: "Mystery",
    age: "18+",
    date: "8 Nov,2021",
    lang: "Malayalam",
    description:
      "Two vloggers investigate a mysterious land filled with terrifying secrets.",
  },
];
  

const Stream = () => {
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

  const [sections, setSections] = useState([]);

    useEffect(() => {

        fetch("http://127.0.0.1:8000/api/streams/")
            .then(res => res.json())
            .then(data => setSections(data));

    }, []);
  return (
  <>
    <Swiper
      modules={[Pagination, Autoplay]}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      loop={true}
      className="bg-black"
    >
      {movies.map((movie) => (
        <SwiperSlide key={movie.id}>
          <div className="bg-black min-h-screen lg:min-h-[620px]">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

              <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-10 py-12 lg:py-20">


                <div className="flex justify-center w-full lg:w-auto">

                  <img
                    src={movie.image}
                    alt={movie.title}
                    className="w-56 sm:w-64 md:w-72 lg:w-80 rounded-2xl shadow-2xl"
                  />

                </div>


                <div className="text-white text-center lg:text-left max-w-2xl">

                  <span className="inline-block bg-red-600 px-4 py-2 rounded-md text-sm font-semibold tracking-wide">
                    PREMIERE
                  </span>

                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-5 leading-tight">
                    {movie.title}
                  </h1>

                  <div className="mt-5 flex flex-wrap justify-center lg:justify-start gap-3 text-sm sm:text-base text-gray-300">

                    <span>{movie.time}</span>

                    <span>•</span>

                    <span>{movie.genre}</span>

                    <span>•</span>

                    <span>{movie.age}</span>

                    <span>•</span>

                    <span>{movie.date}</span>

                  </div>

                  <div className="mt-3">

                    <span className="bg-gray-800 px-4 py-2 rounded-full text-sm">
                      {movie.lang}
                    </span>

                  </div>

                  <p className="mt-6 text-gray-300 leading-8 text-sm sm:text-base">
                    {movie.description}
                  </p>

                  <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

                    <button className="bg-red-600 hover:bg-red-700 transition px-8 py-3 rounded-lg font-semibold">
                      ▶ Watch Now
                    </button>

                    <button className="border border-white hover:bg-white hover:text-black transition px-8 py-3 rounded-lg font-semibold">
                      + My List
                    </button>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </SwiperSlide>
      ))}
    </Swiper>

    {/* <div className="bg-[#f5f5f5] py-14">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between mb-8">

          <div>

            <h2 className="text-3xl font-bold">
              Featured Movies
            </h2>

            <p className="text-gray-500 mt-2">
              Watch the latest blockbuster movies in HD.
            </p>

          </div>

          <button className="text-red-600 font-semibold hover:underline">
            View All
          </button>

        </div>


        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">

          {movies.map((movie) => (

            <div
              key={movie.id}
              className="bg-white rounded-xl overflow-hidden shadow hover:shadow-2xl transition duration-300 group cursor-pointer"
            >

              <div className="overflow-hidden">

                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
                />

              </div>

              <div className="p-4">

                <h3 className="font-bold text-lg line-clamp-1">
                  {movie.title}
                </h3>

                <p className="text-gray-500 text-sm mt-2">
                  {movie.genre}
                </p>

                <div className="flex justify-between mt-4 text-sm">

                  <span className="font-semibold">
                    {movie.time}
                  </span>

                  <span className="text-red-600">
                    {movie.lang}
                  </span>

                </div>

                <button className="mt-5 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg transition">

                  Watch Now

                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div> */}
      {/* <div className="px-30 pt-10 text-2xl font-bold">
        <div>Premiere of the week</div>
      </div> */}
    {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-5 w-250 rounded-sm mx-30">
            
            {stream.map((setStream) => (

              <div key={setStream.id} className="shadow ">

                <img
                  src={setStream.poster}
                  alt={setStream.title}
                  className="w-full h-80 object-cover rounded-sm"
                />

                <div className="px-2 py-2 bg-white">

                  <h2 className="text-xl font-semibold">{movie.title}</h2>

                  <p className="text-gray-500">
                    {movie.genre.join(", ")}
                  </p>

                  <p className="text-gray-500">{movie.language  }</p>

                </div>

              </div>

            ))}

    </div> */}

    <div className="max-w-7xl mx-auto px-4 py-10">

            {sections.map(section => (

                <div key={section.id} className="mb-14">

                    <div className="flex justify-between items-center mb-5">

                        <h2 className="text-3xl font-bold">

                            {section.name}

                        </h2>

                        <button className="text-red-500">

                            See All →

                        </button>

                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

                        {section.streams.map(movie => (

                            <div key={movie.id}>

                                <img
                                    src={movie.poster}
                                    alt={movie.title}
                                    className="rounded-xl h-72 w-full object-cover"
                                />

                                <h3 className="mt-3 font-semibold">

                                    {movie.title}

                                </h3>

                                <p className="text-gray-500">

                                    {movie.language}

                                </p>

                            </div>

                        ))}

                    </div>

                </div>

            ))}

        </div>
    


    <div className="bg-black py-14">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="text-3xl text-white font-bold mb-8">
          Trending This Week
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">

          {movies.slice(0, 5).map((movie) => (

            <div
              key={movie.id}
              className="rounded-xl overflow-hidden group"
            >

              <img
                src={movie.image}
                alt={movie.title}
                className="rounded-xl h-72 w-full object-cover group-hover:scale-105 transition duration-300"
              />

              <div className="mt-3">

                <h3 className="text-white font-semibold">
                  {movie.title}
                </h3>

                <p className="text-gray-400 text-sm">
                  {movie.genre}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>



    <div className="bg-[#f5f5f5] py-12">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="space-y-10 text-gray-600">

          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-3">
              Watch Movies Online 24x7 – Weekdays or Weekends!
            </h2>

            <p className="leading-8">
              Entertainment brings happiness to people of every age.
              BookMyShow Stream lets you watch blockbuster movies,
              award-winning films and exclusive content anytime,
              anywhere. Enjoy HD streaming with a smooth experience on
              mobile, tablet, laptop or TV.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-3">
              Watch the Latest Movies in HD
            </h2>

            <p className="leading-8">
              Whether you love action, comedy, thriller, horror,
              romance or science fiction, Stream offers hundreds of
              titles in multiple languages. Rent or watch your
              favourite movies from the comfort of your home.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-3">
              Movies for Everyone
            </h2>

            <p className="leading-8">
              Enjoy Hollywood, Bollywood and regional cinema in one
              place. Watch with family, friends or by yourself and
              discover new releases every week with premium HD quality.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-3">
              Stream Anytime, Anywhere
            </h2>

            <p className="leading-8">
              Stream movies on your smartphone, tablet, laptop or smart
              TV. Continue watching from where you left off and enjoy a
              theatre-like experience from your home.
            </p>
          </div>
          
        </div>

      </div>

    </div>

    <div className="bg-white px-30">

      <div className="max-w-7xl  px-4 sm:px-6 lg:px-8 py-4 text-sm text-gray-500">
        Home / Stream
      </div>

    </div>
    

  </>
);
}

export default Stream;