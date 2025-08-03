import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedinIn, FaNodeJs, FaReact } from "react-icons/fa";
import { Link } from "react-scroll";
import { SiJavascript, SiMongodb } from "react-icons/si";
const Hero = () => {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>

        {/* Floating Code Elements */}
        <div className="absolute top-1/4 left-1/4 text-purple-400/20 text-6xl font-mono animate-float">
          {"<>"}
        </div>
        <div className="absolute bottom-1/4 right-1/4 text-cyan-400/20 text-6xl font-mono animate-float delay-1000">
          {"</>"}
        </div>
        <div className="absolute top-3/4 left-1/6 text-pink-400/20 text-4xl font-mono animate-float delay-500">
          {"{ }"}
        </div>
      </div>

      <div className="relative z-10 w-10/12 max-w-7xl mx-auto flex lg:flex-row flex-col-reverse items-center justify-center min-h-screen text-center lg:text-start py-20">
        {/* Text Section */}
        <div className="flex-1 space-y-8 lg:pr-8">
          {/* Greeting Animation */}
          <div className="relative overflow-hidden">
            <p className="text-cyan-400 text-lg md:text-xl font-semibold tracking-wider uppercase opacity-0 animate-[slideInLeft_1s_ease-out_0.5s_forwards]">
              Hello, I'm
            </p>
          </div>

          {/* Name with Gradient Animation */}
          <div className="relative overflow-hidden">
            <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight opacity-0 animate-[slideInLeft_1s_ease-out_0.8s_forwards]">
              <span className="bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
                Md Soriful
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                Hasan
              </span>
            </h1>
          </div>

          {/* Title with Typewriter Effect */}
          <div className="relative overflow-hidden">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-300 opacity-0 animate-[slideInLeft_1s_ease-out_1.1s_forwards]">
              <span className="relative">
                MERN Stack Web Developer
                <span className="absolute -right-2 top-0 w-0.5 h-full bg-cyan-400 animate-blink"></span>
              </span>
            </h2>
          </div>

          {/* Description */}
          <div className="relative overflow-hidden">
            <p className="text-gray-400 text-base md:text-lg max-w-2xl leading-relaxed opacity-0 animate-[slideInLeft_1s_ease-out_1.4s_forwards]">
              Crafting modern, scalable web applications with cutting-edge
              technologies. Passionate about creating seamless user experiences
              and robust backend solutions.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-8 opacity-0 animate-[slideInUp_1s_ease-out_1.7s_forwards]">
            {/* Primary CTA */}
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-2">
                Let's Connect
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>

            {/* Secondary CTA */}
            <button className="group relative overflow-hidden px-8 py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-2xl hover:border-purple-500 hover:text-white transition-all duration-300 hover:scale-105">
              <span className="relative z-10 flex items-center gap-2">
                View Resume
                <svg
                  className="w-5 h-5 transition-transform group-hover:-translate-y-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center lg:justify-start gap-4 pt-6 opacity-0 animate-[slideInUp_1s_ease-out_2s_forwards]">
            <span className="text-gray-400 text-sm font-medium">
              Follow me:
            </span>

            <div className="flex gap-4">
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

              {/* LinkedIn */}
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
          </div>

          {/* Scroll Indicator */}
          <div className="hidden lg:flex items-center gap-3 pt-12 opacity-0 animate-[slideInUp_1s_ease-out_2.3s_forwards]">
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-gray-600 to-transparent"></div>
            <span className="text-gray-500 text-sm rotate-90 whitespace-nowrap">
              Scroll to explore
            </span>
            <div className="w-6 h-10 border border-gray-600 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center lg:justify-end mb-8 lg:mb-0 opacity-0 animate-[slideInRight_1s_ease-out_1.2s_forwards]">
          <div className="relative group">
            {/* Decorative Elements */}
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-700"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-cyan-400/30 rounded-full animate-spin-slow"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-purple-400/30 rounded-full animate-spin-slow-reverse"></div>

            {/* Main Image */}
            <div className="relative z-10 w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-gray-700 group-hover:border-purple-500/50 transition-all duration-500 shadow-2xl group-hover:shadow-purple-500/25">
              <img
                src="/myphoto.png"
                alt="Md Soriful Hasan - MERN Stack Developer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Floating Tech Icons */}
            <div className="absolute top-12 -left-8 p-3 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-2xl shadow-lg animate-float">
              <SiJavascript size={24} color="#F7DF1E" />
            </div>
            <div className="absolute top-32 -right-8 p-3 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-2xl shadow-lg animate-float delay-500">
              <FaReact size={24} color="#61DBFB" />
            </div>
            <div className="absolute bottom-32 -left-8 p-3 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-2xl shadow-lg animate-float delay-1000">
              <FaNodeJs size={24} color="#3c873a" />
            </div>
            <div className="absolute bottom-12 -right-8 p-3 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-2xl shadow-lg animate-float delay-700">
              <SiMongodb size={24} color="#47A248" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-110 opacity-90 hover:opacity-100"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes blink {
          0%,
          50% {
            opacity: 1;
          }
          51%,
          100% {
            opacity: 0;
          }
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-slow-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-blink {
          animation: blink 1s infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 15s linear infinite;
        }

        .delay-500 {
          animation-delay: 0.5s;
        }

        .delay-700 {
          animation-delay: 0.7s;
        }

        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
};

export default Hero;
