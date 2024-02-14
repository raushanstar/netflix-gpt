import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { netflix_logo } from "../utils/constant";

const Header = () => {
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  const navigate = useNavigate();
  const handleClick = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browser");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsiubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-52 mx-8" src={netflix_logo} alt="logo" />

      {user && (
        <div className="flex p-2">
          <img
            className="w-10 h-10 rounded-lg"
            alt="default user"
            src={user.photoURL}
          ></img>
          <button
            onClick={handleClick}
            className="font-bold text-white pb-7 pl-2"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
