import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ posterPath ,title,release_date,vote_average,overview}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/details', { state: { posterPath ,title,release_date,vote_average,overview}, replace: true });
  };
  return (
    <div className="pr-4 w-52 ">
        <img
          className="w-44 hover:w-48 "
          alt="poster"
          src={"https://image.tmdb.org/t/p/w500" + posterPath}
          onClick={handleClick}
        />
    </div>
  );
};

export default Card;
