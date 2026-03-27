import React from "react";

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: "fas fa-user-tie",
      title: "Experienced Advocates",
      description: "Deep expertise across litigation, corporate, property, and family law — with courtroom-tested counsel.",
      number: "01",
    },
    {
      icon: "fas fa-map-marked-alt",
      title: "Multi-Jurisdictional Reach",
      description: "Strategic presence across Delhi-NCR, Gurugram, and Lucknow for seamless on-ground representation.",
      number: "02",
    },
    {
      icon: "fas fa-shield-alt",
      title: "Client-First Philosophy",
      description: "Transparent billing, dedicated points of contact, and proactive case updates you can count on.",
      number: "03",
    },
    {
      icon: "fas fa-bolt",
      title: "24x7 Retainer Support",
      description: "Round-the-clock legal assistance for retainer clients — because legal emergencies don't wait.",
      number: "04",
    },
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Subtle background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50/50 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6 tracking-wide uppercase">
            <i className="fas fa-award text-xs"></i>
            Why Clients Trust Us
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Built on <span className="text-blue-700">Trust</span>, Driven by <span className="text-blue-700">Results</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            What sets us apart isn't just what we know — it's how we work with you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 group bg-white"
            >
              <span className="absolute top-6 right-6 text-5xl font-bold text-gray-100 group-hover:text-blue-100 transition-colors">
                {feature.number}
              </span>
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-700 to-blue-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-900/10">
                  <i className={`${feature.icon} text-xl text-white`}></i>
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-900 group-hover:text-blue-700 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm">
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
