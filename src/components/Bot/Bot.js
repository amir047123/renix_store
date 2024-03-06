import React from 'react';
import {
    FaFacebook,
    FaTwitter,
    FaLinkedin,
    FaInstagram,
    FaWhatsapp,
  } from "react-icons/fa";
const Bot = () => {
    const handleWhatsAppClick = () => {
        const phoneNumber = encodeURIComponent("01884442022");
        const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
        window.open(whatsappURL, "_blank");
      };
    return (
        <div>
              <div className="fixed bottom-5 sm:right-8 right-4 z-[999] cursor-pointer text-white text-4xl bg-primary w-16 h-16 flex items-center justify-center rounded-full animate-bounce">
          <a
            href="https://api.whatsapp.com/send?phone=8801884442022"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp
              className="text-white"
              name="chatbubble-ellipses"
            ></FaWhatsapp>
          </a>
        </div>
        </div>
    );
};

export default Bot;