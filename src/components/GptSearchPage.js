import React from "react";
import GptSearchBar from "./GptSearchBar";
import { background } from "../utils/constant";
const GptSearchPage = () => {
  return (
    <div className="bg-gradient-to-b from-black">
      <img className="absolute -z-20  " src={background} alt="background" />
      <h1 className="pt-[8%] pl-[35%] text-white text-3xl font-bold">
        Movie Recommended Engine
      </h1>
      <GptSearchBar />
    </div>
  );
};

export default GptSearchPage;
