import React from "react";
import "./Card.scss";
import { TMDB_IMAGE_URL } from "../endpoints/tmdb";

const Card = ({ poster_path, title, vote_average, id, setOpen, setId }) => {
  return (
    <div
      className="movieCard"
      onClick={() => {
        setOpen(true);
        setId(id);
      }}
    >
      <div
        className="picture"
        style={{
          background: `url("${TMDB_IMAGE_URL}${poster_path}") no-repeat`,
          backgroundSize: "cover",
        }}
      >
        <p className="rating">{vote_average}</p>
      </div>
      <p className="title">{title}</p>
    </div>
  );
};

export default Card;
