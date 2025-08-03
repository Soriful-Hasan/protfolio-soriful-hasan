import React from "react";
import EmailSend from "./EmailSend";
import { Element } from "react-scroll";
import { FaLinkedinIn } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiFillGithub } from "react-icons/ai";

const ContactMe = () => {
  return (
    <Element name="contact">
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="w-11/12 max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              Let's Work Together
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mx-auto mb-6"></div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how we can bring your ideas
              to life with modern web technologies.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl blur-xl"></div>
                <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 space-y-8">
                  <div className="space-y-6">
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
                      Get In Touch
                    </h3>

                    <p className="text-gray-300 leading-relaxed">
                      Ready to start your next project? I'm always excited to
                      work on new challenges and help bring innovative ideas to
                      life. Let's connect and discuss how we can create
                      something amazing together.
                    </p>
                  </div>

                  {/* Contact Details */}
                  <div className="space-y-6">
                    {/* Email */}
                    <div className="flex items-center gap-4 group">
                      <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl border border-cyan-500/30 group-hover:border-cyan-500/50 transition-all duration-300">
                        <svg
                          className="w-6 h-6 text-cyan-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Email Address</p>
                        <a
                          href="mailto:sorifulhasan.web@gmail.com"
                          className="text-white font-semibold hover:text-cyan-400 transition-colors duration-300"
                        >
                          sorifulhasan.web@gmail.com
                        </a>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center gap-4 group">
                      <div className="p-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl border border-green-500/30 group-hover:border-green-500/50 transition-all duration-300">
                        <svg
                          className="w-6 h-6 text-green-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Phone Number</p>
                        <a
                          href="tel:+8801775055569"
                          className="text-white font-semibold hover:text-green-400 transition-colors duration-300"
                        >
                          +880 177 505 5569
                        </a>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-4 group">
                      <div className="p-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl border border-purple-500/30 group-hover:border-purple-500/50 transition-all duration-300">
                        <svg
                          className="w-6 h-6 text-purple-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Location</p>
                        <p className="text-white font-semibold">
                          Dhaka, Bangladesh
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="pt-6 border-t border-gray-700">
                    <p className="text-gray-400 text-sm mb-4">
                      Connect with me on social media
                    </p>
                    <div className="flex gap-4">
                      <a
                        href="https://github.com/Soriful-Hasan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gray-700/50 border border-gray-600 rounded-2xl hover:border-purple-500 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300 hover:scale-110 group"
                      >
                        <AiFillGithub
                          size={24}
                          className="text-gray-400 group-hover:text-white transition-colors duration-300"
                        />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/md-soriful-hasan-53a9b52b3/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gray-700/50 border border-gray-600 rounded-2xl hover:border-cyan-500 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 transition-all duration-300 hover:scale-110 group"
                      >
                        <FaLinkedinIn
                          size={24}
                          className="text-gray-400 group-hover:text-white transition-colors duration-300"
                        />
                      </a>
                      <a
                        href="https://x.com/hasan_soriful"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gray-700/50 border border-gray-600 rounded-2xl hover:border-pink-500 hover:bg-gradient-to-r hover:from-pink-500/20 hover:to-red-500/20 transition-all duration-300 hover:scale-110 group"
                      >
                        <FaSquareXTwitter
                          size={24}
                          className="text-gray-400 group-hover:text-white transition-colors duration-300"
                        />
                      </a>
                    </div>
                  </div>

                  {/* Response Time */}
                  <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-2xl p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <p className="text-green-400 font-semibold text-sm">
                        Usually responds within 24 hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3xl blur-xl"></div>
              <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8">
                <div className="mb-8">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    Send Me A Message
                  </h3>
                  <p className="text-gray-400">
                    Fill out the form below and I'll get back to you as soon as
                    possible.
                  </p>
                </div>

                {/* Enhanced Form Wrapper */}
                <div className="space-y-6">
                  <EmailSend />

                  {/* Additional Contact Options */}
                  <div className="pt-6 border-t border-gray-700">
                    <p className="text-gray-400 text-sm mb-4">
                      Prefer other ways to connect?
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <a
                        href="mailto:sorifulhasan.web@gmail.com"
                        className="flex items-center gap-3 p-4 bg-gray-700/30 border border-gray-600 rounded-2xl hover:border-cyan-500 hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-purple-500/10 transition-all duration-300 group"
                      >
                        <svg
                          className="w-5 h-5 text-cyan-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm">
                          Direct Email
                        </span>
                      </a>

                      <a
                        href="https://wa.me/8801835458727"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-4 bg-gray-700/30 border border-gray-600 rounded-2xl hover:border-green-500 hover:bg-gradient-to-r hover:from-green-500/10 hover:to-emerald-500/10 transition-all duration-300 group"
                      >
                        <svg
                          className="w-5 h-5 text-green-400"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106" />
                        </svg>
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm">
                          WhatsApp
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="inline-block bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 max-w-2xl">
              <h4 className="text-2xl font-bold text-white mb-4">
                Ready to Start Your Project?
              </h4>
              <p className="text-gray-300 mb-6">
                Let's discuss your ideas and create something extraordinary
                together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:sorifulhasan.web@gmail.com"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
                >
                  Start a Conversation
                </a>
                <a
                  href="tel:+8801775055569"
                  className="px-8 py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-2xl hover:border-purple-500 hover:text-white transition-all duration-300 hover:scale-105"
                >
                  Schedule a Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default ContactMe;
