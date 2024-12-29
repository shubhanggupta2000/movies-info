import React from "react";
import "./Modal.scss";
import { TMDB_IMAGE_URL } from "../endpoints/tmdb";

const MovieModal = ({ open, setOpen, movies, id, setId }) => {
  const movie = movies?.find((mov) => mov.id === id);

  const handleModalClose = () => {
    setOpen(false);
    setId(null);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();

    const getDaySuffix = (day) => {
      if (day > 3 && day < 21) return 'th';
      switch (day % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
      }
    };

    return `${day}${getDaySuffix(day)} ${month} ${year}`;
  };

  return (
    <div className="modal" style={{ display: open ? "flex" : "none" }}>
      <div className="background" onClick={handleModalClose}></div>
      <div className="modalContainer">
        <div className="header">
          <p>{movie?.title}</p>
          <button className="closeButton" onClick={handleModalClose}>
            &times;
          </button>
        </div>
        <div className="bio">
          <img
            src={`${TMDB_IMAGE_URL}${movie?.poster_path}`}
            alt={movie?.title}
          />
          <div className="details">
            <p>
              <b>Release date</b>: {formatDate(movie?.release_date)}
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