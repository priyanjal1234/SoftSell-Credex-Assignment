import React from "react";

const Hero = () => {
  return (
    <section className="w-full heroSection pt-28  flex justify-around">
      <div>
        <h1 className="text-6xl font-bold">
          Unlock the Value <br /> of Your Software <br /> Licenses
        </h1>
        <h2 className="mt-3 text-lg text-gray-500">
          SoftSell transforms unused software licenses into cash. <br /> Quick
          valuations, fair prices, secure transactions.
        </h2>
        <div className="flex gap-4 mt-6">
          <button className="w-[200px] h-[50px] bg-blue-500 text-white rounded-sm">
            Sell My Licenses
          </button>
          <button className="w-[200px] h-[50px] bg-[#FFF] rounded-sm">
            Sell My Licenses
          </button>
        </div>
      </div>
      <div className="w-[500px] h-[380px] rounded-lg overflow-hidden">
        <img className="w-full h-full object-cover" src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"  alt="" />
      </div>
    </section>
  );
};

export default Hero;
