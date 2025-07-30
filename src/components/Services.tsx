import React from "react";

const Services: React.FC = () => {
  const serviceFeatures = [
    {
      icon: "fas fa-users",
      title: "Unlimited Consultations",
      description: "Unlimited legal consultations and advisory.",
    },
    {
      icon: "fas fa-file-alt",
      title: "Documentation",
      description: "Drafting and vetting of agreements, notices, policies.",
    },
    {
      icon: "fas fa-shield-alt",
      title: "Compliance Management",
      description: "Labour, Tax, Real Estate compliance.",
    },
    {
      icon: "fas fa-gavel",
      title: "Representation",
      description: "Civil/Criminal/Tribunal matters representation.",
    },
    {
      icon: "fas fa-phone",
      title: "24x7 Helpline",
      description: "Round-the-clock legal support.",
    },
    {
      icon: "fas fa-map-pin",
      title: "Multi-Location",
      description: "Delhi-NCR, Gurugram, Lucknow coverage.",
    },
  ];

  return (
    <section
      id="services"
      className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white to-blue-100"></div>
      </div>

      {/* Legal Icons Background */}
      <div className="absolute left-0 top-0 h-full w-1/4 opacity-5">
        <div className="relative h-full">
          <div className="absolute top-1/4 left-1/4 text-6xl">⚖️</div>
          <div className="absolute top-1/2 left-1/3 text-5xl">📜</div>
          <div className="absolute bottom-1/4 left-1/4 text-6xl">🏛️</div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-500 rounded-full mb-6">
            <i className="fas fa-balance-scale text-2xl text-blue-900"></i>
          </div>
          <h2 className="section-title text-white">Our Services</h2>
          <p className="section-subtitle text-blue-100">
            Comprehensive legal solutions tailored to meet your specific needs.
          </p>
        </div>

        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-10 shadow-2xl max-w-6xl mx-auto border border-white border-opacity-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-500 rounded-full">
              <i className="fas fa-balance-scale text-2xl text-blue-900"></i>
            </div>
            <h3 className="text-3xl font-semibold text-white">
              Legal Retainership Services
            </h3>
          </div>

          <p className="text-center text-blue-100 text-lg mb-12 max-w-4xl mx-auto leading-relaxed">
            Our flagship offering designed for corporates, SMEs, professionals,
            housing societies, institutions, and government clients. Through
            flexible monthly and annual retainership packages, we offer
            end-to-end legal support.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {serviceFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl text-center border border-white border-opacity-20 hover:bg-white hover:bg-opacity-20 transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-500 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i className={`${feature.icon} text-2xl text-blue-900`}></i>
                </div>
                <h4 className="text-lg font-semibold mb-3 text-white group-hover:text-yellow-200 transition-colors">
                  {feature.title}
                </h4>
                <p className="text-blue-100 group-hover:text-white transition-colors">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center pt-8 border-t border-white border-opacity-20">
            <p className="text-blue-100 mb-6">
              Custom retainership plans available for startups, MSMEs, and
              non-profits.
            </p>
            <button className="btn bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get Custom Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
