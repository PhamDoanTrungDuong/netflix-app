import React from "react";
import SavedShows from "../components/SavedShows";

const Account: React.FC = () => {
	return (
		<>
			<div className="w-full text-white">
				<img
					className="w-full h-[400px] object-cover"
					src="https://assets.nflxext.com/ffe/siteui/vlv3/c2578c37-8569-4f88-b8f1-67a26a9ddcdd/742c60c5-23e0-4b61-8b0e-f434c157f9e6/VN-en-20220725-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
					alt="/"
				/>
				<div className="bg-black/60 fixed top-0 left-0 w-full h-[400px]"></div>
				<div className="absolute top-[20%] p-4 md:p-8 ">
					<h1 className="text-3xl md:text-5xl font-bold">My Shows</h1>
				</div>
			</div>
			<SavedShows />
		</>
	);
};

export default Account;
