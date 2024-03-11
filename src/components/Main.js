import React, { useEffect, useState } from "react";
import MovieCard from "./Card";
import MovieModal from "./Modal";
import "./Main.scss";
import { TMDB_MAIN, API_KEY } from "../endpoints/tmdb";

const fetchLatestMovies = async () => {
  const response = await fetch(
    `${TMDB_MAIN}/movie/top_rated?api_key=${API_KEY}`
  );
  const data = await response.json();
  return data.results;
};

const Main = ({
  moviesList,
  setMoviesList,
  loading,
  error,
  setLoading,
  setError,
}) => {
  const [open, setOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const handleFetchMovies = async () => {
      try {
        setLoading(true);
        setError(false);
        const movies = await fetchLatestMovies();
        setMoviesList(movies);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    if (moviesList === null) handleFetchMovies();
  }, [moviesList, setError, setLoading, setMoviesList]);

  if (loading) {
    return (
      <div className="homeContainer">
        <p className="container">Loading...</p>
      </div>
    );
  } else if (error) {
    return (
      <div className="homeContainer">
        <p className="container">Error. Try Again.</p>
      </div>
    );
  } else {
    return (
      <>
        <div className="homeContainer">
          <div className="container">
            {moviesList instanceof Array &&
              moviesList?.length > 0 &&
              moviesList?.map((movie) => (
                <MovieCard
                  key={movie.id}
                  {...movie}
                  setOpen={setOpen}
                  setId={setSelectedMovie}
                />
              ))}
          </div>
        </div>
        <MovieModal
          open={open}
          setOpen={setOpen}
          movies={moviesList}
          id={selectedMovie}
          setId={setSelectedMovie}
        />
      </>
    );
  }
};

export default Main;
