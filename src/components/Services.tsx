import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const Services: React.FC = () => {
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [quoteForm, setQuoteForm] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    orgType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey);
    }
  }, []);

  const handleQuoteSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const templateParams = {
        to_email: "legal.jatin@gmail.com",
        from_name: quoteForm.name,
        from_email: quoteForm.email,
        phone: quoteForm.phone,
        legal_matter: `Retainership Quote Request - ${quoteForm.orgType}`,
        message: `Organization: ${quoteForm.organization}\nType: ${quoteForm.orgType}\n\n${quoteForm.message}`,
        reply_to: quoteForm.email,
      };

      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams
      );

      if (result.status === 200) {
        setSubmitStatus("success");
        setQuoteForm({ name: "", email: "", phone: "", organization: "", orgType: "", message: "" });
        setTimeout(() => {
          setShowQuoteModal(false);
          setSubmitStatus("idle");
        }, 3000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Email sending failed:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleQuoteChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setQuoteForm({ ...quoteForm, [e.target.name]: e.target.value });
  };

  const serviceFeatures = [
    {
      icon: "fas fa-users",
      title: "Unlimited Consultations",
      description: "Round-the-clock legal advisory on demand — no per-consultation charges.",
    },
    {
      icon: "fas fa-file-contract",
      title: "Documentation",
      description: "Expert drafting & vetting of agreements, notices, policies, and legal opinions.",
    },
    {
      icon: "fas fa-shield-alt",
      title: "Compliance Management",
      description: "Proactive Labour, Tax, and Real Estate regulatory compliance.",
    },
    {
      icon: "fas fa-gavel",
      title: "Representation",
      description: "Aggressive representation in Civil, Criminal & Tribunal matters.",
    },
    {
      icon: "fas fa-headset",
      title: "9AM-7PM Legal Helpline",
      description: "Direct access to your dedicated legal counsel during business hours.",
    },
    {
      icon: "fas fa-map-marked-alt",
      title: "Pan-NCR Coverage",
      description: "Offices across Delhi-NCR, Gurugram & Lucknow for on-ground support.",
    },
  ];

  const stats = [
    { value: "500+", label: "Clients Served" },
    { value: "15+", label: "Years Experience" },
    { value: "98%", label: "Client Retention" },
    { value: "3", label: "Office Locations" },
  ];

  return (
    <>
      <section
        id="services"
        className="relative py-24 bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 text-white overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
        </div>

        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)", backgroundSize: "60px 60px" }}></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-medium mb-6 tracking-wide uppercase">
              <i className="fas fa-briefcase text-xs"></i>
              Retainership Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Legal Protection, <span className="text-yellow-400">On Retainer</span>
            </h2>
            <p className="text-lg text-blue-200/70 max-w-3xl mx-auto">
              Why wait for a legal crisis? Our retainership model gives you a dedicated
              legal team on standby — so your business is always protected.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-4">
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-1">{stat.value}</div>
                <div className="text-sm text-blue-200/60 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {serviceFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-yellow-500/30 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-yellow-500/20">
                  <i className={`${feature.icon} text-xl text-blue-900`}></i>
                </div>
                <h4 className="text-lg font-bold mb-3 text-white group-hover:text-yellow-300 transition-colors">
                  {feature.title}
                </h4>
                <p className="text-blue-200/60 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="relative bg-gradient-to-r from-yellow-500/10 via-yellow-500/5 to-yellow-500/10 rounded-2xl p-10 md:p-14 border border-yellow-500/20 text-center">
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-yellow-500 rounded-full filter blur-3xl opacity-5"></div>
            </div>
            <div className="relative">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Tailored Legal Plans for Every Organization
              </h3>
              <p className="text-blue-200/70 mb-8 max-w-2xl mx-auto">
                Whether you're a startup, MSME, housing society, or enterprise —
                we craft retainership packages that fit your legal needs and budget.
              </p>
              <button
                onClick={() => { setShowQuoteModal(true); setSubmitStatus("idle"); }}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-blue-900 font-bold px-10 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-yellow-500/25 text-lg"
              >
                <i className="fas fa-file-invoice"></i>
                Get Your Custom Quote
                <i className="fas fa-arrow-right text-sm"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Modal */}
      {showQuoteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowQuoteModal(false)}
          ></div>
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <div className="bg-gradient-to-r from-blue-900 to-blue-800 p-6 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white">Request Custom Quote</h3>
                  <p className="text-blue-200/70 text-sm mt-1">We'll respond within 24 hours</p>
                </div>
                <button
                  onClick={() => setShowQuoteModal(false)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                >
                  <i className="fas fa-times text-sm"></i>
                </button>
              </div>
            </div>

            <div className="p-6">
              {submitStatus === "success" ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-check text-2xl text-green-600"></i>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Quote Request Sent!</h4>
                  <p className="text-gray-500">Our team will prepare a customized retainership proposal for you.</p>
                </div>
              ) : (
                <form onSubmit={handleQuoteSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        name="name"
                        value={quoteForm.name}
                        onChange={handleQuoteChange}
                        required
                        placeholder="Your name"
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 focus:outline-none bg-gray-50/50 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone <span className="text-red-500">*</span></label>
                      <input
                        type="tel"
                        name="phone"
                        value={quoteForm.phone}
                        onChange={handleQuoteChange}
                        required
                        placeholder="+91-XXXXXXXXXX"
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 focus:outline-none bg-gray-50/50 text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email <span className="text-red-500">*</span></label>
                    <input
                      type="email"
                      name="email"
                      value={quoteForm.email}
                      onChange={handleQuoteChange}
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 focus:outline-none bg-gray-50/50 text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Organization <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        name="organization"
                        value={quoteForm.organization}
                        onChange={handleQuoteChange}
                        required
                        placeholder="Company name"
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 focus:outline-none bg-gray-50/50 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Organization Type <span className="text-red-500">*</span></label>
                      <select
                        name="orgType"
                        value={quoteForm.orgType}
                        onChange={handleQuoteChange}
                        required
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 focus:outline-none bg-gray-50/50 text-sm"
                      >
                        <option value="">Select type</option>
                        <option value="Startup">Startup</option>
                        <option value="SME / MSME">SME / MSME</option>
                        <option value="Corporate">Corporate / Enterprise</option>
                        <option value="Housing Society">Housing Society</option>
                        <option value="Institution">Educational Institution</option>
                        <option value="Government">Government Body</option>
                        <option value="Non-Profit">Non-Profit / NGO</option>
                        <option value="Individual Professional">Individual Professional</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Requirements <span className="text-red-500">*</span></label>
                    <textarea
                      name="message"
                      value={quoteForm.message}
                      onChange={handleQuoteChange}
                      placeholder="Describe your legal requirements, team size, key areas of concern..."
                      rows={3}
                      required
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 focus:outline-none resize-vertical bg-gray-50/50 text-sm"
                    ></textarea>
                  </div>

                  {submitStatus === "error" && (
                    <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-xl text-sm">
                      Failed to send. Please try again or email us directly.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full px-6 py-3.5 rounded-xl font-bold transition-all duration-300 text-base ${
                      isSubmitting
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-800 hover:to-blue-950 text-white shadow-lg shadow-blue-900/25"
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <i className="fas fa-spinner fa-spin"></i>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <i className="fas fa-paper-plane"></i>
                        Submit Quote Request
                      </span>
                    )}
                  </button>

                  <p className="text-center text-gray-400 text-xs">
                    Your information is confidential and will only be used to prepare your quote.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Services;
