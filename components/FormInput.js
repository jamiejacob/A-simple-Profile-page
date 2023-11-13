import React from "react";
//Reusable Form input component
const FormInput = (props) => {
  const { label, type, name, value, onChange, error, readOnly } = props;
 
  return (
    <div className="mb-4 w-full  ">
      <label className="block text-gray-700 text-sm font-bold mb-1">
        {label}
      </label>
      <input
        type={type}
        name={name}
        onChange={onChange}
        value={value}
        className="w-full md:w-3/4 "
        disabled={readOnly}
      ></input>
      <div className="mt-3 text-xs text-red-600 italic">{error}</div>
    </div>
  );
};

export default FormInput;
