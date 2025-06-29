import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";

const EmailSend = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    emailjs
      .send("service_ir0139n", "template_v9c90el", data, {
        publicKey: "umlTwlQuN7B-MydYN",
      })
      .then(() => {
        alert("Email sent successfully!");
        reset();
      })
      .catch((error) => {
        console.error("Email send error:", error);
        alert("Failed to send email.");
      });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="lg:max-w-4xl mx-auto space-y-4 "
    >
      {/* Name */}
      <div className="flex gap-4 w-full flex-col lg:flex-row">
        <div className=" flex-1">
          <label className="block font-semibold mb-1">
            Name <span className="text-[#e65309]">*</span>
          </label>
          <input
            {...register("name", { required: "Name is required" })}
            placeholder="Your Name"
            className="border p-3 border-gray-300 w-full"
          />
          {errors.name && (
            <p className="text-red-500 mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="flex-1">
          <label className="block font-semibold mb-1">
            Email <span className="text-[#e65309]">*</span>
          </label>
          <input
            {...register("user_email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email format",
              },
            })}
            placeholder="Your Email"
            className="border p-3 border-gray-300 w-full"
          />
          {errors.user_email && (
            <p className="text-red-500 mt-1">{errors.user_email.message}</p>
          )}
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block font-semibold mb-1">
          Message <span className="text-[#e65309]">*</span>
        </label>
        <textarea
          {...register("message", { required: "Message is required" })}
          placeholder="Your Message"
          className="border p-4 border-gray-300 w-full"
        />
        {errors.message && (
          <p className="text-red-500 mt-1">{errors.message.message}</p>
        )}
      </div>

      <div className=" flex lg:flex-row flex-col items-center justify-between">
        <button
          type="submit"
          className="w-full lg:w-80 hover:bg-[#e65309] cursor-pointer  mt-6 px-6 py-3 bg-black text-white rounded  transition"
        >
          Contact Me
        </button>
        <div className="lg:justify-center flex lg:flex-row flex-col items-start   w-full mt-10  lg:mt-6 lg:items-center gap-8">
          <div className="flex items-center gap-2">
            <div className=" rounded-full p-1 bg-[#e65309]">
              <MdOutlineEmail size={15} color="white" />
            </div>
            <p className="text-sm  text-gray-600">sorifullhasan300@gmail.com</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="rounded-full p-1 bg-[#e65309]">
              <FiPhone size={15} color="white" />
            </div>
            <p className="text-sm  text-gray-600">+8801835458727</p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default EmailSend;
