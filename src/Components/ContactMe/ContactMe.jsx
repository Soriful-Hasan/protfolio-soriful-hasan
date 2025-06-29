import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import EmailSend from "./EmailSend";

const ContactMe = () => {
  return (
    <div className="p-10 lg:w-10/12 lg:p-0  w-full  mx-auto mt-20 mb-20 bg-gray-50 ">
      <div className="text-center pt-10">
        <h2 className="text-3xl font-bold mb-4">Send Me A Message</h2>
        <p className="text-sm text-gray-600">
          Your email address will not be published. All fields are required
        </p>
      </div>
      <div className="mt-10 pb-10">
        <EmailSend />
      </div>
    </div>
  );
};

export default ContactMe;

