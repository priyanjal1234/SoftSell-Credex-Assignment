import React from "react";

const AdvantageCard = ({benefit,index}) => {
  return (
    <div
      key={index}
      className={`bg-white p-5 sm:p-6 rounded-xl shadow-sm border border-gray-100 transition-all duration-700 transform translate-y-0 opacity-100 ${benefit.delay} flex flex-col items-center text-center`}
    >
      <div className="bg-blue-100 rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mb-4 sm:mb-5">
        {benefit.icon}
      </div>
      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
        {benefit.title}
      </h3>
      <p className="text-gray-600 text-sm sm:text-base">
        {benefit.description}
      </p>
    </div>
  );
};

export default AdvantageCard;
