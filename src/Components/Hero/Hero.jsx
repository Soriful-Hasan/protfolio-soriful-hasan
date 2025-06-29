import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
const Hero = () => {
  return (
    <section className="w-full  bg-gray-50">
      <div className="border-b border-gray-200">
        <div className="w-10/12 lg:text-start text-center mx-auto flex lg:flex-row flex-col-reverse items-center justify-around ">
          <div className="max-w-3xl  space-y-6 flex-1 ">
            <h2 className=" md:text-6xl text-4xl lg:text-7xl font-bold text-gray-900 relative ">
              Full Stack Web Devoloper
            </h2>

            <p className="mt-4 text-gray-600 tracking-widest uppercase text-sm">
              Md Soriful Hasan
            </p>

            <div className="lg:flex  justify-center lg:justify-start flex space-y-6 mt-8 gap-8 items-center ">
              <div className="">
                <button className="hover:bg-[#e65309]  px-6 py-3 bg-black text-white rounded cursor-pointer  transition">
                  Contact Me
                </button>
              </div>
              <div className="mb-10 justify-center mt-4 flex  gap-4">
                <div className="border p-3 rounded-full cursor-pointer border-gray-300 hover:bg-[#e65309] group">
                  <a
                    href="https://github.com/Soriful-Hasan"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillGithub
                      size={20}
                      className="text-[#697794] group-hover:text-white"
                    />
                  </a>
                </div>
                <div className="border p-3 rounded-full cursor-pointer border-gray-300 hover:bg-[#e65309] group">
                  <a
                    href="https://www.linkedin.com/in/md-soriful-hasan-53a9b52b3/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn
                      size={20}
                      className="text-[#697794] group-hover:text-white"
                    />
                  </a>
                </div>
                <div className="border p-3 rounded-full cursor-pointer border-gray-300 hover:bg-[#e65309] group">
                  <a
                    href="https://x.com/hasan_soriful"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaSquareXTwitter
                      size={20}
                      className="text-[#697794] group-hover:text-white"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10  ml-4 xl:ml-0  p-8">
            <img
              src="/myphoto.png"
              alt="Developer"
              className="w-md border border-gray-300 rounded-full bg-gray-200"
            />
          </div>
        </div>
      </div>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="cursor-pointer fixed bottom-5 right-5 bg-black text-white p-3 rounded-full hover:bg-gray-800"
      >
        ↑
      </button>
    </section>
  );
};

export default Hero;
