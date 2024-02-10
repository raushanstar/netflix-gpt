import React, { useState } from "react";
import Header from "./Header";
const Login = () => {
  const [singin, setSign] = useState(true);
  const toggle = () => {
    setSign(!singin);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        />
      </div>
      <form className="w-3/12 p-12 absolute bg-black my-40 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {singin ? "Sign In" : "Sign Up"}
        </h1>
        <input
          type="text"
          placeholder="Enter email"
          className="p-3 my-3 w-full bg-gray-700 rounded-lg"
          required
        />
        {!singin && (
          <input
            type="text"
            placeholder="Enter Full Name"
            className="p-3 my-3 w-full bg-gray-700 rounded-lg"
            required
          />
        )}
        <input
          type="password"
          placeholder="Enter password"
          className="p-3 my-3 w-full bg-gray-700 rounded-lg"
          required
        />
        <button className="p-3 my-5 w-full bg-red-600 rounded-lg" type="submit">
          {singin ? "Sign in" : "Sign Up"}
        </button>

        <p className="py-2 cursor-pointer" onClick={() => toggle()}>
          {singin
            ? "New to Netflix? Sign Up Now"
            : "Already member? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
