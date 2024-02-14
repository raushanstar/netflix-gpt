import { api_options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addNowPlayingmovies } from "../utils/movieSlice";
import React, { useEffect } from "react";

const useNowPlaying = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      api_options
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addNowPlayingmovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlaying;
