import { CreditCard, DollarSign, Upload } from "lucide-react";
import React from "react";
import WorkingCard from "./WorkingCard";


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
    <section
      id="working"
      className="w-full min-h-[85vh] pt-10 px-4 sm:px-6 lg:px-8"
    >
      <h1 className="text-3xl sm:text-4xl font-bold text-center">
        How It Works
      </h1>
      <h2 className="text-gray-600 text-base sm:text-lg text-center mt-4">
        Turn your unused software licenses into cash in three simple steps.
      </h2>

      <div className="relative max-w-5xl mx-auto mt-12 sm:mt-16">
        {/* Horizontal line for md+ screens, vertical for small screens */}
        <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-blue-200"></div>
        <div className="md:hidden absolute left-1/2 -translate-x-1/2 top-12 bottom-0 w-1 bg-blue-200"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <WorkingCard key={index} step={step} index={index}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Working;
