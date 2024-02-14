import React from "react";

const Card = ({ posterPath }) => {
  return (
    <div className="pr-4 w-44 className=hover:w-20">
      <img alt="poster" src={"https://image.tmdb.org/t/p/w500" + posterPath} />
    </div>
  );
};

export default Card;
