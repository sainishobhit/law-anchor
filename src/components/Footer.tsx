import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                <i className="fas fa-balance-scale text-blue-900"></i>
              </div>
              <span className="font-bold text-xl tracking-tight">
                Saini & Singh
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed text-sm">
              A full-service law firm providing comprehensive legal solutions
              across Delhi-NCR, Gurugram, and Lucknow.
            </p>
            <p className="text-yellow-500/70 font-medium text-sm italic">
              "Your Legal Partner for Every Step"
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-6 uppercase tracking-wider text-gray-400">Practice Areas</h4>
            <ul className="space-y-3">
              {[
                "Litigation & Dispute Resolution",
                "Property & Real Estate Law",
                "Corporate & Commercial Law",
                "Transport & Challan Compliance",
                "Family & Matrimonial Law",
                "Arbitration & ADR",
              ].map((area) => (
                <li key={area} className="text-gray-500 hover:text-white transition-colors text-sm cursor-pointer">
                  {area}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-6 uppercase tracking-wider text-gray-400">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-500 text-sm">
                <i className="fas fa-map-marker-alt text-yellow-500/50 w-4"></i>
                <span>Delhi | Gurugram | Lucknow</span>
              </div>
              <div className="flex items-center gap-3 text-gray-500 text-sm">
                <i className="fas fa-phone text-yellow-500/50 w-4"></i>
                <span>+91 79064-26293</span>
              </div>
              <div className="flex items-center gap-3 text-gray-500 text-sm">
                <i className="fas fa-envelope text-yellow-500/50 w-4"></i>
                <span>legal.jatin@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-500 text-sm">
                <i className="fas fa-clock text-yellow-500/50 w-4"></i>
                <span>Mon - Sun: 9 AM - 6 PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            &copy; {new Date().getFullYear()} Saini & Singh Associates. All rights reserved.
          </p>
          <p className="text-gray-700 text-xs">
            Advocates & Solicitors | Bar Council of India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
