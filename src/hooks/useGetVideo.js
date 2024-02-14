import { useEffect } from "react";
import { api_options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTrailerVideos } from "../utils/movieSlice";
const useGetVideo = (id) => {
    const dispatch = useDispatch();
    const getVideo = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/"+id+"/videos?language=en-US",
        api_options
      );
      const json = await data.json();
      const filterTrailer = json.results.filter(
        (video) => video.type == "Trailer"
      );
      const trailer = filterTrailer.length ? filterTrailer[0] : json.results[0];
      dispatch(addTrailerVideos(trailer));
    };
  
    useEffect(() => {
      getVideo();
    }, []);
};
export default useGetVideo;
