interface HeaderProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, scrollToSection }) => {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "practice-areas", label: "Practice Areas" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50 transition-transform duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-3">
            <i className="fas fa-balance-scale text-primary-600 text-2xl"></i>
            <span className="font-bold text-xl text-gray-800">
              Saini & Singh Associates
            </span>
          </div>

          <nav className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-colors duration-300 ${
                  activeSection === item.id
                    ? "text-primary-600"
                    : "text-gray-700 hover:text-primary-600"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => scrollToSection("contact")}
            className="btn btn-primary"
          >
            Book Consultation
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
