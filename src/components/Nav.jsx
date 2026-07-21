import React from "react";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 px-4 md:px-10 py-4">
        
        <div className="flex justify-center md:justify-start">
          <Link to='/'>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCQRljVyfj3UiMHupL1q-KarIA2U3vncvyxw&s"
              alt="logo"
              className="w-[80px] md:w-[100px]"
            />
          </Link>
        </div>

        <div className="border flex items-center rounded-md overflow-hidden">
          <span className="p-3 text-2xl border-r">
            <CiSearch />
          </span>
          <input
            type="text"
            placeholder="Search for Movies, Events, Plays, Sports and Activities"
            className="w-full p-3 outline-none text-sm"
          />
        </div>

        <div className="hidden md:flex justify-end">
          <button className="bg-red-500 text-white px-4 py-2 rounded">
            Sign In
          </button>
        </div>
      </div>

      <div className="bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-10 py-3">
          
          <ul className="flex flex-wrap justify-center gap-4 text-gray-600">
            <Link to='/movies'><li>Movies</li></Link>
            <Link to='/stream'><li>Stream</li></Link>
            <Link to='/events'><li>Events</li></Link>
            <Link to='/plays'><li>Plays</li></Link>
            <li>Sports</li>
            <Link to='/activities'><li>Activities</li></Link>
          </ul>

          <ul className="flex flex-wrap justify-center gap-4 text-gray-600 text-sm mt-2 md:mt-0">
            <Link to="/listyourshow"><li>ListYourShow</li></Link>
            <Link to="/corporates"><li>Corporates</li></Link>
            <Link to='/offers'><li>Offers</li></Link>
            <Link to='/ecards'><li>Gift Cards</li></Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Nav;