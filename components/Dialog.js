// Reusable Dialog component
import React from "react";
import Button from "./Button";

const Dialog = ({ onClose, title, content, onConfirm }) => {
  return (
    <>
      <div
        className="fixed inset-0 bg-black opacity-50 z-40"
        onClick={onClose}
      ></div>
      <dialog className="block">
        <div className="fixed inset-0 z-50 flex items-center justify-center @xs:text-xs ">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className=" font-semibold mb-4">{title}</h3>
            <div>{content}</div>
            <div className="mt-6 flex gap-2 justify-center">
              <Button className="bg-slate-200" submit={onClose}>
                Cancel
              </Button>
              <Button className="bg-sky-300 text-white" submit={onConfirm}>
                Delete
              </Button>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};
export default Dialog;
