import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { FaPinterest } from "react-icons/fa6";
import { GrLinkedin } from "react-icons/gr";





const Footer = () => {
  return (
    <>
        <div className='bg-[#333333] py-10'>
            <div className='flex mx-30 py-10'>
                <img src="https://assets-in.bmscdn.com/webin/common/icons/hut.svg" alt="" />
                <div className='font-bold text-white pt-3 ps-5'>List your Show</div>
                <div className='font-normal ps-5 text-white pt-3'>Got a show, event, activity or a great experience? Partner with us & get listed on BookMyShow</div>
                <div className='bg-[#dc354b] text-white font-bold rounded-sm p-3 ms-70'>Contact today!</div>
            </div>
            <div className='bg-[#404040] px-30 py-10 grid grid-cols-3'>
                <div className='text-gray-300 text-sm'>
                    24/7 CUSTOMER CARE
                </div>
                <div className='text-gray-300 text-sm'>
                    RESEND BOOKING CONFIRMATION
                </div>
                <div className='text-gray-300 text-sm'>
                    SUBSCRITE TO THE NEWSLETTER
                </div>
            </div>
            <div className='px-30 py-10'>    
                <div className='text-[#928f8f] text-sm'>MOVIES NOW SHOWING IN AHMEDABAD</div>
                <div className='text-sm text-gray-300 py-5'>Cocktail 2 | Jindagi Once More | Toy Story 5 | Hai Jawani Toh Ishq Hona Hai | Haunted Echoes of the Past | Badhu Alright Che | Obsession | Governor | Bharat Bhhagya Viddhaata | Peddi</div>
                <div className='text-[#928f8f] text-sm'>UPCOMING MOVIES PER WEEK</div>
                <div className='text-sm text-gray-300 py-5'>Upcoming Movies Today | Upcoming Movies Tomorrow | Upcoming Movies This Weekend</div>
                <div className='text-[#928f8f] text-sm'>MOVIES BY GENRE</div>
                <div className='text-sm text-gray-300 py-5'>Drama Movies | Thriller Movies | Comedy Movies | Action Movies | Family Movies | Romantic Movies | Adventure Movies | Horror Movies | Sci-Fi Movies | Musical Movies</div>
                <div className='text-[#928f8f] text-sm'>MOVIES BY LANGUAGE</div>
                <div className='text-sm text-gray-300 py-5'>Movies in English | Movies in Hindi | Movies in Gujarati | Movies in Telugu | Movies in Tamil | Movies in Malayalam | Movies in Kannada | Movies in Sindhi | Movies in Bengali | Movies in Flemish</div>
                <div className='text-[#928f8f] text-sm'>SPORTS EVENTS IN AHMEDABAD</div>
                <div className='text-sm text-gray-300 py-5'>Bowling | Mixed Martial Arts | Basketball | Cricket | Horse Race | Sailing | Chess| Cycling | E Sports | Weight Lifting</div>
                <div className='text-[#928f8f] text-sm'>EVENTS IN TOP CITIES</div>
                <div className='text-sm text-gray-300 py-5'>Events in Mumbai | Events in Delhi-NCR | Events in Chennai | Events in Bengaluru | Events in Hyderabad | Events in Pune | Events in Ahmedabad | Events in Kolkata | Events in Kochi</div>
                <div className='text-[#928f8f] text-sm'>CINEMAS IN TOP CITIES</div>
                <div className='text-sm text-gray-300 py-5'>Cinemas in Mumbai | Cinemas in Delhi-NCR | Cinemas in Chennai | Cinemas in Bengaluru | Cinemas in Hyderabad | Cinemas in Pune | Cinemas in Ahmedabad | Cinemas in Kolkata | Cinemas in Kochi</div>
                <div className='text-[#928f8f] text-sm'>PLAYS IN TOP CITIES</div>
                <div className='text-sm text-gray-300 py-5'>Plays in Mumbai | Plays in Delhi-NCR | Plays in Chennai | Plays in Bengaluru | Plays in Hyderabad | Plays in Pune | Plays in Ahmedabad | Plays in Kolkata | Plays in Kochi</div>
                <div className='text-[#928f8f] text-sm'>ACTIVITIES IN TOP CITIES</div>
                <div className='text-sm text-gray-300 py-5'>Activities in Mumbai | Activities in Delhi-NCR | Activities in Chennai | Activities in Bengaluru | Activities in Hyderabad | Activities in Pune | Activities in Ahmedabad | Activities in Kolkata | Activities in Kochi</div>
                <div className='text-[#928f8f] text-sm'>MOVIES NOW SHOWING</div>
                <div className='text-sm text-gray-300 py-5'>Cocktail 2 | Maa Inti Bangaaram | Toy Story 5 | Nooru Sami | Main Vaapas Aaunga | Peddi | Jindagi Once More | Haunted Echoes of the Past | Obsession | Tumbadchi Manjula</div>
                <div className='text-[#928f8f] text-sm'>COUNTRIES</div>
                <div className='text-sm text-gray-300 py-5'>Indonesia | Singapore | Sri Lanka | West Indies</div>
                <div className='text-[#928f8f] text-sm'>HELP</div>
                <div className='text-sm text-gray-300 py-5'>About Us | Contact Us | Current Opening | Press Release | Press Coverage | FAQs | Terms and Conditions | Privacy Policy</div>
                <div className='text-[#928f8f] text-sm'>BOOKMYSHOW EXCLUSIVES</div>
                <div className='text-sm text-gray-300 py-5'>Lollapalooza India | BookAChange | Corporate Vouchers | Gift Cards | List My Show | Offers | Stream | Trailers</div>
            </div>
            <div className='grid grid-cols-3'>
                <div className='text-[#928f8f] pt-8'><hr/></div>
                <div className='ps-50'>
                    <img
                    src="https://www.livelaw.in/h-upload/2022/06/23/750x450_423020-book-my-show.jpg"
                    alt="logo"
                    className="w-[80px] md:w-[100px]"></img>
                </div>
                <div className='text-[#928f8f] pt-8'><hr /></div>
            </div>
            <div className='flex text-white py-10 px-170'>
                <FaFacebook /><FaInstagramSquare className='mx-5' /><IoLogoYoutube /><FaPinterest className='mx-5'/><GrLinkedin />
            </div>
            <div className='text-center text-sm text-[#928f8f] mx-30'>The content and images used on this site are copyright protected and copyrights vests with the respective owners. The usage of the content and images on this website is intended to promote the works and no endorsement of the artist shall be implied. Unauthorized use is prohibited and punishable by law.</div>
        </div>
    </>
  )
}

export default Footer