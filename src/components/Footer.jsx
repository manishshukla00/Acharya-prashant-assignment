import React from "react";
import { BiLogoFacebook, BiLogoTwitter } from "react-icons/bi";
import { FaYoutube, FaWikipediaW } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import Img1 from "../assets/play.png";
import Img2 from "../assets/apple.png";

const Footer = () => {
  return (
    <>
      <div className="w-full h-auto flex flex-col justify-center items-center text-gray-400 bg-slate-900 p-4">
        <div className="w-full md:max-w-7xl m-auto grid md:grid-cols-6 p-4 gap-4 text-sm">
          <div className="text-gray-200 flex flex-col items-start gap-4">
            <h1 className="font-bold text-gray-100">सजीव सत्र</h1>
            <span>गीता समागम</span>
            <span>Vedanta: Basics to Classics</span>
          </div>
          <div className="text-gray-200 flex flex-col items-start gap-4">
            <h1 className="font-bold text-gray-100">बोध साहित्य</h1>
            <span>वीडियो श्रृंखलाएँ</span>
            <span>पुस्तकें</span>
            <span>लेख</span>
            <span>ए.पी. सर्किल</span>
          </div>
          <div className="text-gray-200 flex flex-col items-start gap-4">
            <h1 className="font-bold text-gray-100">अधिक जाने</h1>
            <span>आचार्य प्रशांत के बारे में</span>
            <span>उनको आमंत्रित करें</span>
            <span>उनके संग साक्षात्कार</span>
            <span>घर घर उपनिषद</span>
            <span>मीडिया व प्रेस प्रकाशनी</span>
          </div>
          <div className="text-gray-200 flex flex-col items-start gap-4">
            <h1 className="font-bold text-gray-100">सोशल मीडिया</h1>
            <h2>अँग्रेजी के लिये</h2>
            <div className="text-2xl flex gap-2">
              <FaYoutube />
              <BiLogoTwitter />
              <BiLogoFacebook />
              <AiOutlineInstagram />
              <FaWikipediaW />
            </div>
            <h2>हिंदी के लिये</h2>
            <div className="text-2xl flex gap-4">
              <FaYoutube />
              <BiLogoTwitter />
              <BiLogoFacebook />
              <AiOutlineInstagram />
              <FaWikipediaW />
            </div>
          </div>
          <div className="text-gray-200 flex flex-col items-start">
            <h1 className="font-bold text-gray-100">
              डाउनलोड आचार्य प्रशांत ऐप
            </h1>
            <div className="flex flex-col items-start">
              <img src={Img1} width={130} alt="Get it on Google Play" />
              <img src={Img2} width={130} alt="Get it on Google Play" />
            </div>
          </div>
          <div className="text-gray-200 flex flex-col items-start gap-4">
            <h1 className="font-bold text-gray-100">सम्पर्क करें</h1>
            <span className="flex justify-center items-center gap-2">
              <CiMail /> support@advait.org.in
            </span>
            <span className="flex justify-center items-center gap-2">
              <FaWhatsapp /> +91 9650585100
            </span>
            <span className="flex justify-center items-center gap-4">
              <IoMdCall /> +91 9650585100
            </span>
            {/* <button className="w-[50%] md:w-full border border-white rounded-lg py-1">
              Fill Form to Connect
            </button> */}
          </div>
        </div>
        <div className="w-3/5 mt-4 border-b-2 border-gray-400"></div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-center text-xs text-gray-400 m-auto md:p-8 p-4 gap-4">
          <p>कॉपीराइट © 2022 प्रशांतअद्वैत फाउंडेशन नियम एवं शर्तें</p>
          <p>नियम एवं शर्तें | गोपनीयता नीति | अंडरटेकिंग</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
