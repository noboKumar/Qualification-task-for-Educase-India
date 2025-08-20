import React, { useContext } from "react";
import profile from "../assets/Ellipse 114.png";
import cameraIcon from "../assets/Group 1585.svg";
import { AuthContext } from "../context/AuthContext";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="flex flex-col justify-between min-h-screen py-7 w-full">
      <div>
        <h1 className="text-[18px] pb-5">Account Settings</h1>
        <div className="flex gap-5 py-8">
          <div className="relative">
            <div>
              <img src={profile} alt="profile-photo" />
            </div>
            <div className="absolute bottom-0 left-15">
              <img src={cameraIcon} alt="icon" />
            </div>
          </div>
          <div>
            <h1 className="text-[15px] font-medium">{user?.displayName}</h1>
            <p className="text-[14px]">{user?.email}</p>
          </div>
        </div>
        <p className="text-[14px] pb-5">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>
        <div className="border border-dashed border-gray-300"></div>
      </div>
      <div className="border border-dashed border-gray-300"></div>
    </div>
  );
};

export default Profile;
