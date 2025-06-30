import { Dialog } from "@headlessui/react";
import React from "react";
import { BsStack } from "react-icons/bs";
import { MdDescription } from "react-icons/md";

const Modal = ({ onClose, name, data, isOpen, setIsOpen }) => {
  return (
    <div className="">
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        open modal
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box ">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4 text-[5px]">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
