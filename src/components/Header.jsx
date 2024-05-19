import React, { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Img from "../assets/logo.png";

const Header = () => {
  const [search, setSearch] = useState(false);
  return (
    <>
      {/* header menu part one */}
      <div className="w-full h-auto flex justify-between bg-orange-700 p-2 px-6">
        <div className="w-[60%] h-auto flex items-center gap-4">
          <img
            className="w-[31px]"
            src="https://acharyaprashant.org/images/ic_favicon.png"
            alt="Acharya prashant"
          />
          <ul className="hidden text-sm md:flex justify-center items-center text-white gap-8">
            <li>होम</li>
            <li className="flex justify-center items-center">
              लाइव सत्र <MdArrowDropDown size={31} />
            </li>
            <li>वीडियो श्रंखलाये</li>
            <li>पुस्तकें</li>
            <li>लेख</li>
            <li className="flex justify-center items-center">
              अमंत्रित करे <MdArrowDropDown size={31} />
            </li>
            <li>प्रेस प्रकाशिनी</li>
            <li>करीयर</li>
            <li>योगदान करे</li>
          </ul>
        </div>
        <div className="flex gap-4 justify-center items-center text-white">
          <span className="block md:hidden text-sm border border-white font-medium px-2 rounded-md">
            योगदान करे
          </span>
          <div className="flex justify-center items-center">
            <span className="text-sm border border-white flex justify-center items-center font-medium px-1 rounded-md">
              HI
            </span>
            <MdArrowDropDown size={31} />
          </div>
          <span className="hidden md:block">
            <IoCallOutline className="text-2xl" />
          </span>
          <span className="flex items-center justify-center">
            <RxHamburgerMenu className="text-2xl" />
          </span>
          <span className="hidden text-xs md:block">मेन्यू</span>
        </div>
      </div>
      {/* header menu part two */}
      <div className="w-full h-auto bg-black/80 flex justify-between md:justify-center items-center gap-4 p-4">
        <div className="flex justify-center items-center">
          <div className="w-4 h-4 bg-red-600 border border-white rounded-full" />
          <p className="text-white text-sm font-semibold px-2">
            आचार्य प्रशांत आपके बेहतर भविष्य की लड़ाई लड़ रहे हैं
          </p>
        </div>
        <div>
          <button className="text-white text-sm border border-white px-2 rounded-md">
            अपना कर्तव्य निभाये
          </button>
        </div>
      </div>
      {/* header menu part three */}
      {search ? (
        <div className="flex justify-center items-center p-2">
          <AiOutlineArrowLeft
            className="ml-2"
            onClick={() => setSearch(!search)}
            size={20}
          />
          <input
            className="text-orange-400 w-full focus:border-none p-2"
            type="text"
          />
        </div>
      ) : (
        <div className="w-full h-auto flex justify-between border-b items-center py-2">
          <div className="flex justify-between items-center px-4">
            {/* <h2>Video Series</h2> */}
            <img className="w-20" src={Img} alt="logo" />
            <span className="text-xs p-3 border flex justify-center items-center font-medium ml-4 px-1 rounded-md">
              सभी
              <MdArrowDropDown size={20} />
            </span>
            <input
              className="text-orange-400 w-[20rem] hidden md:block p-2 focus:border-none border"
              type="text"
              placeholder="वीडियो श्रंखलाये खोजे"
            />
            <span className="border-t border-r border-b bg-orange-200 p-3">
              <AiOutlineSearch onClick={() => setSearch(!search)} size={20} />
            </span>
          </div>
          <div className="mx-4">
            <button className="bg-orange-400 text-white rounded-md px-2 py-1 text-sm">
              लॉगिन करे
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
