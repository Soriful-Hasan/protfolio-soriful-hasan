import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className=" py-10 bg-gray-50">
        <div className="flex gap-4 justify-center">
          <div className="border p-2 rounded-full cursor-pointer border-gray-300 hover:bg-[#e65309] group">
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
          <div className="border p-2 rounded-full cursor-pointer border-gray-300 hover:bg-[#e65309] group">
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
          <div className="border p-2 rounded-full cursor-pointer border-gray-300 hover:bg-[#e65309] group">
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
        <p className="font-semibold text-sm text-[#697794] text-center mt-4">
          © 2025 Md Soriful Hasan | Frontend Web Developer. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
