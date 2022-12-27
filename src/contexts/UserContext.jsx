import { createContext, useState, useEffect } from "react";

import {
	onAuthStateChangedListener,
	createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";

//CONTEXT - as the actual value you want to provide/access passing the default value
export const userContext = createContext({
	currentUser: null,
	setCurrentUser: () => null,
});

//PROVIDER
export const UserProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const value = { currentUser, setCurrentUser };

	useEffect(() => {
		const unsubscribe = onAuthStateChangedListener((user) => {
			if (user) {
				createUserDocumentFromAuth(user);
			}
			setCurrentUser(user);
		});

		return unsubscribe;
	}, []);

	return <userContext.Provider value={value}>{children}</userContext.Provider>;
};
