import React from "react";
import Button from "./Button";

const Interest = ({ interest, onClose, onConfirm, actionButton }) => {
  return (
    <>
      <div
        className="fixed inset-0 bg-black opacity-50 z-40"
        onClick={onClose}
      ></div>
      <dialog className="block">
        <div className=" fixed inset-0 z-50 flex items-center justify-center @xs:text-xs">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold mb-3">Skill</h3>
            <div className="flex">
              <input type="text" value={interest} disabled={interest} />
            </div>
            <div className="mt-4 flex gap-2 justify-center">
              <Button className="bg-slate-200" submit={onClose}>
                Cancel
              </Button>
              <Button className="bg-sky-300 text-white" submit={onConfirm}>
                {actionButton}
              </Button>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Interest;
