"use client";

import React, { useState } from "react";
import Button from "./Button";
import Dialog from "./Dialog";

const ProfilePhoto = ({ image }) => {
  const userIcon = image ? image : "/icon.png";
  const [selectedImage, setSelectedImage] = useState(userIcon);
  const [openDialog, setOpenDialog] = useState(false);

  const onImageChange = (event) => {
    const file = event.target.files[0];
    file ? setSelectedImage(URL.createObjectURL(file)) : null;
  };
  const handleOpenDeleteDialog = () => {
    setOpenDialog(true);
  };
  const handleCloseDeleteDialog = () => {
    setOpenDialog(false);
  };
  const handleDelete = () => {
    setSelectedImage(userIcon);
    setOpenDialog(false);
  };
  return (
    <div className="flex flex-col @lg:flex-row justify-between ">
      <div className="flex flex-col @lg:flex-row items-center justify-center">
        {selectedImage && (
          <img
            className="w-full @md:w-100 mx-auto"
            src={selectedImage}
            alt="Profile Image"
            style={{
              width: "100%",
              height: "auto",
              maxWidth: "200px",
              borderRadius: "50%",
            }}
          />
        )}
        <div className="flex flex-col p-4 items-center @lg:items-start">
          <h3>Profile </h3>
          <h6>Update your photo and personal information</h6>
        </div>
      </div>

      <div className="flex flex-col @xl:flex-row gap-2 items-center justify-center ">
        <input
          type="file"
          id="photo"
          onChange={onImageChange}
          accept="image/png, image/jpeg,image/jpg"
          hidden
        />
        <label
          htmlFor="photo"
          className="p-2 rounded bg-sky-300 text-white text-xs md:text-base"
        >
          Upload new picture
        </label>

        {selectedImage !== userIcon && (
          <Button submit={handleOpenDeleteDialog} className="bg-slate-200">
            Delete picture
          </Button>
        )}
      </div>
      {openDialog && (
        <Dialog
          onClose={handleCloseDeleteDialog}
          title="Delete profile picture ?"
          content="Are you sure you want to delete your profile picture ?"
          onConfirm={handleDelete}
        />
      )}
    </div>
  );
};

export default ProfilePhoto;
