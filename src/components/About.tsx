import React from "react";

const About: React.FC = () => {
  const coreValues = [
    {
      icon: "fas fa-user-tie",
      title: "Professionalism",
      description: "Highest standard of legal practice",
    },
    {
      icon: "fas fa-file-alt",
      title: "Confidentiality",
      description: "Utmost discretion and client privacy",
    },
    {
      icon: "fas fa-clock",
      title: "Responsiveness",
      description: "Prompt communication and proactive support",
    },
    {
      icon: "fas fa-balance-scale",
      title: "Integrity",
      description: "Honest and ethical representation",
    },
  ];

  return (
    <section
      id="about"
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
          <h2 className="section-title text-white">About Us</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12">
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-6 text-yellow-200">
                Who We Are
              </h3>
              <div className="space-y-4 text-blue-100 leading-relaxed">
                <p>
                  Founded with a vision to provide comprehensive and reliable
                  legal services, Saini & Singh Associates has evolved into a
                  trusted legal partner across diverse practice areas. Our team
                  comprises experienced lawyers with specialization in corporate
                  law, litigation, arbitration, property disputes, criminal
                  defense, family law, and more.
                </p>
                <p>
                  We believe that legal service is not just about the
                  application of law but about understanding people, businesses,
                  and context. Our objective is to simplify the legal journey
                  for our clients with timely advice, personalized strategies,
                  and unwavering support.
                </p>
              </div>
            </div>

            <div className="bg-yellow-500 bg-opacity-20 backdrop-blur-sm p-6 rounded-xl border border-yellow-500 border-opacity-30">
              <h3 className="text-xl font-semibold mb-4 text-yellow-200">
                Our Mission
              </h3>
              <p className="text-blue-100">
                To uphold the rule of law by offering transparent, ethical, and
                results-driven legal representation across all sectors and
                jurisdictions.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-8 text-yellow-200">
              Core Values
            </h3>
            <div className="space-y-6">
              {coreValues.map((value, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-lg border border-white border-opacity-20 hover:bg-white hover:bg-opacity-20 transition-all duration-300 group"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-500 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <i className={`${value.icon} text-lg text-blue-900`}></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-white group-hover:text-yellow-200 transition-colors">
                      {value.title}
                    </h4>
                    <p className="text-blue-100 group-hover:text-white transition-colors">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
