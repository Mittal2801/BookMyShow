import React from 'react'
import { BSolutions, Campaigns, Featurefive, Featurefour, Featuresone, Featuresthree, Featurestwo, Info, Partners, Products } from '../assets/Asserts'

const Corporates = () => {
  return (
    <div className="bg-[#f5f5f5]">


    <section className="bg-black">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">


          <div className="text-white">

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Entertainment you can gift.
            </h1>

            <p className="mt-6 text-gray-300 text-base md:text-lg leading-8">
              A variety of solutions to skyrocket your business with
              vouchers, promotions, loyalty, employee recognition,
              rewards and much more.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <button className="flex items-center gap-3 border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black duration-300">

                <img
                  src="https://in.bmscdn.com/webin/corporate/watch-video.png"
                  alt=""
                  className="w-6"
                />

                Watch Video

              </button>

              <button className="flex items-center gap-3 bg-[#eb4e62] px-6 py-3 rounded-lg hover:bg-red-700 duration-300">

                <img
                  src="https://in.bmscdn.com/webin/corporate/brochure.png"
                  alt=""
                  className="w-6"
                />

                Download Brochure

              </button>

            </div>

          </div>


          <div className="bg-white rounded-2xl shadow-xl p-8">

            <h2 className="text-3xl font-bold text-center mb-8">
              Contact Us
            </h2>

            <div className="space-y-5">

              <div>

                <label className="text-sm font-medium">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Name"
                  className="mt-2 w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                />

              </div>

              <div>

                <label className="text-sm font-medium">
                  Company Email
                </label>

                <input
                  type="email"
                  placeholder="Company Email"
                  className="mt-2 w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                />

              </div>

              <div>

                <label className="text-sm font-medium">
                  Company Name
                </label>

                <input
                  type="text"
                  placeholder="Company Name"
                  className="mt-2 w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                />

              </div>

              <div>

                <label className="text-sm font-medium">
                  Mobile Number
                </label>

                <input
                  type="tel"
                  placeholder="eg: 9876543210"
                  className="mt-2 w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                />

              </div>

              <button className="w-full bg-[#eb4e62] hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition">

                Receive a Callback

              </button>

            </div>

          </div>

        </div>

      </div>

    </section>

<section className="bg-white py-14">

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <h2 className="text-center text-3xl font-bold mb-12">
      OUR PARTNERS
    </h2>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 place-items-center">

      {Partners.map((partner, index) => (

        <div
          key={index}
          className="flex justify-center items-center hover:scale-110 transition duration-300"
        >

          <img
            src={partner.image}
            alt=""
            className="max-h-20 object-contain"
          />

        </div>

      ))}

    </div>

  </div>

</section>


<section className="py-16">

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

      {Info.map((item, index) => (

        <div
          key={index}
          className="bg-white rounded-xl shadow hover:shadow-xl transition duration-300 p-8 text-center"
        >

          <h2 className="text-4xl font-bold text-[#eb4e62]">
            {item.num}
          </h2>

          <p className="mt-4 text-gray-600 font-medium leading-7">
            {item.name}
          </p>

        </div>

      ))}

    </div>

  </div>

</section>


<section className="bg-white py-16">

  <div className="max-w-7xl mx-auto">

    {Featuresone.map((item, index) => (

      <div
        key={index}
        className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-6 lg:px-16"
      >

        <div>

          <p className="text-red-500 font-semibold text-xl">
            {item.extra}
          </p>

          <h2 className="text-3xl lg:text-5xl font-bold mt-3">
            {item.name}
          </h2>

          <p className="text-gray-600 mt-6 leading-8">
            {item.description}
          </p>

          <button className="mt-8 border-2 border-[#eb4e62] text-[#eb4e62] px-8 py-3 rounded-lg hover:bg-[#eb4e62] hover:text-white transition">

            {item.button}

          </button>

        </div>

        <div>

          <img
            src={item.image}
            alt=""
            className="w-full rounded-xl"
          />

        </div>

      </div>

    ))}

  </div>

</section>


<hr className="max-w-7xl mx-auto border-gray-300" />



<section className="bg-white py-16">

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {Featurestwo.map((item, index) => (

      <div
        key={index}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >

        <div className="order-2 lg:order-1">

          <img
            src={item.image}
            alt={item.name}
            className="w-full rounded-2xl shadow-lg"
          />

        </div>

        <div className="order-1 lg:order-2">

          <h2 className="text-3xl lg:text-5xl font-bold">
            {item.name}
          </h2>

          <p className="text-gray-600 mt-6 leading-8">
            {item.description}
          </p>

          <button className="mt-8 border-2 border-[#eb4e62] text-[#eb4e62] px-8 py-3 rounded-lg hover:bg-[#eb4e62] hover:text-white transition">
            {item.button}
          </button>

        </div>

      </div>

    ))}

  </div>

</section>

<hr className="max-w-7xl mx-auto border-gray-300"/>


<section className="bg-white py-16">

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {Featuresthree.map((item,index)=>(

      <div
        key={index}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >

        <div>

          <h2 className="text-3xl lg:text-5xl font-bold">
            {item.name}
          </h2>

          <p className="text-gray-600 mt-6 leading-8">
            {item.description}
          </p>

          <button className="mt-8 border-2 border-[#eb4e62] text-[#eb4e62] px-8 py-3 rounded-lg hover:bg-[#eb4e62] hover:text-white transition">
            {item.button}
          </button>

        </div>

        <div>

          <img
            src={item.image}
            alt={item.name}
            className="w-full rounded-2xl shadow-lg"
          />

        </div>

      </div>

    ))}

  </div>

</section>

<hr className="max-w-7xl mx-auto border-gray-300"/>


<section className="bg-white py-16">

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {Featurefour.map((item,index)=>(

      <div
        key={index}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >

        <div className="order-2 lg:order-1">

          <img
            src={item.image}
            alt={item.name}
            className="w-full rounded-2xl shadow-lg"
          />

        </div>

        <div className="order-1 lg:order-2">

          <h2 className="text-3xl lg:text-5xl font-bold">
            {item.name}
          </h2>

          <p className="text-gray-600 mt-6 leading-8">
            {item.description}
          </p>

          <button className="mt-8 border-2 border-[#eb4e62] text-[#eb4e62] px-8 py-3 rounded-lg hover:bg-[#eb4e62] hover:text-white transition">
            {item.button}
          </button>

        </div>

      </div>

    ))}

  </div>

</section>

<hr className="max-w-7xl mx-auto border-gray-300"/>


<section className="bg-white py-16">

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {Featurefive.map((item,index)=>(

      <div
        key={index}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >

        <div>

          <h2 className="text-3xl lg:text-5xl font-bold">
            {item.name}
          </h2>

          <p className="text-gray-600 mt-6 leading-8">
            {item.description}
          </p>

          <button className="mt-8 border-2 border-[#eb4e62] text-[#eb4e62] px-8 py-3 rounded-lg hover:bg-[#eb4e62] hover:text-white transition">
            {item.button}
          </button>

        </div>

        <div>

          <img
            src={item.image}
            alt={item.name}
            className="w-full rounded-2xl shadow-lg"
          />

        </div>

      </div>

    ))}

  </div>

</section>


<section className="bg-white py-16">

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
      OUR SUITE OF BUSINESS SOLUTIONS
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

      {BSolutions.map((item, index) => (

        <div
          key={index}
          className="relative overflow-hidden rounded-2xl shadow-lg group"
        >

          <img
            src={item.image}
            alt={item.info}
            className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

          <div className="absolute bottom-6 left-6 right-6">

            <h3 className="text-white text-2xl font-bold">
              {item.info}
            </h3>

          </div>

        </div>

      ))}

    </div>

  </div>

</section>


<section className="py-12 bg-[#f5f5f5]">

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 flex flex-col lg:flex-row justify-between items-center gap-6">

      <div>

        <h2 className="text-2xl lg:text-3xl font-bold">
          Get priority support from entertainment experts.
        </h2>

        <p className="text-gray-600 mt-3">
          Access the complete suite of BookMyShow Corporate Solutions.
        </p>

      </div>

      <button className="bg-[#eb4e62] hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition">

        Access Complete Suite

      </button>

    </div>

  </div>

</section>


<section className="bg-white py-16">

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">

      CAMPAIGNS WE'RE PROUD OF

    </h2>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

      {Campaigns.map((item, index) => (

        <div
          key={index}
          className="bg-white rounded-xl shadow hover:shadow-xl transition duration-300 overflow-hidden"
        >

          <img
            src={item.image}
            alt=""
            className="w-full h-56 object-cover hover:scale-105 transition duration-300"
          />

        </div>

      ))}

    </div>

  </div>

</section>



<section className="bg-white py-16">

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
      OUR PRODUCTS
    </h2>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

      {Products.map((item, index) => (

        <div
          key={index}
          className="relative rounded-2xl overflow-hidden shadow-xl group"
        >

          <img
            src={item.image}
            alt={item.name}
            className="w-full h-[420px] object-cover group-hover:scale-110 transition duration-500"
          />


          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>


          <div className="absolute bottom-8 left-8 right-8">

            <h2 className="text-white text-3xl font-bold">
              {item.name}
            </h2>

            <p className="text-gray-200 mt-4 leading-7">
              {item.description}
            </p>

            <button className="mt-8 bg-white text-[#eb4e62] font-semibold px-8 py-3 rounded-lg hover:bg-[#eb4e62] hover:text-white transition">

              Enquire

            </button>

          </div>

        </div>

      ))}

    </div>

  </div>

</section>


<section className="py-16 bg-[#f5f5f5]">

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="relative rounded-3xl overflow-hidden shadow-2xl">

      <img
        src="https://assets-in.bmscdn.com/webin/corporate/bulk-booking.png"
        alt="Bulk Booking"
        className="w-full h-[260px] md:h-[420px] object-cover"
      />

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="absolute inset-0 flex flex-col lg:flex-row items-center justify-between px-8 lg:px-16 py-10">

        <div className="text-white text-center lg:text-left">

          <p className="text-lg">
            Bulk Booking
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mt-3 leading-tight">

            Exclusive Corporate Experiences

          </h2>

          <p className="text-xl mt-3">
            from BookMyShow
          </p>

        </div>

        <button className="mt-8 lg:mt-0 bg-[#eb4e62] hover:bg-red-700 text-white px-10 py-4 rounded-lg font-semibold transition">

          Explore Now

        </button>

      </div>

    </div>

  </div>

</section>

<section className="bg-white py-16">

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <h2 className="text-4xl font-bold text-center mb-14">
      Frequently Asked Questions
    </h2>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">


      <div className="bg-gray-50 rounded-2xl p-8 shadow">

        <h3 className="text-2xl font-bold mb-8">
          General Queries
        </h3>

        {[
          "How will BookMyShow help grow my business?",
          "Whom should I use the BookMyShow vouchers for?",
          "Why are Incentives important?",
          "Where can customers redeem the vouchers?",
          "What are the flexibility options?",
          "Can I split multiple admits on one voucher?",
          "Can I use vouchers in any city of India?",
          "Who can redeem the voucher?"
        ].map((item, index) => (

          <div
            key={index}
            className="border-b py-5 cursor-pointer hover:text-[#eb4e62] transition"
          >

            {item}

          </div>

        ))}

      </div>


      <div className="bg-gray-50 rounded-2xl p-8 shadow">

        <h3 className="text-2xl font-bold mb-8">
          Logistic Queries
        </h3>

        {[
          "Where can one redeem a Gift Voucher?",
          "Where can one redeem the WinPin voucher?",
          "Where can one redeem the Movie Pack voucher?",
          "For concerns & escalations whom do I contact?"
        ].map((item, index) => (

          <div
            key={index}
            className="border-b py-5 cursor-pointer hover:text-[#eb4e62] transition"
          >

            {item}

          </div>

        ))}

        <h3 className="text-2xl font-bold mt-12 mb-8">
          Payment Queries
        </h3>

        {[
          "What is the mode of payment?",
          "How do I place a large corporate order?"
        ].map((item, index) => (

          <div
            key={index}
            className="border-b py-5 cursor-pointer hover:text-[#eb4e62] transition"
          >

            {item}

          </div>

        ))}

      </div>

    </div>

  </div>

</section>


<section className="bg-white border-t">

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 text-sm text-gray-500">

    Home / Voucher

  </div>

</section>


<section className="bg-[#f5f5f5] py-14">

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <h3 className="text-2xl font-bold mb-6">

      Privacy Note

    </h3>

    <p className="text-gray-600 leading-8">

      By using BookMyShow, you agree to the Privacy Policy governing
      your access and use of the platform. If you do not agree with
      the Privacy Policy, please refrain from sharing your personal
      information and discontinue using the website.

    </p>

  </div>

</section>



</div>
  );
};

export default Corporates;
