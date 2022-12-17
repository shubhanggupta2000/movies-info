import React, { useState } from "react";
import Logo from "../assets/logo.svg";
import Search from "../assets/search.svg";
import "./Navbar.scss";
import { TMDB_MAIN, API_KEY } from "../endpoints/tmdb";

const searchMovies = async (query) => {
  const response = await fetch(
    `${TMDB_MAIN}/search/movie?api_key=${API_KEY}&query=${query}`
  );
  const data = await response.json();
  return data.results;
};

const Navbar = (props) => {
  const [input, setInput] = useState("");

  const inputValChange = (e) => {
    setInput(e.target.value);
    movieSearch(input);
  };

  const movieSearch = async (query) => {
    try {
      props.setLoading(true);
      props.setError(false);
      const movies = await searchMovies(query);
      props.setMoviesList(movies);
    } catch (error) {
      props.setError(true);
    } finally {
      props.setLoading(false);
    }
  };

  return (
    <nav>
      <div className="container">
        <a href="/">
          <img src={Logo} alt="InSynk Studios" className="nav__logo" />
        </a>
        <label className="searchbox">
          <img src={Search} alt="Search" className="searchIcon" />
          <input
            className="searchInput"
            type="text"
            placeholder="Search for a movie"
            value={input}
            onChange={inputValChange}
          />
        </label>
      </div>
      <hr />
    </nav>
  );
};

export default Navbar;