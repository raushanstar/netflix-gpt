import React from "react";
import { useLocation } from "react-router-dom";
import { netflix_logo } from "../utils/constant";

const MovieDetails = () => {
  const location = useLocation();
  const { state } = location;
  const poster_path = state?.posterPath;
  const original_title = state?.title;
  const release_date = state?.release_date;
  const vote_average = state?.vote_average;
  const overview = state?.overview;
  return (
    <div className="bg-slate-950 h-screen">
      <img className=" w-52 mx-8" src={netflix_logo} alt="logo" />
      <div className="flex justify-between">
        <div className="p-16 text-3xl text-white">
          <h1>
            Movie Name:{" "}
            <span className="text-3xl text-red-600 font-bold font">
              {original_title}
            </span>
          </h1>
          <h1 className="pt-3">
            Description:{" "}
            <span className="text-2xl text-orange-400">{overview}</span>
          </h1>
          <h1 className="pt-3">
            Release Date:{" "}
            <span className="text-2xl text-orange-400">{release_date}</span>
          </h1>
          <h1 className="pt-3">
            Rating:{" "}
            <span className="text-2xl text-orange-400">{vote_average}</span>
          </h1>
        </div>
        <img
          className="w-80 mr-40"
          alt="poster"
          src={"https://image.tmdb.org/t/p/w500" + poster_path}
        />
      </div>
    </div>
  );
};

export default MovieDetails;
