import React, { useEffect, useState } from "react";
import { IMovie } from "../Interface/IMovie";
import axios from "axios";
import Movie from "./Movie";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
interface IProps {
  rowId: string;
  title: string;
  fetchURL: string;
}
const Row: React.FC<IProps> = ({rowId, title, fetchURL }) => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  useEffect(() => {
    axios.get(fetchURL).then((res: any) => {
      setMovies(res.data.results);
    });
  }, [fetchURL]);
  const slideLeft = () => {
    var slider = document.getElementById('slider' + rowId);
    if(slider != null){
      slider.scrollLeft = slider.scrollLeft - 500
    }
  }
  const slideRight = () => {
    var slider = document.getElementById('slider' + rowId);
    if(slider != null){
      slider.scrollLeft = slider.scrollLeft + 500
    }
  }
  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft onClick={slideLeft} className="bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block duration-300 left-0" size={40} />

        <div
          id={'slider' + rowId}
          className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'
        >
          {movies.map((movie, idx) => {
            return <Movie key={movie.id} movie={movie}/>;
          })}
        </div>

        <MdChevronRight onClick={slideRight} className="bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block duration-300 right-0" size={40} />
      </div>
    </>
  );
};

export default Row;
