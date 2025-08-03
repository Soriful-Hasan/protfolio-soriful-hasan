import React from "react";
import { Element } from "react-scroll";
const AboutMe = () => {
  return (
    <Element name="about">
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 py-20">
        <div className="w-11/12 max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              About Me
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mx-auto"></div>
          </div>

          {/* Main Content */}
          <div className="relative">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-cyan-500/5 rounded-3xl"></div>
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>

            <div className="relative bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl overflow-hidden">
              <div className="flex flex-col xl:flex-row">
                {/* Image Section */}
                <div className="xl:w-2/5 relative group">
                  <div className="relative overflow-hidden">
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-cyan-500/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                    {/* Profile Image */}
                    <img
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      src="https://images.unsplash.com/photo-1558346547-4439467bd1d5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="MD Soriful Hasan"
                    />

                    {/* Floating Elements */}
                    <div className="absolute top-8 left-8 p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full shadow-lg backdrop-blur-sm z-20">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>

                    <div className="absolute bottom-8 right-8 p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg backdrop-blur-sm z-20">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="xl:w-3/5 p-8 lg:p-12 space-y-8">
                  {/* Name and Title */}
                  <div className="space-y-4">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white">
                      MD SORIFUL HASAN
                    </h2>
                    <div className="inline-block px-6 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full">
                      <span className="text-lg font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                        Full Stack Web Developer
                      </span>
                    </div>
                  </div>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-3">
                    {[
                      "MongoDB",
                      "Express.js",
                      "React",
                      "Node.js",
                      "JavaScript",
                      "TypeScript",
                    ].map((skill, index) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-gray-700/50 text-gray-300 text-sm font-medium rounded-full border border-gray-600/50 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-cyan-500/20 hover:border-purple-500/50 hover:text-white transition-all duration-300 cursor-default"
                        style={{
                          animation: `slideInUp 0.6s ease-out ${
                            index * 0.1
                          }s both`,
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <div className="space-y-6 text-gray-300 leading-relaxed">
                    <div className="group">
                      <p className="transition-colors duration-300 group-hover:text-gray-200">
                        I'm a passionate{" "}
                        <span className="text-cyan-400 font-semibold">
                          Full Stack Web Developer
                        </span>{" "}
                        with practical experience in the{" "}
                        <span className="text-purple-400 font-semibold">
                          MERN stack
                        </span>
                        . I specialize in building modern, responsive, and
                        scalable web applications that address real-world
                        problems.
                      </p>
                    </div>

                    <div className="group">
                      <p className="transition-colors duration-300 group-hover:text-gray-200">
                        Beyond coding, I'm an avid{" "}
                        <span className="text-pink-400 font-semibold">
                          traveler
                        </span>{" "}
                        who draws inspiration from exploring new places. I'm
                        also a{" "}
                        <span className="text-green-400 font-semibold">
                          cricket enthusiast
                        </span>{" "}
                        who enjoys both playing and watching the sport. In my
                        free time, I love diving into personal projects and
                        solving coding challenges.
                      </p>
                    </div>

                    <div className="group">
                      <p className="transition-colors duration-300 group-hover:text-gray-200">
                        I value{" "}
                        <span className="text-yellow-400 font-semibold">
                          clean code
                        </span>
                        , thoughtful design, and seamless user experiences. Team
                        collaboration and problem-solving are areas where I
                        thrive. I'm committed to lifelong learning and
                        passionate about pushing my limits as a developer.
                      </p>
                    </div>

                    <div className="group">
                      <p className="transition-colors duration-300 group-hover:text-gray-200">
                        My goal is to grow continuously by learning advanced
                        technologies and modern frameworks. I aspire to work in
                        a
                        <span className="text-indigo-400 font-semibold">
                          {" "}
                          forward-thinking tech company
                        </span>{" "}
                        where I can contribute meaningfully to impactful
                        projects and evolve as a developer.
                      </p>
                    </div>
                  </div>

                  {/* Stats/Highlights */}
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
                    <div className="text-center p-4 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group">
                      <div className="text-2xl font-bold text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                        50+
                      </div>
                      <div className="text-sm text-gray-400 mt-1">
                        Projects Built
                      </div>
                    </div>

                    <div className="text-center p-4 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group">
                      <div className="text-2xl font-bold text-purple-400 group-hover:scale-110 transition-transform duration-300">
                        2+
                      </div>
                      <div className="text-sm text-gray-400 mt-1">
                        Years Experience
                      </div>
                    </div>

                    <div className="text-center p-4 bg-gradient-to-br from-green-500/10 to-teal-500/10 rounded-2xl border border-green-500/20 hover:border-green-500/40 transition-all duration-300 group col-span-2 lg:col-span-1">
                      <div className="text-2xl font-bold text-green-400 group-hover:scale-110 transition-transform duration-300">
                        ∞
                      </div>
                      <div className="text-sm text-gray-400 mt-1">
                        Learning Mode
                      </div>
                    </div>
                  </div>

                  {/* Contact Button */}
                  <div className="pt-6">
                    <button className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105">
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
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Custom Animations */}
        <style jsx>{`
          @keyframes slideInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    </Element>
  );
};

export default AboutMe;
