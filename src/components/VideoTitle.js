import React from "react";
import { CiCircleInfo } from "react-icons/ci";
import { FaPlay } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const VideoTitle = ({ title, overview }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the '/details' route with state and replace the current entry in the history stack
    navigate("/details", { state: { title, overview }, replace: true });
  };
  return (
    <div className="w-screen aspect-video pt-56 px-5 pl-10 absolute text-white bg-gradient-to-r from-black">
      <h1 className="font-bold text-6xl">{title}</h1>
      <p className="text-base py-6 w-1/4">{overview}</p>
      <div className="flex">
        <button className="flex text-lg py-3  rounded-lg px-8 bg-white text-black hover:bg-opacity-70 ">
          <FaPlay className="w-6 mt-[5px]" />
          <h1>Play</h1>
        </button>
        <button className="flex text-lg py-3 bg-gray-500 rounded-lg px-8  text-white bg-opacity-70 mx-3 hover:bg-opacity-90">
          <CiCircleInfo className="w-6 mt-[5px]" />
          <h1 onClick={handleClick}>More Info</h1>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
