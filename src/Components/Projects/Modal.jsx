import React, { useState } from "react";

const Modal = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white w-11/12 max-w-xl rounded-lg shadow-lg relative p-6">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-2xl"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold text-[#e65309] mb-4">
          {project.name}
        </h2>

        <img
          src={project.image}
          alt={project.name}
          className="w-full rounded-md mb-4"
        />

        <p className="text-gray-700 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technology.map((tech, i) => (
            <span key={i} className="px-3 py-1 bg-gray-200 text-sm rounded">
              {tech.name}
            </span>
          ))}
        </div>

        <div className="flex justify-end gap-4">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline hover:bg-[#e65309] hover:text-white"
          >
            Live Site
          </a>
          <a
            href={project.repo_link}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline hover:bg-[#e65309] hover:text-white"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
