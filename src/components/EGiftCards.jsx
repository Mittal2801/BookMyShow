import React from 'react'
import { ECards } from '../assets/Asserts'
import { Link } from 'react-router-dom'

const EGiftCards = () => {
  return (
  <div className="bg-[#f5f5f5] min-h-screen">

    <hr className="border-gray-300" />


    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

        <Link to="/ecards">

          <button className="w-full border rounded-xl py-4 bg-gray-500 text-white font-semibold hover:bg-gray-900 transition">

            E-GIFT CARDS

          </button>

        </Link>

        <Link to="/pcards">

          <button className="w-full border rounded-xl py-4 bg-gray-500 hover:bg-gray-900 text-white font-semibold transition">

            PHYSICAL GIFT CARDS

          </button>

        </Link>

      </div>

    </div>

    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">

      <div className="bg-white rounded-2xl shadow-lg p-8">

        <h2 className="text-3xl font-bold text-center">

          Pick a Card From Our Collection

        </h2>

        <p className="text-center text-gray-500 mt-3">

          Choose a beautiful gift card for every special occasion.

        </p>


        <div className="flex flex-wrap justify-center gap-4 mt-10">

          <button className="px-10 py-3 rounded-full bg-red-500 text-white font-medium hover:bg-red-600 transition">

            All

          </button>

          <button className="px-10 py-3 rounded-full border hover:bg-red-50 transition">

            Entertaining Gifts

          </button>

          <button className="px-10 py-3 rounded-full border hover:bg-red-50 transition">

            Bestie Gifts

          </button>

          <button className="px-10 py-3 rounded-full border hover:bg-red-50 transition">

            Made with Love

          </button>

        </div>


        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">

        {ECards.map((card, index) => (

          <div
            key={index}
            className="group cursor-pointer"
          >

            <div className="overflow-hidden rounded-2xl shadow bg-white">

              <img
                src={card.image}
                alt="Gift Card"
                className="w-full object-cover group-hover:scale-110 transition duration-500"
              />

            </div>

          </div>

        ))}

      </div>

    </div>

  </section>


  <section className="bg-[#f5f5f5] py-12">

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

        <button className="bg-white border rounded-xl py-5 text-red-500 font-semibold hover:bg-red-500 hover:text-white transition">

          Terms & Conditions

        </button>

        <button className="bg-white border rounded-xl py-5 text-red-500 font-semibold hover:bg-red-500 hover:text-white transition">

          Need Help?

        </button>

        <button className="bg-white border rounded-xl py-5 text-red-500 font-semibold hover:bg-red-500 hover:text-white transition">

          Check Gift Card Balance

        </button>

      </div>

    </div>

  </section>


  <section className="bg-white py-10">

    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

      <h2 className="text-3xl font-bold">

        BookMyShow Gift Cards

      </h2>

      <p className="text-gray-500 mt-6">

        Gift unforgettable entertainment experiences with
        BookMyShow Gift Cards. Whether it's a birthday,
        anniversary, festival or any special occasion,
        surprise your loved ones with movies, events,
        concerts, sports and much more.

      </p>

      <p className="text-gray-500 mt-5">

        Redeem your gift card easily while booking tickets.
        Simply choose the Gift Voucher option on the payment
        page and enter your Gift Card code.

      </p>

    </div>

  </section>


  <section className="bg-white py-16">

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <div className="border rounded-2xl shadow-sm p-8">

        <h2 className="text-2xl font-bold mb-8">

          Some Useful Tips While Using Gift Cards

        </h2>

        <ul className="space-y-5 text-gray-500  list-disc pl-6">

          <li>
            Gift Cards can be redeemed for Movies, Events, Plays,
            Sports and Activities available on BookMyShow.
          </li>

          <li>
            Every Gift Card remains valid for twelve months from the
            date of purchase or delivery.
          </li>

          <li>
            Multiple Gift Cards can be used together in a single
            transaction.
          </li>

          <li>
            A Gift Card can be used multiple times until the available
            balance becomes zero.
          </li>

          <li>
            Any remaining balance will stay in the Gift Card and can be
            used for future bookings before expiry.
          </li>

          <li>
            Gift Cards cannot be exchanged for cash or refunded after
            purchase.
          </li>

        </ul>

      </div>

    </div>

  </section>


  <section className="bg-[#f5f5f5] py-16">

    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

      <h2 className="text-3xl font-bold text-center">

        Experience the Freedom with BookMyShow Gift Cards

      </h2>

      <p className="text-gray-500 mt-8 text-center">

        Looking for the perfect gift for birthdays, anniversaries,
        festivals or special occasions? BookMyShow Gift Cards make
        gifting simple and memorable. They allow your loved ones to
        enjoy movies, concerts, sports, comedy shows, plays and many
        other entertainment experiences whenever they choose.

      </p>

      <p className="text-gray-500 mt-6 text-center">

        With beautiful designs for every occasion and multiple price
        options, BookMyShow Gift Cards are ideal for family, friends,
        colleagues and corporate gifting. Whether you're saying thank
        you, congratulations, sorry or simply celebrating together,
        there's a perfect gift card waiting for you.

      </p>

      <p className="text-gray-500 mt-6 text-center">

        Redeem Gift Cards easily during checkout and use them across
        BookMyShow bookings. Enjoy flexibility, convenience and the joy
        of entertainment with one thoughtful gift.

      </p>

    </div>

  </section>



  <section className="bg-white border-t">

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">

      <p className="text-sm text-gray-500">
        Home / Gift Cards
      </p>

    </div>

  </section>


  <section className="bg-[#f5f5f5] py-10">

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Privacy Note
      </h2>

      <p className="text-gray-500 leading-8">

        By using <span className="font-semibold">www.bookmyshow.com</span>,
        you agree to the Privacy Policy governing your access to and use
        of BookMyShow services. If you do not agree with the Privacy
        Policy, please refrain from sharing your personal information
        and discontinue using the website.

      </p>

    </div>

  </section>


  
</div>
);
};

export default EGiftCards;