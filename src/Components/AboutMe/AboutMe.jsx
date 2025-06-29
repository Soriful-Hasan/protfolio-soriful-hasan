import React from "react";
import { PiIntersectSquareFill } from "react-icons/pi";
import { AiFillGithub } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
const AboutMe = () => {
  return (
    <div className="mt-20   mb-20">
      <div className=" w-10/12 mx-auto  mt-20 flex-col xl:flex-row flex justify-between gap-20 p-4">
        <div className=" place-items-center flex-1">
          <div className="">
            <img
              className="rounded-md"
              src="https://images.unsplash.com/photo-1558346547-4439467bd1d5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
        <div className="flex-1 space-y-4">
          <div className=" text-4xl font-bold">
            <h1>About Me</h1>
          </div>
          <h2 className="font-semibold">
            MD SORIFUL HASAN – FULL STACK WEB DEVELOPER
          </h2>
          <div className="border-b border-gray-100"></div>
          <p className="text-sm text-gray-600 letter  leading-8 tracking-wide space-y-4">
            I’m a passionate Full Stack Web Developer with hands-on experience
            in the MERN stack (MongoDB, Express.js, React, Node.js). I enjoy
            building modern, responsive, and scalable web applications that
            solve real-world problems. <br /> I’m an avid traveler who finds
            peace and inspiration in exploring new places. Cricket has always
            been my favorite sport, and I find joy in playing and watching
            matches. In my free time, I love experimenting with new projects,
            solving coding challenges, and staying up-to-date with the latest
            trends in web development. <br /> I aim to expand my skills by
            learning advanced technologies and modern frameworks. My dream is to
            work dedicatedly in a professional tech company and contribute to
            real-world projects. I’m passionate about continuous learning and
            growing as a full-stack developer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
