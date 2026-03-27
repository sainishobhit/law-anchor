import React from "react";

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-950 via-blue-950 to-gray-900 text-white overflow-hidden"
    >
      {/* Ambient glow effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600 rounded-full mix-blend-multiply filter blur-[120px] opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-yellow-500 rounded-full mix-blend-multiply filter blur-[100px] opacity-[0.07] animate-pulse" style={{ animationDelay: "3s" }}></div>
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)", backgroundSize: "80px 80px" }}></div>

      {/* Vertical decorative line */}
      <div className="absolute left-1/2 top-0 w-px h-32 bg-gradient-to-b from-transparent via-yellow-500/30 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-blue-200/80 px-5 py-2 rounded-full text-sm mb-10 tracking-widest uppercase">
            <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
            Advocates & Solicitors
          </div>

          {/* Firm Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[0.95] tracking-tight">
            <span className="text-yellow-400">Saini & Singh</span>
            <br />
            <span className="text-white/90 font-light">Associates</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-blue-200/60 mb-6 font-light tracking-wide">
            Your Legal Partner for Every Step
          </p>

          {/* Divider */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent mx-auto mb-8"></div>

          {/* Description */}
          <p className="text-lg text-blue-100/50 max-w-3xl mx-auto mb-14 leading-relaxed">
            A full-service law firm headquartered in Delhi-NCR with strategic presence
            in Gurugram and Lucknow. We deliver practical, business-oriented legal
            solutions backed by deep expertise and unwavering dedication.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-20">
            <button
              onClick={() => scrollToSection("contact")}
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-blue-950 font-bold px-10 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-yellow-500/20 text-lg"
            >
              Book a Consultation
              <i className="fas fa-arrow-right text-sm group-hover:translate-x-1 transition-transform"></i>
            </button>

            <button
              onClick={() => scrollToSection("services")}
              className="inline-flex items-center gap-3 bg-white/5 border border-white/15 text-white hover:bg-white/10 font-medium px-10 py-4 rounded-xl transition-all duration-300"
            >
              <i className="fas fa-briefcase text-sm text-yellow-400/70"></i>
              Explore Services
            </button>
          </div>

          {/* Locations */}
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            {["Delhi-NCR", "Gurugram", "Lucknow"].map((city) => (
              <div
                key={city}
                className="flex items-center gap-2 text-blue-200/40 text-sm tracking-wider uppercase"
              >
                <span className="w-1.5 h-1.5 bg-yellow-500/50 rounded-full"></span>
                {city}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-950 to-transparent"></div>
    </section>
  );
};

export default Hero;
