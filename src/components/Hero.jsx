import React from "react";

const Hero = () => {
  return (
    <section className="w-full heroSection pt-20 md:pt-28 flex flex-col-reverse md:flex-row items-center md:justify-around px-4 md:px-0">
      <div className="w-full md:w-1/2 flex flex-col items-start">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold">
          Unlock the Value <br className="hidden sm:block" /> of Your Software <br className="hidden sm:block" /> Licenses
        </h1>
        <h2 className="mt-3 text-base md:text-lg text-gray-500">
          SoftSell transforms unused software licenses into cash. <br className="hidden sm:block" />
          Quick valuations, fair prices, secure transactions.
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full">
          <button className="w-full sm:w-[200px] h-[50px] bg-blue-500 text-white rounded-sm">
            Sell My Licenses
          </button>
          <button className="w-full sm:w-[200px] h-[50px] bg-[#FFF] border border-blue-500 text-blue-500 rounded-sm">
            Sell My Licenses
          </button>
        </div>
      </div>
      <div className="w-full md:w-[500px] h-[220px] sm:h-[300px] md:h-[380px] rounded-lg overflow-hidden mb-8 md:mb-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
      </div>
    </section>
  );
};

export default Hero;
