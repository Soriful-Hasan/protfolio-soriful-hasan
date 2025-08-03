import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import Swal from "sweetalert2";

const EmailSend = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const serviceKey = import.meta.env.VITE_SERVICE_KEY;
  const templateKey = import.meta.env.VITE_TEMPLATE_KEY;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;

  const onSubmit = (data) => {
    emailjs
      .send(`${serviceKey}`, `${templateKey}`, data, {
        publicKey: `${publicKey}`,
      })
      .then(() => {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Send Email Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
      })
      .catch((error) => {
        Swal.fire({
          position: "top-center",
          icon: "error",
          title: "Something was wrong",
          showConfirmButton: false,
          timer: 1500,
        });
        console.log(error);
      });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="lg:max-w-4xl mx-auto space-y-4"
    >
      {/* Name and Email */}
      <div className="flex gap-4 w-full flex-col lg:flex-row">
        <div className="flex-1">
          <label className="block font-semibold mb-1 text-white">
            Name <span className="text-red-400">*</span>
          </label>
          <input
            {...register("name", { required: "Name is required" })}
            placeholder="Your Name"
            className="bg-gray-800/50 backdrop-blur-sm border border-gray-600 text-white placeholder-gray-400 p-3 w-full rounded-2xl focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 hover:border-gray-500"
          />
          {errors.name && (
            <p className="text-red-400 mt-1 text-sm">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="flex-1">
          <label className="block font-semibold mb-1 text-white">
            Email <span className="text-red-400">*</span>
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
            className="bg-gray-800/50 backdrop-blur-sm border border-gray-600 text-white placeholder-gray-400 p-3 w-full rounded-2xl focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 hover:border-gray-500"
          />
          {errors.user_email && (
            <p className="text-red-400 mt-1 text-sm">
              {errors.user_email.message}
            </p>
          )}
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block font-semibold mb-1 text-white">
          Message <span className="text-red-400">*</span>
        </label>
        <textarea
          {...register("message", { required: "Message is required" })}
          placeholder="Your Message"
          rows="6"
          className="bg-gray-800/50 backdrop-blur-sm border border-gray-600 text-white placeholder-gray-400 p-4 w-full rounded-2xl focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 hover:border-gray-500 resize-none"
        />
        {errors.message && (
          <p className="text-red-400 mt-1 text-sm">{errors.message.message}</p>
        )}
      </div>

      <div className="flex lg:flex-row flex-col items-center justify-between">
        <button
          type="submit"
          className="group  relative overflow-hidden w-full  px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105 mt-6"
        >
          <span className="relative z-10">Contact Me</span>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </div>
    </form>
  );
};

export default EmailSend;
