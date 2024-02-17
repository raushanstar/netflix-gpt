import React from "react";
import Card from "./Card";

const VideoCardList = ({ movies, title }) => {
  return (
    <div className="px-6 ">
      <h1 className="text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-y-scroll no-scrollbar">
        <div className="flex ">
          {movies?.map((movie) => (
            <Card
              key={movie.id}
              posterPath={movie.poster_path}
              title={movie.title}
              release_date={movie.release_date}
              vote_average={movie.vote_average}
              overview={movie.overview}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoCardList;
