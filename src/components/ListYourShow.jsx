import React from 'react'
import { Host, Services } from '../assets/Asserts'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Show = [
  {
    "id":1,
    "name":"Ticket scanning made easy",
    "info":"Experience the ease of managing entry at an event.",
    "image":"https://assets-in.bmscdn.com/static/2021/06/des-sli-fiv.jpeg",
    "color":"#45443f",
  },
  {
    "id":2,
    "name":"Introducing an event management tool",
    "info":"Experience the ease of event creation and publishing",
    "image":"https://assets-in.bmscdn.com/static/2021/06/des-lap-sli-six.png",
    "color":"#2b3148",
  },
  {
    "id":3,
    "name":"Ticket scanning made easy",
    "info":"Experience the ease of managing entry at an event.",
    "image":"https://assets-in.bmscdn.com/static/2021/06/des-sli-fiv.jpeg",
    "color":"#45443f",
  },
  {
    "id":4,
    "name":"Take advantage of our M-ticket feature",
    "info":"Lets your audience skip the box office queue and head straight to the gate.",
    "image":"https://assets-in.bmscdn.com/static/2021/06/des-sli-f.jpeg",
    "color":"#9e6d4c",
  },
  {
    "id":5,
    "name":"Empower the artist within you",
    "info":"List your own performances, gigs and more with BookMyShow",
    "image":"https://assets-in.bmscdn.com/static/2021/06/sli-o.jpeg",
    "color":"#385434",
  },
  {
    "id":6,
    "name":"Conduct workshops and much more",
    "info":"Share your skills with people around the world - from home!",
    "image":"https://assets-in.bmscdn.com/static/2021/06/des-sli-th.jpeg",
    "color":"#516c7a",
  },
  {
    "id":7,
    "name":"Introducing an event management tool",
    "info":"Experience the ease of event creation and publishing",
    "image":"https://assets-in.bmscdn.com/static/2021/06/des-lap-sli-six.png",
    "color":"#2b3148",
  },
]


const ListYourShow = () => {
 return (
  <>

    {/* ================= HERO SLIDER ================= */}

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
      {Show.map((show) => (
        <SwiperSlide key={show.id}>
          <div
            style={{ backgroundColor: show.color }}
            className="w-full"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

              <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 py-5">


                <div className="text-white text-center lg:text-left">

                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">

                    {show.name}

                  </h1>

                  <p className="mt-6 text-lg sm:text-xl text-gray-200">

                    {show.info}

                  </p>

                  <button className="mt-8 text-lg font-medium hover:underline">

                    Know More →

                  </button>

                  <div className="mt-8">

                    <button className="bg-white text-red-500 font-semibold px-8 py-3 rounded-lg hover:bg-red-500 hover:text-white transition">

                      Contact Us Today!

                    </button>

                  </div>

                </div>


                <div className="flex justify-center">

                  <img
                    src={show.image}
                    alt={show.name}
                    className="w-[350px] max-w-sm lg:max-w-md"
                  />

                </div>

              </div>

            </div>

          </div>
        </SwiperSlide>
      ))}
    </Swiper>




       
<section className="bg-white py-20">

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <h2 className="text-4xl lg:text-5xl font-bold text-center text-[#1f253a]">
      What can you host?
    </h2>

    <p className="max-w-4xl mx-auto text-center text-gray-500 mt-8 leading-8">
      As the purveyor of entertainment, BookMyShow enables your event
      with end-to-end solutions from registration to the completion of
      your event. Here's what you can host.
    </p>


    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

      {Host.map((item) => (
        <div
          key={item.id || item.name}
          className="bg-[#ecf5ff] rounded-2xl border border-gray-200 p-10 text-center hover:shadow-xl transition duration-300"
        >
          <div className="flex justify-center">
            <img
              src={item.image}
              alt={item.name}
              className="h-24 object-contain"
            />
          </div>

          <h3 className="text-2xl font-bold mt-8 text-[#1f253a]">
            {item.name}
          </h3>
        </div>
      ))}

    </div>


    <div className="flex justify-center mt-16">
      <button className="bg-[#ec5e71] hover:bg-[#d94b60] text-white px-10 py-4 rounded-lg text-lg font-semibold transition">
        List Your Show
      </button>
    </div>

  </div>

</section>

    <section className="bg-[#fafafa] py-20">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="text-4xl lg:text-5xl font-bold text-center text-[#1f253a]">

          What are the services we offer?

        </h2>

        <p className="max-w-4xl mx-auto text-center text-gray-500 mt-8 leading-8">

          After successful collaborations with leading event organisers,
          we provide complete event management solutions to help make
          your event successful.

        </p>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {Services.map((service) => (

            <div
              key={service.id}
              className="bg-[#fcf1f1] rounded-2xl border border-gray-200 p-10 text-center hover:shadow-xl transition duration-300"
            >

              <div className="flex justify-center">

                <img
                  src={service.image}
                  alt={service.name}
                  className="h-24 object-contain"
                />

              </div>

              <h3 className="text-2xl font-bold mt-8 text-[#1f253a]">

                {service.name}

              </h3>

            </div>

          ))}

        </div>


        <div className="max-w-4xl mx-auto text-center mt-14">

          <p className="text-gray-500 leading-8">

            Apart from these essential services, we also support SEO
            promotion, custom ticket pricing, marketing campaigns,
            analytics, audience engagement and many more solutions to
            help make your event successful.

          </p>

        </div>


        <div className="flex justify-center mt-12">

          <button className="bg-[#ec5e71] hover:bg-[#d94d61] text-white font-semibold px-10 py-4 rounded-lg transition">

            List Your Show

          </button>

        </div>

      </div>

    </section>


    <section className="bg-white py-20">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">


          <div>

            <img
              src="https://assets-in.bmscdn.com/static/2021/06/double-quotess.png"
              alt="Quote"
              className="w-12 mb-8"
            />

            <p className="text-gray-600 leading-8 text-lg">

              The NCPA shares a cherished 13-year partnership with
              BookMyShow. Their seamless ticketing platform and dedicated
              on-ground support have consistently helped us deliver a
              smooth and enjoyable experience for our audiences.

            </p>

            <h3 className="mt-10 text-2xl font-bold text-[#1f253a]">

              NCPA

            </h3>

            <p className="text-gray-500 mt-2">

              National Centre for the Performing Arts

            </p>

          </div>


          <div className="flex justify-center">

            <img
              src="https://assets-in.bmscdn.com/static/2021/06/ncpas.jpeg"
              alt="NCPA"
              className="rounded-2xl shadow-xl w-full max-w-xl"
            />

          </div>

        </div>

      </div>

    </section>


    <section className="bg-[#f8f8f8] py-24">

      <div className="max-w-5xl mx-auto text-center px-4">

        <h2 className="text-4xl lg:text-5xl font-bold text-[#1f253a]">

          Sit back and watch your
          <br />
          event come to life

        </h2>

        <p className="mt-8 text-gray-500 leading-8">

          Events are meant to create memorable experiences.
          We take care of ticketing, promotion and audience
          management while you focus on delivering an amazing show.

        </p>

      </div>

    </section>

   
<section className="bg-white border-t border-gray-400">

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">

    <p className="text-sm text-gray-500">

      Home / List Your Show

    </p>

  </div>

</section>


<section className="bg-[#f5f5f5] py-5">

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <h2 className="text-2xl font-bold text-[#1f253a] mb-6">

      Privacy Note

    </h2>

    <p className="text-gray-500">

      By using <span className="font-semibold">www.bookmyshow.com</span>,
      you agree to the Privacy Policy governing your access to and use
      of BookMyShow services. If you do not agree with the Privacy
      Policy, please refrain from sharing your personal information and
      discontinue using the website.

    </p>

  </div>

</section>

</>
);
}

export default ListYourShow