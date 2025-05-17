import { Star } from "lucide-react";
import React from "react";

const Review = () => {
  const testimonials = [
    {
      quote:
        "SoftSell made the process of selling our excess Adobe licenses remarkably easy. Their valuation was fair, and payment was prompt. This service has helped us optimize our software budget significantly.",
      name: "Sarah Johnson",
      role: "IT Director",
      company: "DesignHub Creative",
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
      delay: "delay-0",
    },
    {
      quote:
        "When our company needed to downsize, we had dozens of unused Microsoft licenses. SoftSell offered 30% more than competitors and handled the transfer process seamlessly. I highly recommend their service.",
      name: "Michael Chen",
      role: "CFO",
      company: "TechNova Solutions",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
      delay: "delay-200",
    },
  ];
  return (
    <section id="review" className="w-full min-h-screen bg-[#245FE4] pt-16 pb-10 flex flex-col">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center px-4">
        What Our Customers Say
      </h1>
      <h2 className="text-base sm:text-lg text-white mt-4 sm:mt-6 text-center px-4">
        Don't just take our word for it. Here's what businesses like yours have
        experienced.
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-6xl w-full mx-auto mt-10 sm:mt-16 px-4">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-white/20 transition-all duration-700 transform translate-y-0 opacity-100 ${testimonial.delay} flex flex-col h-full`}
          >
            <div className="flex items-center mb-3 sm:mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>
            <blockquote className="text-base sm:text-lg mb-4 sm:mb-6 flex-1">
              "{testimonial.quote}"
            </blockquote>
            <div className="flex items-center mt-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover mr-3 sm:mr-4"
              />
              <div>
                <h4 className="font-semibold text-sm sm:text-base">{testimonial.name}</h4>
                <p className="text-blue-200 text-xs sm:text-sm">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Review;
