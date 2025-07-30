import React from "react";

const PracticeAreas: React.FC = () => {
  const practiceAreas = [
    {
      icon: "fas fa-gavel",
      title: "Litigation & Dispute Resolution",
      description:
        "Representation before Supreme Court, High Courts, District Courts, and specialized tribunals.",
      services: [
        "Civil & Criminal Litigation",
        "Contractual Disputes",
        "Labour & Employment Cases",
        "Recovery & Execution Matters",
      ],
    },
    {
      icon: "fas fa-home",
      title: "Property & Real Estate Law",
      description:
        "Complete legal support for property transactions, title verification, and real estate disputes.",
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
        "Strategic legal advice for businesses, from incorporation to complex commercial transactions.",
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
        "Specialized legal services for commercial vehicle disputes and transport compliance matters.",
      services: [
        "Challan Disputes",
        "Vehicle Seizure Cases",
        "License Disqualifications",
        "RTO Appeals",
      ],
    },
    {
      icon: "fas fa-heart",
      title: "Family & Matrimonial Law",
      description:
        "Sensitive legal support for family matters with personalized attention and care.",
      services: [
        "Divorce Proceedings",
        "Child Custody",
        "Domestic Violence",
        "Property Rights",
      ],
    },
    {
      icon: "fas fa-balance-scale",
      title: "Arbitration & ADR",
      description:
        "Efficient dispute resolution outside traditional court systems through arbitration and mediation.",
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
      className="relative py-20 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden"
    >
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
          <h2 className="section-title text-blue-900">Practice Areas</h2>
          <p className="section-subtitle text-gray-600">
            Comprehensive legal expertise across multiple domains
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          {practiceAreas.map((area, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-gray-100 relative overflow-hidden group"
            >
              {/* Card Background Pattern */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-full -mr-12 -mt-12 opacity-50 group-hover:opacity-75 transition-opacity"></div>

              <div className="relative">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className={`${area.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800 group-hover:text-blue-600 transition-colors">
                  {area.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {area.description}
                </p>
                <ul className="space-y-2">
                  {area.services.map((service, serviceIndex) => (
                    <li
                      key={serviceIndex}
                      className="flex items-center gap-3 text-gray-600"
                    >
                      <i className="fas fa-check text-green-500 text-sm"></i>
                      <span className="text-sm">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
