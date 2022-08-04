import React from "react";
import { Link, useParams } from "react-router-dom";

const Movie: React.FC = () => {
	const param = useParams();
	const movieId = param.movieId;
	return (
		<div className="w-full h-screen text-white">
			<div className="w-full h-full">
				<div className="absolute w-full h-screen top-[50px] md:p-10">
					<div className="py-3 sm:py-4 md:py-5 w-full h-full">
						<button className="border border-red-600 p-3 text-white hover:text-red-600 duration-300 rounded-xl my-3">
							<Link to="/">Back to Homepage</Link>
						</button>
						<div className="h-[450px] md:w-full md:h-screen">
							<iframe
								id="ve-iframe"
								src={`https://2embed.org/embed/${movieId}`}
								width="100%"
								height="100%"
								allowFullScreen></iframe>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full h-[300px]"></div>
		</div>
	);
};

export default Movie;
