import React from "react";
import BackgroundVideo from "./BackgroundVideo";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movie?.nowPlayingmovies);
  if (!movies) return;

  const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  const random_index = random(0, movies.length - 1);

  const { original_title, overview, id } = movies[random_index];
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} id={id} />

      <BackgroundVideo id={id} />
    </div>
  );
};

export default MainContainer;
