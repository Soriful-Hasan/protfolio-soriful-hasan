import React from "react";
import { PiIntersectSquareFill } from "react-icons/pi";
const AboutMe = () => {
  return (
    <div className="mt-20 mb-10 w-10/12 mx-auto min-h-screen">
      <div className="text-center mb-20">
        <h1 className="text-4xl font-Bold ">About Me</h1>
      </div>
      <div className=" flex justify-between ">
        <div className=" place-items-center flex-1">
          <div className="">
            <p className="flex items-center mb-8">
              <PiIntersectSquareFill /> introduction
            </p>

            <p>My Name is Soriful Hasan, i'am Full Stack web developer</p>
          </div>
        </div>
        <div className="flex-1">
          <h1>
            Hi, I'm Md Soriful Hasan — a passionate and self-motivated Web & App
            Developer from Bangladesh. I specialize in building modern,
            responsive, and user-friendly web applications using technologies
            like React, Tailwind CSS, and JavaScript. I love solving real-world
            problems through clean and efficient code. I enjoy learning new
            tools and technologies, collaborating with others, and turning ideas
            into functional digital products. Let's build something amazing
            together!
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
