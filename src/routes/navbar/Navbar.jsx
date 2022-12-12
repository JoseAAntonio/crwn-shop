import { Outlet } from "react-router-dom";

export const Navbar = () => {
	return (
		<div>
			<div>
				<h1>I am a navigation bar</h1>
			</div>
			<Outlet />
		</div>
	);
};
