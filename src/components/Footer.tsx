import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <i className="fas fa-balance-scale text-2xl text-primary-600"></i>
              <span className="font-bold text-xl">
                Saini & Singh Associates
              </span>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Your trusted legal partner providing comprehensive legal solutions
              across Delhi-NCR, Gurugram, and Lucknow.
            </p>
            <p className="text-primary-600 font-medium italic">
              "Your Legal Partner for Every Step"
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Practice Areas</h4>
            <ul className="space-y-3 text-gray-300">
              <li>Litigation & Dispute Resolution</li>
              <li>Property & Real Estate Law</li>
              <li>Corporate & Commercial Law</li>
              <li>Family & Matrimonial Law</li>
              <li>Arbitration & ADR</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-3">
                <i className="fas fa-map-marker-alt text-primary-600 w-4"></i>
                <span>Delhi | Gurugram | Lucknow</span>
              </div>
              <div className="flex items-center gap-3">
                <i className="fas fa-phone text-primary-600 w-4"></i>
                <span>+91-XXXXXXXXXX</span>
              </div>
              <div className="flex items-center gap-3">
                <i className="fas fa-envelope text-primary-600 w-4"></i>
                <span>info@sainiandsingh.com</span>
              </div>
              <div className="flex items-center gap-3">
                <i className="fas fa-globe text-primary-600 w-4"></i>
                <span>www.sainiandsingh.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Saini & Singh Associates. All rights reserved. | Advocates &
            Solicitors
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
