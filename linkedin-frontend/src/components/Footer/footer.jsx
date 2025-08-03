import React from "react";

const Footer = () => {
  return (
    <div className="w-[100%] bg-gray-200 flex justify-center">
      <div className="md:p-3 w-[100%] flex flex-col items-center py-4">
        <div className="flex gap-1 items-center cursor-pointer">
          <h3 className="text-blue-800 font-bold text-xl">Linked</h3>
          <img
            src="/src/assets/linkedin.png"
            alt="LinkedInLogo"
            className="w-6 h-6"
          />
        </div>
        <div className="text-sm">@Copyright 2025</div>
      </div>
    </div>
  );
};

export default Footer;
