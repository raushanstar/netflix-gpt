import { useDispatch } from "react-redux";
import { api_options } from "../utils/constant";
import { addTrandingVideos } from "../utils/movieSlice";
import { useEffect } from "react";

const useTrendingMovie = () => {
  const dispatch = useDispatch();
  const getTrendingMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
      api_options
    );
    const json = await data.json();
    // console.log(json);
    dispatch(addTrandingVideos(json.results));
  };

  useEffect(() => {
    getTrendingMovie();
  }, []);
};

export default useTrendingMovie;
