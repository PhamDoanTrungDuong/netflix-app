import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
	User,
	UserCredential,
} from "firebase/auth";

import { setDoc, doc } from "firebase/firestore";

interface Auth {
	user: {};
	SignUp: Promise<UserCredential>;
	logIn: Promise<UserCredential>;
	logOut: void;
}

const AuthContext = createContext({});

interface IProps {
	children: any;
}

export const AuthContextProvider: React.FC<IProps> = ({ children }) => {
	const [user, setUser] = useState({});
	const signUp = (email: string, password: string) => {
	      createUserWithEmailAndPassword(auth, email, password);
            setDoc(doc(db, 'users', email), {
                  savedShows: []
            })
	};

	const logIn = (email: string, password: string) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	const logOut = () => {
		return signOut(auth);
	};

	useEffect(() => {
		const unsubcribe = onAuthStateChanged(auth, (currentUser: any) => {
			setUser(currentUser);
		});

		return () => unsubcribe();
	}, []);
	return (
		<AuthContext.Provider value={{ signUp, logIn, logOut, user }}>
			{children}
		</AuthContext.Provider>
	);
};

export const UserAuth = () => {
	return useContext(AuthContext);
};
