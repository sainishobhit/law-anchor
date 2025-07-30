import React from "react";

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
        <div className="absolute top-20 right-20 w-24 h-24 border border-white rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-white rounded-full"></div>
        <div className="absolute bottom-10 right-1/3 w-20 h-20 border-2 border-white rounded-full"></div>
      </div>

      {/* Scales of Justice Background */}
      <div className="absolute right-0 top-0 h-full w-1/3 opacity-5">
        <div className="relative h-full">
          <div className="absolute top-1/4 right-1/4 text-8xl">⚖️</div>
          <div className="absolute top-1/2 right-1/3 text-6xl">📜</div>
          <div className="absolute bottom-1/4 right-1/4 text-7xl">🏛️</div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Logo and Title */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white bg-opacity-20 rounded-full mb-6">
              <i className="fas fa-balance-scale text-4xl text-white"></i>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-3 leading-tight">
              <span className="text-yellow-300">Saini & Singh</span>
              <span className="text-white"> Associates</span>
            </h1>
          </div>

          <p className="text-2xl text-blue-100 mb-5">Advocates & Solicitors</p>

          <p className="text-xl text-yellow-200 italic mb-8 font-serif">
            "Your Legal Partner for Every Step"
          </p>

          <p className="text-lg text-blue-100 max-w-4xl mx-auto mb-12 leading-relaxed">
            Welcome to Saini & Singh Associates, a dynamic full-service law firm
            headquartered in Delhi-NCR with strategic presence in Gurugram and
            Lucknow. We bring together a team of highly skilled advocates, legal
            advisors, and solicitors dedicated to delivering practical,
            business-oriented and legally sound solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button
              onClick={() => scrollToSection("contact")}
              className="btn bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <i className="fas fa-phone"></i>
              Book a Consultation Today
              <i className="fas fa-arrow-right"></i>
            </button>

            <button
              onClick={() => scrollToSection("services")}
              className="btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Our Services
            </button>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-10">
            {["Delhi", "Gurugram", "Lucknow"].map((city) => (
              <div
                key={city}
                className="flex items-center gap-2 text-yellow-200 font-medium bg-white bg-opacity-10 px-4 py-2 rounded-full"
              >
                <i className="fas fa-map-marker-alt text-xl"></i>
                <span>{city}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-blue-900 to-transparent"></div>
    </section>
  );
};

export default Hero;
