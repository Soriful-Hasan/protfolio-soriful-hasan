import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";

const ContactMe = () => {
  return (
    <div className=" mt-20 mb-10 bg-gray-50 ">
      <div className="text-center pt-10">
        <h2 className="text-3xl font-bold mb-20">Contact With Me</h2>
      </div>
      <div className="pb-10">
        <div className="flex w-10/12 mx-auto  gap-4">
          <div className="bg-white space-y-2 rounded-md hover:border-[#e65309] flex-1 border place-items-center p-10 border-gray-200">
            <div className=" rounded-full p-2 bg-[#e65309]">
              <IoLocationOutline size={40} color="white" />
            </div>
            <h1 className="font-bold">Location</h1>
            <p className="text-sm text-gray-700">Sylhet, Bangladesh</p>
          </div>
          <div className="bg-white space-y-2 rounded-md hover:border-[#e65309] flex-1 border place-items-center p-10 border-gray-200">
            <div className=" rounded-full p-2 bg-[#e65309]">
              <MdOutlineEmail size={40} color="white" />
            </div>
            <h1 className="font-bold">Email</h1>
            <p className="text-sm text-gray-700">Sorifullhasan300@gmail.com</p>
          </div>
          <div className="space-y-2 bg-white rounded-md hover:border-[#e65309] flex-1 border place-items-center p-10 border-gray-200">
            <div className=" rounded-full p-2 bg-[#e65309]">
              <FiPhone size={40} color="white" />
            </div>
            <h1 className="font-bold">Phone</h1>
            <p className="text-sm text-gray-700">+8801835458727</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
