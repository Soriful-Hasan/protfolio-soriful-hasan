import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiTailwindcss,
  SiPostman,
  SiFigma,
} from "react-icons/si";
import { Element } from "react-scroll";

const Skills = () => {
  return (
    <Element name="skills">
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="w-11/12 max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              Skills & Technologies
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mx-auto mb-6"></div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Crafting digital experiences with cutting-edge technologies and
              modern frameworks
            </p>
          </div>

          {/* Skills Categories */}
          <div className="space-y-16">
            {/* Frontend Technologies */}
            <div className="relative">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl shadow-lg">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm2 2a1 1 0 000 2h.01a1 1 0 100-2H5zm3 0a1 1 0 000 2h3a1 1 0 100-2H8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-white">
                  Frontend Development
                </h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {[
                  {
                    icon: SiJavascript,
                    name: "JavaScript",
                    color: "#F7DF1E",
                    level: 90,
                  },
                  { icon: FaReact, name: "React", color: "#61DBFB", level: 85 },
                  { icon: FaHtml5, name: "HTML5", color: "#E44D26", level: 95 },
                  {
                    icon: FaCss3Alt,
                    name: "CSS3",
                    color: "#264de4",
                    level: 90,
                  },
                  {
                    icon: SiTailwindcss,
                    name: "Tailwind CSS",
                    color: "#38BDF8",
                    level: 88,
                  },
                ].map((skill, index) => (
                  <div
                    key={skill.name}
                    className="group relative overflow-hidden bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2"
                    style={{
                      animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`,
                    }}
                  >
                    {/* Background Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative z-10 text-center space-y-4">
                      <div className="flex justify-center">
                        <div className="p-4 bg-gray-700/50 rounded-2xl group-hover:bg-gradient-to-br group-hover:from-purple-500/20 group-hover:to-cyan-500/20 transition-all duration-500 group-hover:scale-110">
                          <skill.icon size={32} color={skill.color} />
                        </div>
                      </div>

                      <h3 className="text-white font-semibold text-lg group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                        {skill.name}
                      </h3>

                      {/* Skill Level Bar */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Proficiency</span>
                          <span className="text-cyan-400 font-semibold">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-cyan-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{
                              width: `${skill.level}%`,
                              animation: `fillBar 1.5s ease-out ${
                                index * 0.2
                              }s both`,
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend Technologies */}
            <div className="relative">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl shadow-lg">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                      clipRule="evenodd"
                    />
                    <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V9a1 1 0 00-1-1h-1v3a2 2 0 01-2 2H5.828l1.086 1.086A1 1 0 115.5 15.5L3 13h2.172a1 1 0 00.707-.293l3-3a1 1 0 111.414 1.414L8.586 13H10a1 1 0 001-1V7z" />
                  </svg>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-white">
                  Backend Development
                </h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {[
                  {
                    icon: FaNodeJs,
                    name: "Node.js",
                    color: "#3c873a",
                    level: 85,
                  },
                  {
                    icon: SiExpress,
                    name: "Express.js",
                    color: "#FFFFFF",
                    level: 80,
                  },
                  {
                    icon: SiMongodb,
                    name: "MongoDB",
                    color: "#47A248",
                    level: 82,
                  },
                  {
                    icon: SiFirebase,
                    name: "Firebase",
                    color: "#FFCA28",
                    level: 75,
                  },
                ].map((skill, index) => (
                  <div
                    key={skill.name}
                    className="group relative overflow-hidden bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-green-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/20 hover:-translate-y-2"
                    style={{
                      animation: `slideInUp 0.6s ease-out ${
                        (index + 5) * 0.1
                      }s both`,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative z-10 text-center space-y-4">
                      <div className="flex justify-center">
                        <div className="p-4 bg-gray-700/50 rounded-2xl group-hover:bg-gradient-to-br group-hover:from-green-500/20 group-hover:to-emerald-500/20 transition-all duration-500 group-hover:scale-110">
                          <skill.icon size={32} color={skill.color} />
                        </div>
                      </div>

                      <h3 className="text-white font-semibold text-lg group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-emerald-400 group-hover:bg-clip-text transition-all duration-300">
                        {skill.name}
                      </h3>

                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Proficiency</span>
                          <span className="text-green-400 font-semibold">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{
                              width: `${skill.level}%`,
                              animation: `fillBar 1.5s ease-out ${
                                (index + 5) * 0.2
                              }s both`,
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Others */}
            <div className="relative">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl shadow-lg">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-white">
                  Tools & Technologies
                </h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {[
                  { icon: FaGitAlt, name: "Git", color: "#f1502f", level: 85 },
                  {
                    icon: SiPostman,
                    name: "Postman",
                    color: "#FF6C37",
                    level: 80,
                  },
                  { icon: SiFigma, name: "Figma", color: "#F24E1E", level: 70 },
                ].map((skill, index) => (
                  <div
                    key={skill.name}
                    className="group relative overflow-hidden bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-orange-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/20 hover:-translate-y-2"
                    style={{
                      animation: `slideInUp 0.6s ease-out ${
                        (index + 9) * 0.1
                      }s both`,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative z-10 text-center space-y-4">
                      <div className="flex justify-center">
                        <div className="p-4 bg-gray-700/50 rounded-2xl group-hover:bg-gradient-to-br group-hover:from-orange-500/20 group-hover:to-red-500/20 transition-all duration-500 group-hover:scale-110">
                          <skill.icon size={32} color={skill.color} />
                        </div>
                      </div>

                      <h3 className="text-white font-semibold text-lg group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-red-400 group-hover:bg-clip-text transition-all duration-300">
                        {skill.name}
                      </h3>

                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Proficiency</span>
                          <span className="text-orange-400 font-semibold">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{
                              width: `${skill.level}%`,
                              animation: `fillBar 1.5s ease-out ${
                                (index + 9) * 0.2
                              }s both`,
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Summary */}
            <div className="mt-16 text-center">
              <div className="inline-block bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Always Learning, Always Growing
                </h3>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  Passionate about staying updated with the latest technologies
                  and best practices in web development. Currently exploring
                  advanced React patterns, microservices architecture, and cloud
                  technologies.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Custom Animations */}
        <style jsx>{`
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

          @keyframes fillBar {
            from {
              width: 0%;
            }
            to {
              width: var(--target-width);
            }
          }
        `}</style>
      </div>
    </Element>
  );
};

export default Skills;
