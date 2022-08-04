import React, { useEffect, useState } from "react";
import requests from "../Request";
import axios from "axios";
import { IMovie } from "../Interface/IMovie";
import { Link } from "react-router-dom";

const Main: React.FC = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  useEffect(() => {
    axios.get(requests.requestPopular).then((res: any) => {
      setMovies(res.data.results);
    });
  }, []);
  const movie = movies[Math.floor(Math.random() * movies.length)];

  console.log(movie)

  const truncateString = (str: string, num: number) => {
    if(str?.length > num) {
      return str.slice(0, num) + '... ';
    }else{
      return str
    }
  }
  return (
    <div className="w-full h-screen text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-screen bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute w-full top-[30%] p-5 md:p-10">
          <h1 className="text-3xl md:text-5xl font-bold my-4">{movie?.title}</h1>
          <div>
            <button className="border bg-gray-300 text-black  border-gray-300 py-2 px-5 hover:text-white hover:bg-transparent duration-200">
              <Link to={`/movie/${movie?.id}`}>
                Play
              </Link>
            </button>
            <button className="text-white border border-gray-300 py-2 px-5 ml-4 hover:text-black hover:bg-gray-300 duration-300">
              Watch Later
            </button>
            <p className="text-gray-300 text-sm my-4">Released: {movie?.release_date}</p>
            <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[40%] text-gray-200">{truncateString(movie?.overview, 150)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
