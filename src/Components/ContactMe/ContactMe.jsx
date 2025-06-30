import React from "react";
import EmailSend from "./EmailSend";
import { Element } from "react-scroll";

const ContactMe = () => {
  return (
    <Element name="contact">
      <div className="m-7 md:m-10 lg:m-2 ">
        <div className="p-10  border border-gray-100 lg:w-11/12 mt-30 mb-30 lg:p-0  w-full  mx-auto   rounded-md bg-gray-50 ">
          <div className="text-center pt-10">
            <h2 className="text-2xl lg:text-3xl  font-bold mb-4">
              Send Me A Message
            </h2>
            <p className="text-sm text-gray-600">
              Your email address will not be published. All fields are required
            </p>
          </div>
          <div className="mt-10 pb-10">
            <EmailSend />
          </div>
        </div>
      </div>
    </Element>
  );
};

export default ContactMe;
