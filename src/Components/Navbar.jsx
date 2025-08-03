import React, { useState, useEffect } from "react";
import { HiDownload } from "react-icons/hi";

const ModernNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-slate-900/95 backdrop-blur-xl border-b border-purple-500/20 shadow-lg shadow-purple-500/10">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute top-0 right-1/4 w-24 h-24 bg-cyan-500/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative lg:w-10/12 w-full mx-auto px-4 lg:px-0">
          <div className="flex justify-between items-center h-20">
            {/* Logo Section */}
            <div className="flex items-center group">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative w-12 h-12 bg-gradient-to-br from-slate-800 to-slate-900 border border-purple-500/30 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300 group-hover:scale-110">
                  <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    SH
                  </span>
                </div>
              </div>
              <div className="ml-3 hidden sm:block">
                <h1 className="text-lg font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Soriful Hasan
                </h1>
                <p className="text-xs text-gray-400">MERN Developer</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="group relative px-4 py-2 text-gray-300 hover:text-white transition-all duration-300 font-medium"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="relative z-10">{link.name}</span>

                  {/* Hover Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100"></div>

                  {/* Hover Border */}
                  <div className="absolute inset-0 border border-transparent group-hover:border-purple-500/30 rounded-xl transition-all duration-300"></div>

                  {/* Active Indicator */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-6 transition-all duration-300"></div>
                </a>
              ))}
            </div>

            {/* Resume Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* Resume Button */}
              <a
                href="/Resume of Md Soriful Hasan.pdf?download=1"
                download="MyResume.pdf"
                className="group relative overflow-hidden px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2 text-sm">
                  Resume
                  <HiDownload className="text-lg transition-transform group-hover:translate-y-0.5" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden relative p-2 text-gray-300 hover:text-white transition-colors duration-300"
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span
                    className={`w-full h-0.5 bg-current transition-all duration-300 ${
                      isMobileMenuOpen ? "rotate-45 translate-y-0.5" : ""
                    }`}
                  ></span>
                  <span
                    className={`w-full h-0.5 bg-current mt-1 transition-all duration-300 ${
                      isMobileMenuOpen ? "opacity-0" : ""
                    }`}
                  ></span>
                  <span
                    className={`w-full h-0.5 bg-current mt-1 transition-all duration-300 ${
                      isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 bg-slate-900/98 backdrop-blur-xl border-b border-purple-500/20 transition-all duration-500 ${
            isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div className="px-4 py-6 space-y-2">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="group flex items-center px-4 py-3 text-gray-300 hover:text-white transition-all duration-300 rounded-xl hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-purple-500/10 border border-transparent hover:border-purple-500/30"
                style={{
                  animationDelay: `${index * 50}ms`,
                  transform: isMobileMenuOpen
                    ? "translateX(0)"
                    : "translateX(-20px)",
                  opacity: isMobileMenuOpen ? 1 : 0,
                  transition: `all 0.3s ease ${index * 50}ms`,
                }}
              >
                <span className="text-cyan-400 mr-3">•</span>
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content overlap */}
      <div className="h-20"></div>

      <style jsx>{`
        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideInDown {
          animation: slideInDown 0.5s ease-out;
        }
      `}</style>
    </>
  );
};

export default ModernNavbar;
