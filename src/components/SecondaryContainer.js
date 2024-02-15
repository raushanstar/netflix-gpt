import React from "react";
import VideoCardList from "./VideoCardList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie);

  return (
    movies.nowPlayingmovies && (
      <div className="bg-black">
        <div className="-mt-40 pl-12 relative z-20">
          <VideoCardList
            movies={movies.nowPlayingmovies}
            title={"Now Playing"}
          />
          <VideoCardList
            movies={movies.trandigVideos}
            title={"Trending on Netflix"}
          />
          <VideoCardList
            movies={movies.nowPlayingmovies}
            title={"Only on Netflix"}
          />
          <VideoCardList
            movies={movies.nowPlayingmovies}
            title={"Horror Videos"}
          />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
