import React from "react";

const PracticeAreas: React.FC = () => {
  const practiceAreas = [
    {
      icon: "fas fa-gavel",
      title: "Litigation & Dispute Resolution",
      description:
        "Aggressive courtroom representation before Supreme Court, High Courts, District Courts, and specialized tribunals.",
      services: [
        "Civil & Criminal Litigation",
        "Contractual Disputes",
        "Labour & Employment Cases",
        "Recovery & Execution Matters",
      ],
    },
    {
      icon: "fas fa-landmark",
      title: "Property & Real Estate Law",
      description:
        "End-to-end legal support for property transactions, title disputes, and regulatory compliance.",
      services: [
        "Land Title Verification",
        "Sale & Lease Deeds",
        "RERA Compliance",
        "Builder-Buyer Disputes",
      ],
    },
    {
      icon: "fas fa-building",
      title: "Corporate & Commercial Law",
      description:
        "Strategic counsel for businesses — from incorporation to complex M&A transactions.",
      services: [
        "Company Incorporation",
        "M&A Advisory",
        "Regulatory Compliance",
        "Legal Due Diligence",
      ],
    },
    {
      icon: "fas fa-truck",
      title: "Transport & Challan Compliance",
      description:
        "Specialized representation for commercial vehicle disputes, challans, and transport regulatory matters.",
      services: [
        "Challan Disputes",
        "Vehicle Seizure Cases",
        "License Disqualifications",
        "RTO Appeals",
      ],
    },
    {
      icon: "fas fa-hands-helping",
      title: "Family & Matrimonial Law",
      description:
        "Compassionate yet firm legal counsel for sensitive family matters with complete discretion.",
      services: [
        "Divorce Proceedings",
        "Child Custody",
        "Domestic Violence",
        "Property Rights",
      ],
    },
    {
      icon: "fas fa-balance-scale-right",
      title: "Arbitration & ADR",
      description:
        "Efficient dispute resolution through arbitration and mediation — faster outcomes, lower costs.",
      services: [
        "Domestic Arbitration",
        "Commercial Mediation",
        "Section 34 & 36 Petitions",
        "Contract Drafting",
      ],
    },
  ];

  return (
    <section
      id="practice-areas"
      className="relative py-24 bg-white overflow-hidden"
    >
      {/* Subtle background accent */}
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-blue-50/50 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6 tracking-wide uppercase">
            <i className="fas fa-th-large text-xs"></i>
            Areas of Practice
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Expertise Across <span className="text-blue-700">Every Domain</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Six core practice areas. One firm that handles it all.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {practiceAreas.map((area, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 bg-white"
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-700 to-blue-900 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-900/10">
                  <i className={`${area.icon} text-xl text-white`}></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-700 transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-gray-500 mb-5 leading-relaxed text-sm">
                    {area.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {area.services.map((service, serviceIndex) => (
                      <span
                        key={serviceIndex}
                        className="inline-flex items-center gap-1.5 text-xs bg-gray-50 text-gray-600 px-3 py-1.5 rounded-full border border-gray-100 group-hover:bg-blue-50 group-hover:text-blue-700 group-hover:border-blue-100 transition-colors"
                      >
                        <i className="fas fa-check text-[10px] text-blue-500"></i>
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
