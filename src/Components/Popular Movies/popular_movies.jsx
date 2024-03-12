import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import fetchData from "./fetchData";
import MovieMapping from "./movieMapping";
function PopularMovies() {
  const base_url = "https://media.themoviedb.org/t/p/w220_and_h330_face";
  const defaultImage =
    "https://imgs.search.brave.com/gV6Xy99WsNTWpgT2KUNxopKhP45u8QMrrL2DGi5HYxg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzE1Lzg0LzQz/LzM2MF9GXzIxNTg0/NDMyNV90dFg5WWlJ/SXllYVI3TmU2RWFM/TGpNQW15NEd2UEM2/OS5qcGc";

  const [popularMovies, setpopularMovies] = useState();
  useEffect(() => {
    setpopularMovies(fetchData());
  }, []);
  return (
    <div className="flex flex-wrap px-28 gap-8 py-10">
      <MovieMapping popularMovies={popularMovies} />
    </div>
  );
}
export default PopularMovies;
