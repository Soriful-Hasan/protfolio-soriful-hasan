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

const Skills = () => {
  return (
    <div className="w-10/12 mx-auto mt-10">
      <div className="text-center text-4xl font-bold">
        <h1>Skills & Technologies</h1>
      </div>

      {/* First Row */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 text-center mt-10 gap-4 ">
        <div className="border flex items-center justify-center gap-2 border-gray-200 font-semibold hover:border-[#e65309] flex-1 p-4 rounded-md bg-gray-100">
          <SiJavascript size={20} color="#e65309" />
          JavaScript
        </div>

        <div className="border flex items-center justify-center gap-2 border-gray-200 font-semibold hover:border-[#e65309] flex-1 p-4 rounded-md bg-gray-100">
          <FaReact size={20} color="#61DBFB" />
          React
        </div>

        <div className="border flex items-center justify-center gap-2 border-gray-200 font-semibold hover:border-[#e65309] flex-1 p-4 rounded-md bg-gray-100">
          <SiMongodb size={20} color="#47A248" />
          MongoDB
        </div>

        <div className="border flex items-center justify-center gap-2 border-gray-200 font-semibold hover:border-[#e65309] flex-1 p-4 rounded-md bg-gray-100">
          <SiExpress size={20} color="#000000" />
          Express.js
        </div>

        <div className="border flex items-center justify-center gap-2 border-gray-200 font-semibold hover:border-[#e65309] flex-1 p-4 rounded-md bg-gray-100">
          <SiFirebase size={20} color="#FFCA28" />
          Firebase
        </div>

        <div className="border flex items-center justify-center gap-2 border-gray-200 font-semibold hover:border-[#e65309] flex-1 p-4 rounded-md bg-gray-100">
          <FaHtml5 size={20} color="#E44D26" />
          HTML5
        </div>
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6  text-center mt-10 gap-4 ">
        <div className="border flex items-center justify-center gap-2 border-gray-200 font-semibold hover:border-[#e65309] flex-1 p-4 rounded-md bg-gray-100">
          <FaNodeJs size={20} color="#3c873a" />
          Node.js
        </div>

        <div className="border flex items-center justify-center gap-2 border-gray-200 font-semibold hover:border-[#e65309] flex-1 p-4 rounded-md bg-gray-100">
          <FaCss3Alt size={20} color="#264de4" />
          CSS3
        </div>

        <div className="border flex items-center justify-center gap-2 border-gray-200 font-semibold hover:border-[#e65309] flex-1 p-4 rounded-md bg-gray-100">
          <SiTailwindcss size={20} color="#38BDF8" />
          Tailwind CSS
        </div>

        <div className="border flex items-center justify-center gap-2 border-gray-200 font-semibold hover:border-[#e65309] flex-1 p-4 rounded-md bg-gray-100">
          <FaGitAlt size={20} color="#f1502f" />
          Git
        </div>

        <div className="border flex items-center justify-center gap-2 border-gray-200 font-semibold hover:border-[#e65309] flex-1 p-4 rounded-md bg-gray-100">
          <SiPostman size={20} color="#FF6C37" />
          Postman
        </div>

        <div className="border flex items-center justify-center gap-2 border-gray-200 font-semibold hover:border-[#e65309] flex-1 p-4 rounded-md bg-gray-100">
          <SiFigma size={20} color="#F24E1E" />
          Figma
        </div>
      </div>
    </div>
  );
};

export default Skills;
