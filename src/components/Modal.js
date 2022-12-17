import React from "react";
import "./Modal.scss";
import { TMDB_IMAGE_URL } from "../endpoints/tmdb";

const MovieModal = ({ open, setOpen, movies, id, setId }) => {
  const movie = movies?.find((mov) => mov.id === id);

  const handleModalClose = () => {
    setOpen(false);
    setId(null);
  };

  //   Returning all the movie details passed down as props
  return (
    <div className="modal" style={{ width: open ? "100%" : "0" }}>
      <div className="background" onClick={handleModalClose}></div>
      <div
        className="modalContainer"
        style={{ display: open ? "flex" : "none" }}
      >
        <div className="header">
          <p>{movie?.title}</p>
          <button className="closeButton" onClick={handleModalClose}>
            x
          </button>
        </div>
        <div className="bio">
          <img
            src={`${TMDB_IMAGE_URL}${movie?.poster_path}`}
            alt={movie?.title}
          />
          <div className="details">
            <p>
              <b>Release date</b>: {movie?.release_date}
            </p>
            <p>{movie?.overview}</p>
            <p>
              Rating:
              <b> {movie?.vote_average}</b> / 10
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
