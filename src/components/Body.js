import React, { useEffect } from "react";
import Login from "./Login";
import Browser from "./Browser";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { removeUser } from "../utils/userSlice";
import MovieDetails from "./MovieDetails";
const Body = () => {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    { path: "/", element: <Login /> },
    {
      path: "browser",
      element: <Browser />,
    },

    {
      path: "details",
      element: <MovieDetails />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // window.location.href = "/browser";
      } else {
        dispatch(removeUser());
        // window.location.href = "/"
      }
    });
  }, []);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
