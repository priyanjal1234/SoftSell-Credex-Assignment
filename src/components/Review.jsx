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
    <section id="review" className="w-full h-[80%] bg-[#245FE4] pt-20">
      <h1 className="text-4xl font-bold text-white text-center">
        What Our Customers Say
      </h1>
      <h2 className="text-lg text-white mt-6 text-center">
        Don't just take our word for it. Here's what businesses like yours have
        experienced.
      </h2>

      <div className="grid grid-cols-1 text-white mt-16 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 transition-all duration-700 transform translate-y-0 opacity-100 ${testimonial.delay}`}
          >
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>
            <blockquote className="text-lg mb-6">
              "{testimonial.quote}"
            </blockquote>
            <div className="flex items-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <h4 className="font-semibold">{testimonial.name}</h4>
                <p className="text-blue-200 text-sm">
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
