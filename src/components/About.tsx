import React from "react";

const About: React.FC = () => {
  const coreValues = [
    {
      icon: "fas fa-user-tie",
      title: "Professionalism",
      description: "Highest standards of legal practice and courtroom conduct.",
    },
    {
      icon: "fas fa-lock",
      title: "Confidentiality",
      description: "Iron-clad discretion — your matters stay between us.",
    },
    {
      icon: "fas fa-bolt",
      title: "Responsiveness",
      description: "Prompt communication, proactive updates, no delays.",
    },
    {
      icon: "fas fa-balance-scale",
      title: "Integrity",
      description: "Honest counsel and ethical representation, always.",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-24 bg-gradient-to-br from-gray-950 via-blue-950 to-gray-900 text-white overflow-hidden"
    >
      {/* Decorative */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600 rounded-full filter blur-[120px] opacity-[0.05]"></div>
      </div>
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)", backgroundSize: "60px 60px" }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-medium mb-6 tracking-wide uppercase">
            <i className="fas fa-landmark text-xs"></i>
            About Our Firm
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            The Firm Behind <span className="text-yellow-400">Your Defense</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">
                Who We Are
              </h3>
              <div className="space-y-4 text-blue-100/60 leading-relaxed">
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

            <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 p-8 rounded-2xl border border-yellow-500/20">
              <h3 className="text-xl font-bold mb-4 text-yellow-400 flex items-center gap-2">
                <i className="fas fa-bullseye"></i>
                Our Mission
              </h3>
              <p className="text-blue-100/60 leading-relaxed">
                To uphold the rule of law by offering transparent, ethical, and
                results-driven legal representation across all sectors and
                jurisdictions.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8 text-white">
              Core Values
            </h3>
            <div className="space-y-4">
              {coreValues.map((value, index) => (
                <div
                  key={index}
                  className="flex items-start gap-5 bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-yellow-500/20 hover:bg-white/[0.07] transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-yellow-500/20">
                    <i className={`${value.icon} text-lg text-blue-900`}></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1 text-white group-hover:text-yellow-300 transition-colors">
                      {value.title}
                    </h4>
                    <p className="text-blue-200/50">
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
