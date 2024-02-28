import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { movieSuggestionList } from "../utils/aiMovieSlice";
import GptMovieSuggestion from "./GptMovieSuggestion";

const GptSearch = () => {
  const dispatch = useDispatch();

  const searchText = useRef(null);
  const google_key = process.env.REACT_APP_BARD_API;

  const genAI = new GoogleGenerativeAI(google_key);

  const run = async (promptIn) => {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `Please provide five ${promptIn} separated by commas. only give me response in this format for example: 'Ghayal, Dilwale, Don, Pathan, Hero number one'`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    dispatch(movieSuggestionList(text));
  };

  const handleGpt = async () => {
    run(searchText.current.value);
  };

  return (
    <div className="pt-6 pl-[35%]">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          className="w-80 h-10 mr-2 p-2 rounded-lg text-lg"
          ref={searchText}
          type="text"
          placeholder="what do you want to watch !"
        ></input>
        <button
          onClick={handleGpt}
          className="bg-red-600 w-28 h-10 rounded-lg text-white"
        >
          Search
        </button>
      </form>
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
