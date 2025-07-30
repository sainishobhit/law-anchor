import React from "react";

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: "fas fa-user-tie",
      title: "Experienced & Specialized Advocates",
      description: "Deep expertise across multiple practice areas",
    },
    {
      icon: "fas fa-map-marker-alt",
      title: "Strategic Jurisdictional Presence",
      description: "Delhi-NCR, Gurugram, and Lucknow coverage",
    },
    {
      icon: "fas fa-shield-alt",
      title: "Client-First Approach",
      description: "Transparent billing and dedicated support",
    },
    {
      icon: "fas fa-clock",
      title: "24x7 Legal Support",
      description: "Round-the-clock assistance for retainer clients",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-100 to-gray-100"></div>
      </div>

      {/* Legal Icons Background */}
      <div className="absolute right-0 top-0 h-full w-1/4 opacity-5">
        <div className="relative h-full">
          <div className="absolute top-1/4 right-1/4 text-6xl">⚖️</div>
          <div className="absolute top-1/2 right-1/3 text-5xl">📜</div>
          <div className="absolute bottom-1/4 right-1/4 text-6xl">🏛️</div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
            <i className="fas fa-balance-scale text-2xl text-white"></i>
          </div>
          <h2 className="section-title text-blue-900">Why Choose Us</h2>
          <div className="w-16 h-1 bg-yellow-500 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-gray-100 relative overflow-hidden group"
            >
              {/* Card Background Pattern */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-blue-50 rounded-full -mr-10 -mt-10 opacity-50 group-hover:opacity-75 transition-opacity"></div>

              <div className="relative">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className={`${feature.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
