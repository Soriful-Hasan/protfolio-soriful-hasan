import React, { useState } from "react";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { IoEyeSharp } from "react-icons/io5";
import { FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import Modal from "./Modal";
const Projects = () => {
  const projectsData = [
    {
      name: "Find It",
      repo_link: "https://github.com/Soriful-Hasan/find-it-client-project",
      category: "Lost and Found Item Platform",
      liveLink: "https://i.ibb.co/8LGZFCdY/image.png",
      technology: [
        { name: "JavaScript", icon: FaJs, color: "#F0DB4F" },
        { name: "React", icon: FaReact, color: "#61DBFB" },
        { name: "Node.js", icon: FaNodeJs, color: "#3C873A" },
        { name: "MongoDB", icon: SiMongodb, color: "#4DB33D" },
      ],
      improvements_future:
        "Add admin dashboard to manage reported posts and users.Enable OTP-based or phone number verification for more secure interactions.Implement notification system (email/SMS) when a matching item is found.Add real-time chat between finder and owner for faster communication.Improve search with filters by category, location, or date,",
      description:
        "Lost & Found Item Platform is a web-based application designed to help users easily post and search for lost or found items.The platform enables registered users to report their lost belongings by submitting detailed posts with item descriptions, images, and contact information",
      challenge_face:
        "Implementing role-based route protection to secure certain user actions.Handling image uploads and managing links through ImgBB.Structuring proper relationships between lost and found posts in the database.Managing asynchronous operations and form validations smoothly with React Hook Form.Ensuring responsive and consistent UI across different device sizes.",
      technology_stack:
        "Frontend: React.js, Tailwind CSSBackend: Express.js, Node.jsDatabase: MongoDBAuthentication: Firebase AuthenticationForm Validation & UI: React Hook Form, DaisyUI Image Hosting: ImgBB",
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
      ],
      description: "",
      category: "Roommate Find Platform",
      liveLink: "https://roommate-finder-45a3b.web.app/",
      image: "https://i.ibb.co/p6kxD3kt/Screenshot-5.png",
    },

    {
      name: "Pix Apps",
      repo_link: "https://github.com/Soriful-Hasan/pix-apps-project",
      category: "Roommate Find Platform",
      liveLink: "https://pixapps-ed3df.firebaseapp.com/",
      technology: [
        { name: "JavaScript", icon: FaJs, color: "#F0DB4F" },
        { name: "React", icon: FaReact, color: "#61DBFB" },
        { name: "Node.js", icon: FaNodeJs, color: "#3C873A" },
        { name: "MongoDB", icon: SiMongodb, color: "#4DB33D" },
      ],
      description:
        "This project is a web-based platform where users can post about lost or found itemsIt helps people to reconnect with their lost belongings by providing item details and contact information.Users can submit new lost found item reports with photos and descriptions.The website features easy search and filter options to find relevant items quickly.Built using React.js, Tailwind CSS, ",
      image: "https://i.ibb.co/pv8BrBCj/image.png",
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
    <div className="w-11/12 mx-auto px-4">
      <div className="text-center pt-10">
        <h2 className="text-3xl font-bold mb-12">My Projects</h2>
      </div>

      <div className="flex flex-col gap-12">
        {projectsData.map((data, i) => (
          <div
            key={i}
            className="flex flex-col xl:flex-row-reverse items-center gap-6 border bg-gray-50 border-gray-200 rounded-md overflow-hidden"
          >
            {/* Image Section */}
            <div className="w-full xl:w-1/2 h-full">
              <img
                src={data.image}
                alt=""
                className="w-full h-full object-cover rounded-t-md xl:rounded-none"
              />
            </div>

            {/* Content Section */}
            <div className="w-full xl:w-1/2 p-6 xl:ml-6">
              <h1 className="text-2xl lg:text-3xl font-semibold">
                {data.name}
              </h1>
              <p className="text-[#e65309] font-semibold mt-2">
                {data.category}
              </p>
              <div className="border-b mt-2 border-gray-200"></div>
              <p className="line-clamp-2 mt-4 text-sm leading-6 text-gray-600 text-justify">
                {data.description}
              </p>

              {/* Technology Stack */}
              <div className="flex flex-wrap gap-3 mt-6">
                {data?.technology?.map((tech, index) => {
                  const Icon = tech.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-sm border border-gray-300 bg-gray-100 px-4 py-2 rounded"
                    >
                      <Icon size={20} color={tech.color} />
                      {tech.name}
                    </div>
                  );
                })}
              </div>

              {/* Buttons */}
              <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <button
                  onClick={() => handleButtonClick("liveLink", data.liveLink)}
                  className="btn btn-outline flex gap-2 justify-center hover:bg-[#e65309] hover:text-white"
                >
                  Live Site <BsBoxArrowInUpRight />
                </button>
                <button
                  onClick={() => handleButtonClick("gitHub", data.repo_link)}
                  className="btn btn-outline flex gap-2 justify-center hover:bg-[#e65309] hover:text-white"
                >
                  Github <AiFillGithub />
                </button>

                <button className="btn btn-outline flex gap-2 justify-center hover:bg-[#e65309] hover:text-white">
                  Details <IoEyeSharp />{" "}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
