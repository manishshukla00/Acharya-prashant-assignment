import React from "react";
import { AiOutlineRight, AiOutlineArrowLeft } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

const Hero = () => {
  return (
    <>
      <div className="hidden md:flex items-center p-4">
        <span className="text-xs">Home</span>
        <AiOutlineRight className="text-xs px-2" />
        <span className="text-xs pl-2">संतवाणी</span>
      </div>
      <div className="flex p-4 items-center font-bold">
        <AiOutlineArrowLeft className="text-orange-400 md:hidden" />
        <h2 className="text-2xl px-2">संतवाणी</h2>
      </div>
      <div className="w-full flex md:flex-row flex-col gap-2 p-4">
        <div className="md:w-[40%] h-auto px-2">
          <img
            className="w-full"
            src="https://cimg.acharyaprashant.org/images/img-4337ee73-d8a3-4c8b-951b-d09a5a6468d3/10/image.jpg"
            alt="Sant kabir"
          />
        </div>
        <div className="md:w-[60%] items-start">
          <h2 className="font-bold my-2">संतों की सीख पर आधारित श्रृंखला</h2>
          <p className="text-justify pr-4">
            जब-जब समाज में धर्म के प्रति अनादर बढ़ा है और आम-आदमी की चेतना को
            पाखंड ने घेरा है, तब-तब संतों ने अपने वचनों से हमारे मन को शीतलता
            प्रदान की है और सामाजिक चेतना को शुद्ध किया है। इस श्रृंखला में
            आचार्य जी ने संत कबीरदास, तुलसीदास, पलटूदास, दादू दयाल, सहजोबाई,
            मलूकदास, दरियादास, रविदास आदि संतों की वाणी पर चर्चा की है। जानिए
            उनके वचनों की जीवन में सार्थकता को आचार्य प्रशांत के साथ इस आसान
            वीडियो कोर्स में।
          </p>
        </div>
      </div>
      <div className="hidden md:flex flex-col p-4">
        <span className="text-sm pl-2">इस श्रृंखला को साझा करें:</span>
        <div className="flex items-center gap-8 py-4">
          <FaFacebookF color="#1877F2" size={26} />
          <FaTwitter color="#1DA1F2" size={26} />
          <FaWhatsapp color="#075E54" size={26} />
          <FaLinkedinIn color="#0077B5" size={26} />
        </div>
      </div>
    </>
  );
};

export default Hero;
