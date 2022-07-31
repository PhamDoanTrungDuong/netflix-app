//@ts-nocheck
import React from "react";
import { UserAuth } from "../Context/AuthContext";
import {Navigate} from 'react-router-dom';
interface IProps {
	children: JSX.Element;
}

const ProtectedRoute: React.FC<IProps> = ({ children }) => {
	const { user } = UserAuth();
	if (!user) {
            return <Navigate to='/' />
	} else {
		return children ;
	}
};

export default ProtectedRoute;
