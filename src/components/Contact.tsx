import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    matter: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [configValid, setConfigValid] = useState(true);

  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

    const isValid = !!(publicKey && serviceId && templateId);
    setConfigValid(isValid);

    if (isValid) {
      emailjs.init(publicKey);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!configValid) {
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const templateParams = {
        to_email: "legal.jatin@gmail.com",
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        legal_matter: formData.matter,
        message: formData.message,
        reply_to: formData.email,
      };

      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams
      );

      if (result.status === 200) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          matter: "",
          message: "",
        });
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

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)", backgroundSize: "60px 60px" }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-medium mb-6 tracking-wide uppercase">
            <i className="fas fa-balance-scale text-xs"></i>
            Confidential Consultation
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Your Legal Matter <span className="text-yellow-400">Deserves Attention</span>
          </h2>
          <p className="text-lg text-blue-200/70 max-w-2xl mx-auto">
            Every case begins with a conversation. Share your concerns with us
            — your inquiry is protected by attorney-client privilege.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Left Panel - Contact Info */}
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-semibold mb-8 text-white flex items-center gap-3">
                <span className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                  <i className="fas fa-shield-alt text-yellow-400"></i>
                </span>
                Reach Our Legal Team
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                    <i className="fas fa-map-marker-alt text-blue-400"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Delhi Office</h4>
                    <p className="text-blue-200/60">[Full Address]</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                    <i className="fas fa-phone text-blue-400"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Phone</h4>
                    <p className="text-blue-200/60">+91 79064-26293</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                    <i className="fas fa-envelope text-blue-400"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Email</h4>
                    <p className="text-blue-200/60">legal.jatin@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 p-8 rounded-2xl border border-yellow-500/20">
              <h4 className="text-lg font-semibold mb-4 text-yellow-400 flex items-center gap-2">
                <i className="fas fa-clock"></i>
                Consultation Hours
              </h4>
              <div className="space-y-3 text-blue-100/70">
                <div className="flex justify-between">
                  <span>Monday - Sunday</span>
                  <span className="text-white font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="border-t border-white/10 pt-3">
                  <p className="text-yellow-400/80 text-sm flex items-center gap-2">
                    <i className="fas fa-star text-xs"></i>
                    24x7 priority support for retainer clients
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
              <p className="text-blue-200/50 text-sm flex items-start gap-3">
                <i className="fas fa-lock text-yellow-400/60 mt-0.5"></i>
                All communications are strictly confidential and protected under the Advocates Act, 1961. Your information will never be shared without your consent.
              </p>
            </div>
          </div>

          {/* Right Panel - Form */}
          <div className="bg-white p-10 rounded-2xl shadow-2xl">
            <h3 className="text-2xl font-bold mb-2 text-gray-900">
              Schedule a Consultation
            </h3>
            <p className="text-gray-500 mb-8 text-sm">
              Fill in the details below and our team will respond within 24 hours.
            </p>

            {!configValid && (
              <div className="mb-6 p-4 bg-yellow-50 border border-yellow-300 text-yellow-800 rounded-xl">
                <p className="font-medium">Email configuration not set up</p>
                <p className="text-sm">
                  Please set up your EmailJS environment variables to enable the
                  contact form.
                </p>
              </div>
            )}

            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-green-50 border border-green-300 text-green-800 rounded-xl">
                <p className="font-medium flex items-center gap-2">
                  <i className="fas fa-check-circle"></i>
                  Thank you for reaching out!
                </p>
                <p className="text-sm mt-1">
                  Our legal team will review your matter and respond promptly.
                </p>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-6 p-4 bg-red-50 border border-red-300 text-red-800 rounded-xl">
                <p className="font-medium">
                  Sorry, there was an error sending your message.
                </p>
                <p className="text-sm">
                  Please try again or contact us directly.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 focus:outline-none transition-all bg-gray-50/50"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91-XXXXXXXXXX"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 focus:outline-none transition-all bg-gray-50/50"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 focus:outline-none transition-all bg-gray-50/50"
                />
              </div>

              <div>
                <label
                  htmlFor="matter"
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                >
                  Nature of Legal Matter <span className="text-red-500">*</span>
                </label>
                <select
                  id="matter"
                  name="matter"
                  value={formData.matter}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 focus:outline-none transition-all bg-gray-50/50"
                >
                  <option value="">Select your concern</option>
                  <option value="litigation">
                    Litigation & Dispute Resolution
                  </option>
                  <option value="property">Property & Real Estate Law</option>
                  <option value="corporate">Corporate & Commercial Law</option>
                  <option value="transport">
                    Transport & Challan Compliance
                  </option>
                  <option value="family">Family & Matrimonial Law</option>
                  <option value="arbitration">Arbitration & ADR</option>
                  <option value="retainership">Legal Retainership</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                >
                  Brief Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your legal matter briefly — all information is kept strictly confidential."
                  rows={4}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 focus:outline-none resize-vertical transition-all bg-gray-50/50"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || !configValid}
                className={`w-full px-6 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-[1.02] shadow-lg text-lg ${
                  isSubmitting || !configValid
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-800 hover:to-blue-950 text-white shadow-blue-900/25"
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <i className="fas fa-spinner fa-spin"></i>
                    Sending...
                  </span>
                ) : !configValid ? (
                  "Email Not Configured"
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <i className="fas fa-paper-plane"></i>
                    Request Consultation
                  </span>
                )}
              </button>

              <p className="text-center text-gray-400 text-xs mt-3">
                By submitting, you agree to our privacy policy. We do not share your information.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
