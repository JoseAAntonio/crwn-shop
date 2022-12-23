import { createContext, useState } from "react";

//CONTEXT - as the actual value you want to provide/access passing the default value
export const userContext = createContext({
	currentUser: null,
	setCurrentUser: () => null,
});

//PROVIDER
export const UserProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const value = { currentUser, setCurrentUser };

	return <userContext.Provider value={value}>{children}</userContext.Provider>;
};
