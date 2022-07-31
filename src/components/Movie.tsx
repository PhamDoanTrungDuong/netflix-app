// @ts-nocheck
import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IMovie } from "../Interface/IMovie";
import { UserAuth } from "../Context/AuthContext";
import { db } from "../firebase";
import { doc, arrayUnion, updateDoc } from "firebase/firestore";

interface IProps {
	movie: IMovie;
}

const Movie: React.FC<IProps> = ({ movie }) => {
	const [like, setLike] = useState(false);
	const [saved, setSaved] = useState(false);
	const { user } = UserAuth();

	const movieID = doc(db, "users", `${user?.email}`);

	const saveShow = async () => {
		if (user?.email) {
			setLike(!like);
			setSaved(true);
			await updateDoc(movieID, {
				savedShows: arrayUnion({
					id: movie.id,
					title: movie.title,
					img: movie.backdrop_path,
				}),
			});
		}else{
      alert('Please log in to save a movie');
    }
	};

	return (
		<>
			<div className="w-[150px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
				<img
					src={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`}
					alt={movie?.title}
				/>
				<div className="absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 hover:bg-black/50 duration-200 text-white">
					<p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
						{movie?.title}
					</p>
					<p onClick={saveShow}>
						{like ? (
							<FaHeart className="absolute top-4 left-4 text-gray-300 hover:scale-105 duration-300" />
						) : (
							<FaRegHeart className="absolute top-4 left-4 text-gray-300 hover:scale-105 duration-300" />
						)}
					</p>
				</div>
			</div>
		</>
	);
};

export default Movie;
