  import React from 'react'
  import { Link } from 'react-router-dom'
  import { PAvailable, POnline } from '../assets/Asserts'

  const PhysicalCards = () => {
    return (
  <div className="bg-[#f5f5f5] min-h-screen">

    <hr className="border-gray-300" />


    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

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

    </section>


    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">

      <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">

        <h1 className="text-3xl md:text-4xl font-bold text-center">

          Introducing Physical Gift Cards

        </h1>

        <p className="text-center text-gray-500 mt-6">

          Gift your loved ones unforgettable experiences with
          BookMyShow Physical Gift Cards. Perfect for birthdays,
          anniversaries, festivals and every special occasion.

        </p>

        <p className="text-center text-gray-500 leading-8 mt-1">

          Purchase a BookMyShow Gift Card from stores across India
          or order online and let someone enjoy movies, events,
          sports, concerts and much more.

        </p>


        <div className="mt-14">

          <h2 className="text-2xl font-bold text-center">

            Available at Stores Near You

          </h2>

        </div>


        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mt-10">

        {PAvailable.map((store, index) => (

          <div
            key={index}
            className="flex items-center justify-center bg-gray-50 rounded-xl border p-6 hover:shadow-lg transition"
          >

            <img
              src={store.image}
              alt="Store"
              className="h-12 object-contain"
            />

          </div>

        ))}

      </div>


      <div className="mt-20">

        <h2 className="text-2xl font-bold text-center">

          Or Order Online From

        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 mt-10">

          {POnline.map((partner, index) => (

            <div
              key={index}
              className="flex items-center justify-center bg-gray-50 rounded-xl border p-6 hover:shadow-lg transition"
            >

              <img
                src={partner.image}
                alt="Online Partner"
                className="h-12 object-contain"
              />

            </div>

          ))}

        </div>

      </div>


      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-20">

        <div>

          <img
            src="https://assets-in.bmscdn.com/webin/giftcards/giftcard.png"
            alt="Gift Card"
            className="w-full max-w-md mx-auto"
          />

        </div>

        <div>

          <h2 className="text-3xl font-bold">

            As Easy As Paying Cash

          </h2>

          <p className="text-gray-500  mt-6">

            BookMyShow Physical Gift Cards can be redeemed anytime
            through the BookMyShow website or mobile application.

          </p>

          <p className="text-gray-500  mt-4">

            Use them for booking Movies, Plays, Sports, Events,
            Concerts and other entertainment experiences across India.

          </p>

          <button className="mt-8 bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold transition">

            Buy Gift Card

          </button>

        </div>

      </div>

    </div>

  </section>

 
<section className="bg-[#f5f5f5] py-14">

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


<section className="bg-white py-16">

  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

    <h2 className="text-3xl font-bold">

      BookMyShow Gift Cards

    </h2>

    <p className="text-gray-500 mt-6">

      Gift your family and friends an unforgettable entertainment
      experience with BookMyShow Gift Cards. They are perfect for
      birthdays, anniversaries, festivals, corporate gifting and every
      special celebration.

    </p>

    <p className="text-gray-500 mt-5">

      Redeem your Gift Card while making a booking by selecting the
      Gift Voucher option during checkout and entering the Gift Card
      code.

    </p>

  </div>

</section>


<section className="bg-white pb-16">

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="border rounded-2xl shadow-sm p-8">

      <h2 className="text-2xl font-bold mb-8">

        Some Useful Tips While Using Gift Cards

      </h2>

      <ul className="space-y-5 list-disc pl-6 text-gray-500 ">

        <li>
          Gift Cards can be redeemed for Movies, Events, Plays,
          Concerts and Sports available on BookMyShow.
        </li>

        <li>
          Gift Cards remain valid for twelve months from the date of
          purchase.
        </li>

        <li>
          Multiple Gift Cards can be used together in a single booking.
        </li>

        <li>
          Gift Cards may be used multiple times until the available
          balance becomes zero.
        </li>

        <li>
          Any remaining balance stays available until the Gift Card
          expires.
        </li>

        <li>
          Gift Cards are non-refundable and cannot be exchanged for
          cash.

        </li>

      </ul>

    </div>

  </div>

</section>


<section className="bg-[#f5f5f5] py-16">

  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

    <h2 className="text-3xl font-bold text-center">

      Experience The Freedom With BookMyShow Gift Cards

    </h2>

    <p className="text-gray-500  mt-8 text-center">

      Looking for the perfect gift? BookMyShow Gift Cards make gifting
      easy and memorable. Whether it's a birthday, anniversary,
      festival, wedding, corporate celebration or any other occasion,
      these cards let your loved ones enjoy movies, concerts, sports,
      comedy shows, plays and many more experiences.

    </p>

    <p className="text-gray-500  mt-6 text-center">

      Available in multiple designs and price ranges, Physical Gift
      Cards can be purchased from retail stores across India or online.
      They offer flexibility, convenience and the freedom to choose any
      entertainment experience available on BookMyShow.

    </p>

    <p className="text-gray-500  mt-6 text-center">

      Share happiness with a thoughtful gift that creates lasting
      memories and unforgettable entertainment moments.

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


<section className="bg-[#f5f5f5] py-16">

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <h2 className="text-2xl font-bold mb-6">

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

export default PhysicalCards;