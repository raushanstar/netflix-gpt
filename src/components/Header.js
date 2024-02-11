import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((store) => store.user);

  const naviagte = useNavigate();
  const handleClick = () => {
    signOut(auth)
      .then(() => {
        naviagte("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-52 mx-8"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      
        {user && (<div className="flex p-2">
          <img
            className="w-10 h-10 "
            alt="default user"
            src={user.photoURL}
          ></img>
          <button
            onClick={handleClick}
            className="font-bold text-white pb-7 pl-2"
          >
            Sign Out
          </button>
        </div>)}
      
    </div>
  );
};

export default Header;
