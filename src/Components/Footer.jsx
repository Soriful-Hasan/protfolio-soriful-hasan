import React from "react";
import { AiFillGithub } from "react-icons/ai";
import {
  FaLinkedinIn,
  FaSquareXTwitter,
  FaHeart,
  FaCode,
  FaRocket,
} from "react-icons/fa6";
import { HiMail, HiLocationMarker } from "react-icons/hi";

const ModernFooter = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    { name: "Web Development", href: "#services" },
    { name: "Frontend Design", href: "#services" },
    { name: "Backend API", href: "#services" },
    { name: "Full Stack", href: "#services" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>

        {/* Floating Code Elements */}
        <div className="absolute top-1/4 left-1/6 text-purple-400/10 text-4xl font-mono animate-float">
          {"</>"}
        </div>
        <div className="absolute bottom-1/4 right-1/6 text-cyan-400/10 text-4xl font-mono animate-float delay-1000">
          {"{ }"}
        </div>
        <div className="absolute top-3/4 left-1/4 text-pink-400/10 text-3xl font-mono animate-float delay-500">
          {"()"}
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10">
        {/* Top Section */}
        <div className="lg:w-10/12 w-full mx-auto px-4 pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center group">
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="relative w-14 h-14 bg-gradient-to-br from-slate-800 to-slate-900 border border-purple-500/30 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300">
                    <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      SH
                    </span>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Md Soriful Hasan
                  </h3>
                  <p className="text-cyan-400 font-medium">
                    MERN Stack Developer
                  </p>
                </div>
              </div>

              <p className="text-gray-400 leading-relaxed max-w-md">
                Passionate about crafting modern, scalable web applications with
                cutting-edge technologies. Let's build something amazing
                together!
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                  <HiMail className="text-cyan-400 text-lg" />
                  <span className="text-sm">sorifullhasan300@gmai.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400 hover:text-purple-400 transition-colors duration-300">
                  <HiLocationMarker className="text-purple-400 text-lg" />
                  <span className="text-sm">Sylhet, Bangladesh</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white relative">
                Quick Links
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400"></div>
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-all duration-300 text-sm flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white relative">
                Services
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"></div>
              </h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={service.name}>
                    <a
                      href={service.href}
                      className="text-gray-400 hover:text-white transition-all duration-300 text-sm flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Links Section */}
          <div className="mt-12 pt-8 border-t border-gray-700/50">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Social Icons */}
              <div className="flex items-center gap-4">
                <span className="text-gray-400 text-sm font-medium mr-2">
                  Follow me:
                </span>

                {/* GitHub */}
                <a
                  href="https://github.com/Soriful-Hasan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden p-3 bg-gray-800/50 border border-gray-700 rounded-full hover:border-purple-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25"
                >
                  <AiFillGithub
                    size={20}
                    className="text-gray-400 group-hover:text-white transition-colors duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                </a>

                <a
                  href="https://www.linkedin.com/in/md-soriful-hasan-53a9b52b3/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden p-3 bg-gray-800/50 border border-gray-700 rounded-full hover:border-cyan-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/25"
                >
                  <FaLinkedinIn
                    size={20}
                    className="text-gray-400 group-hover:text-white transition-colors duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                </a>

                {/* Twitter */}
                <a
                  href="https://x.com/hasan_soriful"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden p-3 bg-gray-800/50 border border-gray-700 rounded-full hover:border-pink-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/25"
                >
                  <FaSquareXTwitter
                    size={20}
                    className="text-gray-400 group-hover:text-white transition-colors duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                </a>
              </div>

              {/* Call to Action */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <span>Let's build something</span>
                  <FaRocket className="text-cyan-400 animate-bounce" />
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-semibold">
                    amazing!
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700/50 bg-slate-900/50 backdrop-blur-sm">
          <div className="lg:w-10/12 w-full mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Copyright */}
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <span>© 2025 Md Soriful Hasan</span>
                <span className="text-gray-600">|</span>
                <span>MERN Stack Developer</span>
                <span className="text-gray-600">|</span>
                <span className="flex items-center gap-1">
                  Made with{" "}
                  <FaHeart className="text-red-400 text-xs animate-pulse" /> and{" "}
                  <FaCode className="text-cyan-400 text-xs" />
                </span>
              </div>

              {/* Additional Info */}
              <div className="text-gray-500 text-xs">All rights reserved.</div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .delay-500 {
          animation-delay: 0.5s;
        }

        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </footer>
  );
};

export default ModernFooter;
