import useNowPlaying from "../hooks/useNowPlaying";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useTrendingMovie from "../hooks/useTrendingMovie";
import { useSelector } from "react-redux";
import GptSearchPage from "./GptSearchPage";
import MovieDetails from "./MovieDetails";
import { useState } from "react";
import { Outlet } from "react-router-dom";
const Browser = () => {
  const movieHandleBtn = useSelector((store) => store.movieDT.clickBtn);
  const clickBtn = useSelector((store) => store.gptBtn.clickBtn);

  useNowPlaying();
  useTrendingMovie();

  return (
    <div>
      <Header />
      {clickBtn ? (
        <GptSearchPage />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browser;
