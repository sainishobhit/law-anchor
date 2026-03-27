import React from "react";

const Testimonial: React.FC = () => {
  const testimonials = [
    {
      quote: "Saini & Singh helped our business navigate complex contractual issues with professionalism and foresight. Their retainership model gives us peace of mind.",
      author: "R. Sharma",
      role: "Managing Director, Real Estate Firm",
    },
    {
      quote: "Their property law expertise saved us months of litigation. The team's responsiveness and attention to detail is unmatched in Delhi-NCR.",
      author: "P. Gupta",
      role: "CEO, Construction Group",
    },
    {
      quote: "From incorporation to compliance, they've been our go-to legal counsel. Having a dedicated team on retainer has been a game-changer for our startup.",
      author: "A. Mehta",
      role: "Founder, Tech Startup",
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-950 via-blue-950 to-gray-900 overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-72 h-72 bg-yellow-500 rounded-full filter blur-[100px] opacity-[0.04]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-medium mb-6 tracking-wide uppercase">
            <i className="fas fa-quote-left text-xs"></i>
            Client Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Trusted by <span className="text-yellow-400">Industry Leaders</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-yellow-500/20 transition-all duration-300"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fas fa-star text-yellow-400 text-sm"></i>
                ))}
              </div>
              <blockquote className="text-blue-100/70 leading-relaxed mb-8 text-sm">
                "{item.quote}"
              </blockquote>
              <div className="border-t border-white/10 pt-6">
                <p className="font-bold text-white">{item.author}</p>
                <p className="text-blue-200/50 text-sm">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
