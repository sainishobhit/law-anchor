import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonial from "./components/Testimonial";
import Services from "./components/Services";
import PracticeAreas from "./components/PracticeAreas";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const headerHeight = document.querySelector("header")?.offsetHeight || 0;

      sections.forEach((section) => {
        const sectionElement = section as HTMLElement;
        const sectionTop = sectionElement.offsetTop - headerHeight - 100;
        const sectionHeight = sectionElement.clientHeight;

        if (
          window.pageYOffset >= sectionTop &&
          window.pageYOffset < sectionTop + sectionHeight
        ) {
          setActiveSection(section.getAttribute("id") || "home");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    const headerHeight = document.querySelector("header")?.offsetHeight || 0;

    if (section) {
      const targetPosition = section.offsetTop - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />

      <main>
        <Hero scrollToSection={scrollToSection} />
        <WhyChooseUs />
        <Testimonial />
        <Services />
        <PracticeAreas />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
