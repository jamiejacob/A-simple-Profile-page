"use client";

import Form from "@/components/Form";
import userData from "../mock/user.json";
import ProfilePhoto from "@/components/ProfilePhoto";
import { useState } from "react";
import OtherSettings from "@/components/OtherSettings";

export default function Home() {
  const [user, setUser] = useState(userData);
  const handleFormChange = (data) => {
    setUser(data);
  };
  return (
    <div className=" @container min-h-screen  md:p-10 xs:p-4 bg-white overflow-auto">
      <div className="border-2">

        {/* Profile photo */}
        <div className="py-10 border-b-2 px-5 ">
          <ProfilePhoto image={user.profileImage}></ProfilePhoto>
        </div>

        {/* Form */}
        <div className="py-10 border-b-2 px-5 ">
          <Form form={user} handleFormDataChange={handleFormChange}></Form>
        </div>

        {/* Other Settings */}
        <div className="py-10 border-b-2 px-5 ">
          <OtherSettings userInterests={user.interests}></OtherSettings>
        </div>
      </div>
    </div>
  );
}
