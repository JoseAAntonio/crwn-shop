import { Routes, Route } from "react-router-dom";

import { Home } from "./routes/home/Home";
import { Navbar } from "./routes/navigation_bar/Navbar";
import { Authentication } from "./routes/authentication/Authentication";

const Shop = () => {
	return (
		<div>
			<h1>I am the shop page</h1>
		</div>
	);
};

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Navbar />}>
				<Route index element={<Home />} />
				<Route path="Shop" element={<Shop />} />
				<Route path="auth" element={<Authentication />} />
			</Route>
		</Routes>
	);
};

export default App;
