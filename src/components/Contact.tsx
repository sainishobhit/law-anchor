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
    // Validate EmailJS configuration
    const isValid = true; // Simplified for now
    setConfigValid(isValid);

    if (isValid) {
      // Initialize EmailJS with your public key
      emailjs.init("YOUR_PUBLIC_KEY");
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
        to_email: "sainishobhit24@gmail.com",
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        legal_matter: formData.matter,
        message: formData.message,
        reply_to: formData.email,
      };

      const result = await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
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
          <h2 className="section-title text-blue-900">Contact Us</h2>
          <p className="section-subtitle text-gray-600">
            Ready to discuss your legal needs? Get in touch with our expert
            team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-semibold mb-8 text-gray-800">
              Get In Touch
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full">
                  <i className="fas fa-map-marker-alt text-white"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Delhi Office</h4>
                  <p className="text-gray-600">[Full Address]</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full">
                  <i className="fas fa-phone text-white"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Phone</h4>
                  <p className="text-gray-600">+91-XXXXXXXXXX</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full">
                  <i className="fas fa-envelope text-white"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Email</h4>
                  <p className="text-gray-600">delhi@sainiandsingh.com</p>
                  <p className="text-gray-600">info@sainiandsingh.com</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl mt-8 border border-blue-200">
              <h4 className="text-lg font-semibold mb-4 text-blue-800">
                Business Hours
              </h4>
              <div className="space-y-2 text-gray-700">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p className="text-sm">
                  24x7 support available for retainer clients
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-semibold mb-8 text-gray-800">
              Schedule a Consultation
            </h3>

            {!configValid && (
              <div className="mb-6 p-4 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded-lg">
                <p className="font-medium">Email configuration not set up</p>
                <p className="text-sm">
                  Please set up your EmailJS environment variables to enable the
                  contact form.
                </p>
              </div>
            )}

            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                <p className="font-medium">Thank you for your message!</p>
                <p className="text-sm">
                  We will get back to you soon at {formData.email}
                </p>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                <p className="font-medium">
                  Sorry, there was an error sending your message.
                </p>
                <p className="text-sm">
                  Please try again or contact us directly.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block font-medium text-gray-700 mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block font-medium text-gray-700 mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block font-medium text-gray-700 mb-2"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="matter"
                  className="block font-medium text-gray-700 mb-2"
                >
                  Legal Matter *
                </label>
                <select
                  id="matter"
                  name="matter"
                  value={formData.matter}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
                >
                  <option value="">Select practice area</option>
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
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-medium text-gray-700 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Briefly describe your legal matter"
                  rows={4}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none resize-vertical transition-colors"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || !configValid}
                className={`w-full px-6 py-4 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg ${
                  isSubmitting || !configValid
                    ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700 text-white"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i>
                    Sending...
                  </>
                ) : !configValid ? (
                  "Email Not Configured"
                ) : (
                  "Schedule Consultation"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
