import React from 'react'
import { Offer } from '../assets/Asserts'
import { IoIosArrowForward } from "react-icons/io";


const Offers = () => {
  return (
  <div className="bg-[#f2f5f9] min-h-screen">

    <hr className="border-gray-300" />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">


        <div className="lg:col-span-1">

          <div className="bg-white rounded-xl shadow border border-gray-400 sticky top-5">


            <div className="p-5">

              <input
                type="text"
                placeholder="Search by card / bank / offer name"
                className="w-full border rounded-lg bg-[#f5f5f5] p-3 text-sm outline-none focus:ring-2 focus:ring-gray-400"
              />

            </div>


            <div className="">

              {[
                "Credit Card",
                "Debit Card",
                "UPI",
                "Cinema",
                "Wallet",
                "Pay Later",
              ].map((item, index) => (

                <button
                  key={index}
                  className="w-full text-left px-6 py-4 border-t border-gray-300 hover:bg-red-50 hover:text-red-600 transition"
                >
                  {item}
                </button>

              ))}

            </div>

          </div>

        </div>


        <div className="lg:col-span-3">


          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">

            <div>

              <h1 className="text-3xl lg:text-4xl font-bold">

                Offers for You

              </h1>

              <p className="text-gray-500 mt-2">

                Save more on movie tickets, events and entertainment.

              </p>

            </div>

            <div className="mt-4 sm:mt-0">

              <button className="border border-red-500 text-red-500 px-6 py-3 rounded-lg hover:bg-red-500 hover:text-white transition">

                Explore All Offers

              </button>

            </div>

          </div>


          <div className="grid grid-cols-2 gap-6">

            {Offer.map((offer, index) => (

              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition duration-300 overflow-hidden"
              >


                <div className="flex items-center gap-4 p-5">

                  <img
                    src={offer.image}
                    alt={offer.name}
                    className="w-14 h-14 rounded-lg object-contain border p-2"
                  />

                  <h3 className="font-semibold text-base">
                    {offer.name}
                  </h3>

                </div>


                <div className="px-5">

                  <h2 className="font-bold text-lg leading-7 min-h-[70px]">
                    {offer.info}
                  </h2>

                  <p className="text-sm text-gray-500 mt-4">
                    Processing fee applicable
                  </p>

                </div>

                <hr className="my-5" />


                <div className="flex items-center justify-between px-5 pb-5">

                  <button className="text-red-500 font-semibold flex items-center gap-2 hover:gap-3 transition-all">

                    View Details

                    <IoIosArrowForward />

                  </button>

                  <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm transition">

                    Apply

                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>


    <section className="bg-[#f2f5f9] py-16">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div>

          <h2 className="text-3xl font-bold text-gray-800">
            A Plethora of Offers and Discounts at BookMyShow!
          </h2>

          <p className="text-gray-500 leading-8 mt-5">
            If you're searching for exciting discounts on movie tickets,
            events and entertainment, BookMyShow has plenty of offers
            from leading banks, wallets, UPI providers and cinema
            partners. Discover exclusive deals and save more every time
            you book.
          </p>

        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

          <div className="bg-white rounded-xl shadow p-6">

            <h3 className="text-xl font-semibold mb-4">
              Card Offers
            </h3>

            <p className="text-gray-500 leading-7 text-sm">
              Save instantly using credit and debit cards from leading
              banks like HDFC, ICICI, SBI, Axis, Kotak, IndusInd,
              Citibank and many more.
            </p>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <h3 className="text-xl font-semibold mb-4">
              Wallet Offers
            </h3>

            <p className="text-gray-500 leading-7 text-sm">
              Enjoy cashback and instant discounts using wallets like
              Paytm, Amazon Pay, PhonePe, Mobikwik and other digital
              payment partners.
            </p>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <h3 className="text-xl font-semibold mb-4">
              Cinema Offers
            </h3>

            <p className="text-gray-500 leading-7 text-sm">
              Exclusive offers from PVR, INOX, Cinepolis and other
              cinema partners to make your movie experience more
              affordable.
            </p>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <h3 className="text-xl font-semibold mb-4">
              Telecom Offers
            </h3>

            <p className="text-gray-500 leading-7 text-sm">
              Selected telecom users can enjoy exciting cashback and
              ticket discounts through exclusive promotional campaigns.
            </p>

          </div>

        </div>

        {/* Bottom Text */}

        <div className="mt-14 text-center">

          <p className="text-gray-500 leading-8">

            BookMyShow offers are designed to help you save more while
            enjoying your favourite movies, events and experiences.
            Please read the Terms & Conditions before applying any
            offer code.

          </p>

        </div>

      </div>

    </section>

    <section className="bg-white border-t">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 text-sm text-gray-500">

        Home / Offers

      </div>

    </section>


    <section className="bg-[#f5f5f5] py-16">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Privacy Note
        </h2>

        <p className="text-gray-500 leading-8">

          By using <span className="font-semibold">www.bookmyshow.com</span>,
          you agree to the Privacy Policy governing your access and use of
          BookMyShow services. If you do not agree with the Privacy Policy,
          please refrain from sharing your personal information and discontinue
          using the website.

        </p>

      </div>

    </section>

  </div>
);
};

export default Offers;
