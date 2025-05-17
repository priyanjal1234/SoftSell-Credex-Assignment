import React from "react";

const WorkingCard = ({step,index}) => {
  return (
    <div
      key={index}
      className={`bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center relative transition-all duration-700 transform translate-y-0 opacity-100 ${step.delay} flex flex-col items-center`}
    >
      <div className="mx-auto w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-blue-100 rounded-full mb-4 sm:mb-6 relative z-10">
        {step.icon}
      </div>
      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
        {step.title}
      </h3>
      <p className="text-gray-600 text-sm sm:text-base">{step.description}</p>
      {/* Step number: position absolute for md+, static for mobile */}
      <div
        className={`flex items-center justify-center font-bold text-lg w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-600 text-white
                ${index === 0 ? "md:absolute md:-top-3 md:-left-3" : ""}
                ${
                  index === 1
                    ? "md:absolute md:-top-3 md:left-1/2 md:-translate-x-1/2"
                    : ""
                }
                ${index === 2 ? "md:absolute md:-top-3 md:-right-3" : ""}
                md:block hidden
              `}
      >
        {index + 1}
      </div>
      {/* Show step number statically below icon on mobile */}
      <div className="md:hidden mt-2 mb-2 flex items-center justify-center font-bold text-lg w-8 h-8 rounded-full bg-blue-600 text-white">
        {index + 1}
      </div>
    </div>
  );
};

export default WorkingCard;
