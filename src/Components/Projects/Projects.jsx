import React, { useState } from "react";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { IoEyeSharp } from "react-icons/io5";
import { SiFirebase } from "react-icons/si";
import { BsStack } from "react-icons/bs";
import { MdDescription } from "react-icons/md";
import { HiMiniSquare3Stack3D } from "react-icons/hi2";
import { FaChartLine } from "react-icons/fa";
import { FaLayerGroup } from "react-icons/fa";
import { FaSmileBeam } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";

import { FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { Element } from "react-scroll";
import Modal from "./Modal";
const Projects = () => {
  const projectsData = [
    {
      name: "Medi Ease",
      repo_link: "https://github.com/Soriful-Hasan/pix-apps-project",
      category: "Medical Camp Management System",
      liveLink: "https://mediease-f28e1.web.app/",
      challenge_face:
        "Building MediEase involved multiple challenges. Implementing role-based access and JWT authentication with Firebase Admin SDK required careful security planning. Integrating Stripe for secure payments was complex, especially with real-time validation and handling payment webhooks. Ensuring dashboard analytics were accurate and responsive across different user roles (organizer, admin, participant) demanded robust backend logic and frontend state management. Coordinating frontend and backend deployment separately (Vercel + Render) also introduced CORS and environment variable management complexities.",
      technology_stack:
        "MediEase is built with the MERN stack: MongoDB for data storage, Express.js and Node.js for the backend API and business logic, and React.js for the interactive frontend UI. Firebase Authentication is integrated for secure user login, alongside the Firebase Admin SDK on the backend for token verification and role management. Stripe handles secure payments, while JWT ensures protected routes. Tailwind CSS and DaisyUI power the responsive design, with Framer Motion providing smooth animations. Axios is used for frontend-backend communication, and the app is deployed on Vercel (frontend) and Render (backend).",

      improvements_future:
        "In the future, I plan to implement email notifications for registration and payment confirmations. Enhancing the dashboard with more detailed filters and time-based analytics will improve usability. Real-time updates for camp registration status, and integrating admin moderation for feedback will add value. I also aim to support multi-language UI, add a medical document upload system for participants, and improve mobile performance. Turning MediEase into a PWA and adding SEO optimizations will help reach more users and provide a more professional experience.",

      technology: [
        { name: "JavaScript", icon: FaJs, color: "#F0DB4F" },
        { name: "React", icon: FaReact, color: "#61DBFB" },
        { name: "Node.js", icon: FaNodeJs, color: "#3C873A" },
        { name: "MongoDB", icon: SiMongodb, color: "#4DB33D" },
        { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      ],
      description:
        "MediEase is a full-stack web application designed to streamline the organization and participation of medical camps. Inspired by real-world healthcare management needs, the platform allows organizers to create and manage camps while participants can register, make secure payments, and submit feedback. With role-based dashboards, analytics, and a clean, responsive interface, MediEase enhances communication, efficiency, and transparency in organizing health events. Built with the MERN stack, Firebase Authentication, and Stripe, the app provides a complete end-to-end solution for medical camp administration and participation.",

      image: "https://i.ibb.co/vCcLJm7Y/image.png",
    },
    {
      name: "Find It",
      repo_link: "https://github.com/Soriful-Hasan/find-it-client-project",
      category: "Lost and Found Item Tracker",
      liveLink: "https://assignment-eleven-8c528.web.app/",
      technology: [
        { name: "JavaScript", icon: FaJs, color: "#F0DB4F" },
        { name: "React", icon: FaReact, color: "#61DBFB" },
        { name: "Node.js", icon: FaNodeJs, color: "#3C873A" },
        { name: "MongoDB", icon: SiMongodb, color: "#4DB33D" },
        { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      ],
      improvements_future:
        "Add admin dashboard to manage reported posts and users.Enable OTP-based or phone number verification for more secure interactions.Implement notification system (email/SMS) when a matching item is found.Add real-time chat between finder and owner for faster communication.Improve search with filters by category, location, or date,",
      description:
        "Find It is a full-stack web application designed to help users report and recover lost or found items. Users can create detailed posts about items they've lost or found, including descriptions, contact numbers, and email information. The platform features individual item detail pages for better clarity and communication. Firebase Authentication is used for secure login and user identity management. The frontend is developed with React.js, Tailwind CSS, and DaisyUI, ensuring a clean and responsive UI. On the backend, Express.js, MongoDB, and JWT tokens are used to manage and protect user data and API routes.",
      challenge_face:
        "Implementing role-based route protection to secure certain user actions.Handling image uploads and managing links through ImgBB.Structuring proper relationships between lost and found posts in the database.Managing asynchronous operations and form validations smoothly with React Hook Form.Ensuring responsive and consistent UI across different device sizes.",
      technology_stack:
        "This project uses React.js with Tailwind CSS for a fast, responsive frontend. The backend is powered by Express.js on Node.js, with data stored in MongoDB. Authentication is managed securely via Firebase Authentication, while forms use React Hook Form and DaisyUI for smooth validation and styling. Images are hosted externally using ImgBB for efficient delivery.",
      image: "https://i.ibb.co/8LGZFCdY/image.png",
    },
    {
      name: "Find Mate",
      repo_link: "https://github.com/Soriful-Hasan/find-mate-client",
      technology: [
        { name: "JavaScript", icon: FaJs, color: "#F0DB4F" },
        { name: "React", icon: FaReact, color: "#61DBFB" },
        { name: "Node.js", icon: FaNodeJs, color: "#3C873A" },
        { name: "MongoDB", icon: SiMongodb, color: "#4DB33D" },
        { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      ],
      description:
        "Find Mate is a full-stack web application designed to help users find suitable roommates easily and efficiently. Users can create posts with room details including location, rent, and contact information. The platform supports secure authentication via Firebase, ensuring only registered users can create or respond to posts. On the frontend, the UI is built using React.js, Tailwind CSS, and DaisyUI for a modern and responsive design. The backend is powered by Express.js and MongoDB for efficient data handling and storage. It's an ideal solution for students, job holders, or anyone looking to share accommodation.",
      technology_stack:
        "Find Mate features a responsive and interactive frontend built with React.js, styled using Tailwind CSS and DaisyUI to create a clean and modern user interface. User authentication and secure access are managed through Firebase Authentication, ensuring only registered users can post or respond. The backend is developed with Express.js, handling API requests and server-side logic. MongoDB is used as the database for flexible and scalable storage of user and roommate listing data. This technology stack ensures a seamless, efficient, and secure platform for finding and sharing accommodation.",
      challenge_face:
        "During the Find Mate project, managing secure user authentication and integrating it smoothly with the frontend was challenging. Handling real-time data updates and ensuring efficient communication between Express.js and MongoDB required careful planning. Designing a responsive UI with Tailwind CSS and DaisyUI to work seamlessly across devices took extra effort. Also, organizing and validating user input to maintain data integrity was a key hurdle",
      category: "Roommate Find Platform",
      improvements_future:
        "In the future, adding real-time chat between roommates could enhance user interaction. Implementing advanced search filters and map integration would improve usability. Enhancing security with role-based access control and multi-factor authentication can strengthen protection. Also, optimizing performance for large data sets and adding mobile app support would make the platform more robust and accessible.",
      liveLink: "https://roommate-finder-45a3b.web.app/",
      image: "https://i.ibb.co/p6kxD3kt/Screenshot-5.png",
    },
  ];

  const handleButtonClick = (type, link) => {
    if (type === "gitHub") {
      window.open(link);
    } else if (type === "liveLink") {
      window.open(link);
    } else {
      alert("link not found");
    }
  };
  return (
    <Element name="projects">
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="w-11/12 max-w-7xl mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-20">
            <div className="inline-block">
              <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 animate-pulse">
                Recent Projects
              </h2>
              <div className="h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full transform scale-x-0 animate-[scaleX_1s_ease-in-out_0.5s_forwards] origin-left"></div>
            </div>
            <p className="text-gray-300 text-lg mt-6 max-w-2xl mx-auto opacity-0 animate-[fadeInUp_1s_ease-out_1s_forwards]">
              Discover my latest work featuring cutting-edge technologies and
              innovative solutions
            </p>
          </div>

          {/* Projects Grid */}
          <div className="flex flex-col gap-16">
            {projectsData.map((data, i) => (
              <div
                key={i}
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-700 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2 ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } flex flex-col lg:flex`}
                style={{
                  animation: `fadeInUp 0.8s ease-out ${i * 0.2}s both`,
                }}
              >
                {/* Animated Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                {/* Image Section */}
                <div className="relative lg:w-1/2 h-80 lg:h-auto overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                  <img
                    src={data.image}
                    alt={data.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Floating Category Badge */}
                  <div className="absolute top-6 left-6 z-20">
                    <span className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium rounded-full shadow-lg backdrop-blur-sm">
                      {data.category}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="relative lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center z-10">
                  <div className="space-y-6">
                    {/* Project Title */}
                    <h1 className="text-3xl lg:text-4xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-500">
                      {data.name}
                    </h1>

                    {/* Description */}
                    <p className="text-gray-300 text-base leading-relaxed line-clamp-4 group-hover:text-gray-200 transition-colors duration-300">
                      {data.description}
                    </p>

                    {/* Technology Stack */}
                    <div className="flex flex-wrap gap-3">
                      {data?.technology?.map((tech, index) => {
                        const Icon = tech.icon;
                        return (
                          <div
                            key={index}
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/70 border border-gray-600/50 text-sm text-gray-300 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 hover:border-purple-500/50 hover:text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
                            style={{
                              animation: `slideInLeft 0.6s ease-out ${
                                index * 0.1
                              }s both`,
                            }}
                          >
                            <Icon size={18} color={tech.color} />
                            <span className="font-medium">{tech.name}</span>
                          </div>
                        );
                      })}
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
                      <button
                        onClick={() =>
                          handleButtonClick("liveLink", data.liveLink)
                        }
                        className="group/btn relative overflow-hidden px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          Live Site{" "}
                          <BsBoxArrowInUpRight className="transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                      </button>

                      <button
                        onClick={() =>
                          handleButtonClick("gitHub", data.repo_link)
                        }
                        className="group/btn relative overflow-hidden px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-800 text-white font-semibold rounded-xl border border-gray-600 hover:border-purple-500 shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          GitHub{" "}
                          <AiFillGithub className="transition-transform group-hover/btn:rotate-12" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                      </button>

                      <button
                        onClick={() =>
                          document.getElementById(`modal_${i}`).showModal()
                        }
                        className="group/btn relative overflow-hidden px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          Details{" "}
                          <IoEyeSharp className="transition-transform group-hover/btn:scale-110" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                      </button>
                    </div>
                  </div>

                  {/* Enhanced Modal */}
                  <dialog id={`modal_${i}`} className="modal backdrop-blur-sm">
                    <div className="modal-box w-11/12 max-w-6xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl shadow-2xl">
                      {/* Modal Header */}
                      <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-700">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                          {data.name}
                        </h3>
                        <form method="dialog">
                          <button className="btn btn-circle btn-ghost text-gray-400 hover:text-white hover:bg-red-500/20">
                            ✕
                          </button>
                        </form>
                      </div>

                      {/* Modal Content */}
                      <div className="space-y-8">
                        {/* Main Technology */}
                        <div className="group">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-blue-500/20 rounded-lg">
                              <FaLayerGroup color="#3B82F6" size={20} />
                            </div>
                            <h4 className="text-lg font-semibold text-white">
                              Main Technology
                            </h4>
                          </div>
                          <p className="text-gray-300 pl-11 leading-relaxed">
                            {data.technology_stack}
                          </p>
                        </div>

                        <div className="border-t border-gray-700"></div>

                        {/* Challenge */}
                        <div className="group">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-amber-500/20 rounded-lg">
                              <FaSmileBeam color="#F59E0B" size={20} />
                            </div>
                            <h4 className="text-lg font-semibold text-white">
                              Challenges Faced
                            </h4>
                          </div>
                          <p className="text-gray-300 pl-11 leading-relaxed">
                            {data.challenge_face}
                          </p>
                        </div>

                        <div className="border-t border-gray-700"></div>

                        {/* Future Improvements */}
                        <div className="group">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-green-500/20 rounded-lg">
                              <FaChartLine color="#10B981" size={20} />
                            </div>
                            <h4 className="text-lg font-semibold text-white">
                              Future Improvements
                            </h4>
                          </div>
                          <p className="text-gray-300 pl-11 leading-relaxed">
                            {data.improvements_future}
                          </p>
                        </div>

                        <div className="border-t border-gray-700"></div>

                        {/* Description */}
                        <div className="group">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-purple-500/20 rounded-lg">
                              <FaFileAlt color="#8B5CF6" size={20} />
                            </div>
                            <h4 className="text-lg font-semibold text-white">
                              Project Description
                            </h4>
                          </div>
                          <p className="text-gray-300 pl-11 leading-relaxed">
                            {data.description}
                          </p>
                        </div>
                      </div>

                      {/* Modal Footer */}
                      <div className="modal-action mt-8 pt-6 border-t border-gray-700">
                        <form method="dialog">
                          <button className="btn bg-gradient-to-r from-red-500 to-pink-500 text-white border-none hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300">
                            Close
                          </button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Custom CSS for animations */}
        <style jsx>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes scaleX {
            from {
              transform: scaleX(0);
            }
            to {
              transform: scaleX(1);
            }
          }

          .line-clamp-4 {
            display: -webkit-box;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `}</style>
      </div>
    </Element>
  );
};

export default Projects;
