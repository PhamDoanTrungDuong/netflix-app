// @ts-nocheck
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";

const Navbar: React.FC = () => {
	const { user, logOut } = UserAuth();
	const navigate = useNavigate()
	const handleLogout = async () => {
		try {
			await logOut();
			navigate('/')
		} catch (error) {
			console.log(error);
		}
	};
	console.log(user);
	return (
		<div className="flex justify-between items-center p-4 z-[100] absolute w-full">
			<Link to="/">
				<h1 className="text-red-600 text-4xl font-bold cursor-pointer">
					NETFLIX.
				</h1>
			</Link>
			{user?.email ? (
				<div>
					<Link to="/account">
						<button className="px-6 py-2 rounded-md cursor-pointer text-white hover:text-red-600 text-lg duration-300">
							Account
						</button>
					</Link>
						<button onClick={handleLogout} className="px-6 py-2 rounded-md cursor-pointer text-white hover:text-red-600 text-lg hover:underline hover:underline-offset-4 duration-300">
							Logout
						</button>
				</div>
			) : (
				<div>
					<Link to="/login">
						<button className="text-white pr-4 hover:text-gray-200 duration-300">
							Sign In
						</button>
					</Link>
					<Link to="signup">
						<button className="bg-red-600 border border-red-600 px-6 py-2 rounded-md cursor-pointer text-white hover:text-white hover:bg-transparent duration-300">
							Sign Up
						</button>
					</Link>
				</div>
			)}
		</div>
	);
};

export default Navbar;
