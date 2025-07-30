import React from "react";

const Testimonial: React.FC = () => {
  return (
    <section className="py-20 bg-primary-600 text-white text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <i className="fas fa-star text-3xl text-yellow-400 mb-8"></i>
        <blockquote className="text-2xl md:text-3xl italic mb-6 max-w-4xl mx-auto leading-relaxed">
          "Saini & Singh helped our business navigate complex contractual issues
          with professionalism and foresight."
        </blockquote>
        <cite className="text-lg opacity-90">
          - R. Sharma, Managing Director, Real Estate Firm
        </cite>
      </div>
    </section>
  );
};

export default Testimonial;
