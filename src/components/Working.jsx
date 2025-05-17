import { CreditCard, DollarSign, Upload } from "lucide-react";
import React from "react";

const Working = () => {
  const steps = [
    {
      icon: <Upload className="h-10 w-10 text-blue-600" />,
      title: "Upload License",
      description:
        "Submit your software license details through our secure portal.",
      delay: "delay-0",
    },
    {
      icon: <DollarSign className="h-10 w-10 text-blue-600" />,
      title: "Get Valuation",
      description:
        "Receive a fair market valuation based on current demand and license type.",
      delay: "delay-200",
    },
    {
      icon: <CreditCard className="h-10 w-10 text-blue-600" />,
      title: "Get Paid",
      description:
        "Accept our offer and get paid via your preferred payment method within 48 hours.",
      delay: "delay-400",
    },
  ];
  return (
    <section id="working" className="w-full h-[85%] pt-20">
      <h1 className="text-4xl font-bold text-center">How It Works</h1>
      <h2 className="text-gray-600 text-lg text-center mt-4">
        Turn your unused software licenses into cash in three simple steps.
      </h2>

      <div className="relative max-w-5xl mx-auto mt-16">
        <div className="absolute top-24 left-0 right-0 h-1 bg-blue-200 hidden md:block"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {
            steps.map((step,index) => (
              <div 
                key={index}
                className={`bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center relative transition-all duration-700 transform translate-y-0 opacity-100 ${step.delay}`}
              >
                <div className="mx-auto w-20 h-20 flex items-center justify-center bg-blue-100 rounded-full mb-6 relative z-10">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                <div className=" md:block absolute -top-3 -left-3 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Working;
