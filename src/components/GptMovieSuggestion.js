import React from "react";
import { useSelector } from "react-redux";

const GptMovieSuggestion = () => {
  const movieList = useSelector((store) => store.suggestionMovie.gptMovie);
  if (!movieList) return null;

  const aiMovieList = movieList.split(",");
  return (
    <div className="px-2 pt-5 text-white text-3xl bg-transparent">
      {aiMovieList.map((movie) => (
        <h1 className="pt-1"> {movie}</h1>
      ))}
    </div>
  );
};

export default GptMovieSuggestion;
