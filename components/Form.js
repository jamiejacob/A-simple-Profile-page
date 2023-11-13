"use client";
import React, { useState } from "react";
import FormInput from "./FormInput";

const Form = ({ form, handleFormDataChange }) => {
  const [readOnly, setReadOnly] = useState(true);

  // Validation rules for name & email field
  const validateField = (name, value) => {
    let error = "";

    if (name === "firstName" && value.trim() === "") {
      error = "First Name is required";
    }
    if (name === "lastName" && value.trim() === "") {
      error = "Last Name is required";
    }
    if (name === "email" && !/\S+@\S+\.\S+/.test(value)) {
      error = "Enter a valid email address";
    }

    return error;
  };
  const handleFormChange = (event) => {
    const { name, value } = event.target;
    handleFormDataChange({
      ...form,
      [name]: value,
    });
    const error = validateField(name, value);
    setFormErrors({
      ...formErrors,
      [name]: error,
    });
  };

  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const editInfo = () => {
    setReadOnly(!readOnly);
  };
  return (
    <>
      <div className="flex justify-between ">
        <h3 className="justify-center">Personal Info</h3>
        <h3 onClick={editInfo} className="text-sky-600 cursor-pointer">
          Edit Info
        </h3>
      </div>
      <div className="pt-3 grid grid-cols-1 md:grid-cols-2 gap-2">
        <FormInput
          label="First Name"
          type="text"
          name="firstName"
          value={form.firstName}
          onChange={handleFormChange}
          error={formErrors.firstName}
          readOnly={readOnly}
        ></FormInput>

        <FormInput
          label="Last Name"
          type="text"
          name="lastName"
          value={form.lastName}
          onChange={handleFormChange}
          error={formErrors.lastName}
          readOnly={readOnly}
        ></FormInput>

        <FormInput
          label="Phone"
          type="tel"
          name="phoneNumber"
          value={form.phoneNumber}
          onChange={handleFormChange}
          readOnly={readOnly}
        ></FormInput>

        <FormInput
          label="Email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleFormChange}
          error={formErrors.email}
          readOnly={readOnly}
        ></FormInput>
        <FormInput
          label="Birthday"
          type="date"
          name="birthday"
          value={form.birthday}
          onChange={handleFormChange}
          readOnly={readOnly}
        ></FormInput>
      </div>
    </>
  );
};

export default Form;
