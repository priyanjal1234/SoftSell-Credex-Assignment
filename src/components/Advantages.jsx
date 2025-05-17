import { Clock, DollarSign, Heart, ShieldCheck } from "lucide-react";
import React from "react";
import AdvantageCard from "./AdvantageCard";

const Advantages = () => {
  const benefits = [
    {
      icon: <DollarSign className="h-8 w-8 text-blue-600" />,
      title: "Best Market Value",
      description:
        "Our proprietary valuation algorithm ensures you get the highest price for your licenses.",
      delay: "delay-0",
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-blue-600" />,
      title: "Secure Transactions",
      description:
        "End-to-end encryption and compliance with industry security standards protect your data.",
      delay: "delay-100",
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: "Quick Process",
      description:
        "Get a valuation within hours and payment within two business days after acceptance.",
      delay: "delay-200",
    },
    {
      icon: <Heart className="h-8 w-8 text-blue-600" />,
      title: "Customer Satisfaction",
      description:
        "98% of our customers rate their experience as excellent or very good.",
      delay: "delay-300",
    },
  ];
  return (
    <section
      id="advantage"
      className="w-full py-12 px-4 bg-[#F9FAFB] md:py-16 lg:py-20"
    >
      <h1 className="text-3xl sm:text-4xl font-bold text-center">
        Why Choose Us
      </h1>
      <h2 className="text-gray-600 text-base sm:text-lg text-center mt-4">
        SoftSell offers a secure, transparent, and efficient process for selling
        your unused <br className="hidden sm:block" /> software licenses.
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto mt-12 md:mt-16">
        {benefits.map((benefit, index) => (
          <AdvantageCard benefit={benefit} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Advantages;
