import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidate } from "../utils/validate";
import { addUser } from "../utils/userSlice";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { background } from "../utils/constant";

const Login = () => {
  const dispatch = useDispatch();

  const [singin, setSign] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const naviagte = useNavigate();

  const handleButtonClick = () => {
    const message = checkValidate(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    if (!singin) {
      //sign up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // const namedis = name.current.value.split(" ");
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );

              naviagte("/browser");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
          // ..
        });
    } else {
      //sign in
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          naviagte("/browser");
          // console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    }
  };
  const toggle = () => {
    setSign(!singin);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={background}
          alt="background"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-4/12 p-12 absolute bg-black my-32 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {singin ? "Sign In" : "Sign Up"}
        </h1>
        <input
          ref={email}
          placeholder="Enter Email"
          className="p-3 my-3 w-full bg-gray-700 rounded-lg"
          required
        />
        {!singin && (
          <input
            ref={name}
            type="text"
            placeholder="Enter Full Name"
            className="p-3 my-3 w-full bg-gray-700 rounded-lg"
            required
          />
        )}
        <input
          ref={password}
          type="password"
          placeholder="Enter password"
          className="p-3 my-3 w-full bg-gray-700 rounded-lg"
          required
        />
        {<p className="text-red-700 font-bold">{errorMessage}</p>}
        <button
          className="p-3 my-5 w-full bg-red-600 rounded-lg "
          type="submit"
          onClick={() => handleButtonClick()}
        >
          {singin ? "Sign in" : "Sign Up"}
        </button>

        {singin ? (
          <p className="pt-2 ">
            New to Netflix?
            <span className="cursor-pointer font-bold" onClick={() => toggle()}>
              {" "}
              Sign Up Now
            </span>
          </p>
        ) : (
          <p className="pt-2 ">
            Already member?
            <span className="cursor-pointer font-bold" onClick={() => toggle()}>
              {" "}
              Sign In Now
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
