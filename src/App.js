import "./App.scss";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Main from "./components/Main";

function App() {
  const [moviesList, setMoviesList] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className="app">
      <Navbar
        setMoviesList={setMoviesList}
        setLoading={setLoading}
        setError={setError}
      />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Main
                moviesList={moviesList}
                setMoviesList={setMoviesList}
                loading={loading}
                error={error}
                setLoading={setLoading}
                setError={setError}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;