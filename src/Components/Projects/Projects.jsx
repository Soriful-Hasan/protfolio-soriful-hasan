import React from "react";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { IoEyeSharp } from "react-icons/io5";
const Projects = () => {
  const projectsData = [
    {
      name: "Find Mate",
      repo_link: "https://github.com/Soriful-Hasan/find-mate-client",
      description:
        "This project is a web-based platform where users can post about lost or found itemsIt helps people to reconnect with their lost belongings by providing item details and contact information.Users can submit new lost found item reports with photos and descriptions.The website features easy search and filter options to find relevant items quickly.Built using React.js, Tailwind CSS, and Firebase for smooth user experience and data management",
      category: "Roommate Find Platform",
      technology: ["JavaScript", "React", "Node.js", "Mongo DB"],
      liveLink: "https://roommate-finder-45a3b.web.app/",
      image:
        "https://images.unsplash.com/photo-1642132652803-01f9738d0446?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Find It",
      repo_link: "https://github.com/Soriful-Hasan/find-it-client-project",
      category: "Lost and Found Item Platform",
      technology: ["JavaScript", "React", "Node.js", "Mongo DB"],
      liveLink: "https://assignment-eleven-8c528.web.app/",
      description:
        "This project is a web-based platform where users can post about lost or found itemsIt helps people to reconnect with their lost belongings by providing item details and contact information.Users can submit new lost found item reports with photos and descriptions.The website features easy search and filter options to find relevant items quickly.Built using React.js, Tailwind CSS, ",
      image:
        "https://images.unsplash.com/photo-1642132652859-3ef5a1048fd1?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Pix Apps",
      repo_link: "https://github.com/Soriful-Hasan/pix-apps-project",
      category: "Roommate Find Platform",
      technology: ["JavaScript", "React"],
      liveLink: "https://pixapps-ed3df.firebaseapp.com/",
      description:
        "This project is a web-based platform where users can post about lost or found itemsIt helps people to reconnect with their lost belongings by providing item details and contact information.Users can submit new lost found item reports with photos and descriptions.The website features easy search and filter options to find relevant items quickly.Built using React.js, Tailwind CSS, ",
      image:
        "https://images.unsplash.com/photo-1642132652860-603f4e3c19b7?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    <div className="w-10/12 mx-auto my-10 ">
      <div className="text-center pt-10">
        <h2 className="text-3xl font-bold mb-20">My Projects</h2>
      </div>
      <div className="flex flex-col gap-8 ">
        {projectsData.map((data) => (
          <div className="flex flex-row-reverse gap-4 border bg-gray-50 border-gray-200 rounded-md">
            <div className="flex-1">
              <img src={data.image} alt="" />
            </div>
            <div className="flex-1 ml-8  mt-4">
              <p className="text-[#e65309] font-semibold p-2  text-sm ">
                Lost & Found Platform
              </p>
              <h1 className="text-4xl font-semibold">{data.name}</h1>
              <p className="mt-4 w-xl text-sm text-start text-gray-600">
                {data.description}
              </p>
              <div className="flex gap-4 mt-4">
                {data.technology.map((skills) => (
                  <div className="badge text-sm font-semibold text-[#e65309]  badge-outline badge-success">
                    {skills}
                  </div>
                ))}
              </div>
              <div className="border-b mt-4 border-dashed border-gray-300"></div>
              <div className="mt-8 flex gap-10">
                <button
                  onClick={() => handleButtonClick("liveLink", data.liveLink)}
                  className="btn btn-outline flex gap-2  hover:bg-[#e65309] hover:text-white"
                >
                  Live Site
                  <BsBoxArrowInUpRight />
                </button>
                <button
                  onClick={() => handleButtonClick("gitHub", data.repo_link)}
                  className="btn btn-outline flex gap-2  hover:bg-[#e65309] hover:text-white"
                >
                  Github <AiFillGithub />
                </button>
                <button className="btn btn-outline flex gap-2  hover:bg-[#e65309] hover:text-white">
                  Details <IoEyeSharp />
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
