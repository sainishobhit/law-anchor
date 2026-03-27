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
    <header className="bg-gray-950/90 backdrop-blur-md border-b border-white/5 fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection("home")}>
            <div className="w-9 h-9 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
              <i className="fas fa-balance-scale text-blue-900 text-sm"></i>
            </div>
            <span className="font-bold text-lg text-white tracking-tight">
              Saini & Singh
            </span>
          </div>

          <nav className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors duration-300 ${
                  activeSection === item.id
                    ? "text-yellow-400"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => scrollToSection("contact")}
            className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-blue-950 font-bold px-5 py-2.5 rounded-lg transition-all duration-300 text-sm shadow-lg shadow-yellow-500/10"
          >
            <i className="fas fa-phone text-xs"></i>
            Book Consultation
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
