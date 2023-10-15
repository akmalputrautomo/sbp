import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Headers from "../assets/component/navbar/Header";
import { fetchDataMovieSearch } from "../services/get-data-movie-search";

export default function PageSearch() {
  const { namemovie } = useParams();
  const [movies, setMovies] = useState([]);

  const searchMovies = async () => {
    const data = await fetchDataMovieSearch(namemovie);
    setMovies(data.results);
  };

  useEffect(() => {
    searchMovies();
  }, [namemovie]);

  return (
    <div className="bg-black">
      <Headers />
      <h1 className="text-2xl font-bold pt-20 text-white pb-4">Search Result "{namemovie}"</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <div key={movie.id} className="border border-white shadow-lg p-4 order rounded-md transition-transform transform hover:scale-105">
            <Link to={`/detail/${movie.id}`}>
              <h1 className="pb-4 font-semibold text-xl text-white">{movie.title}</h1>
              <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} className="w-full h-auto rounded-lg" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
