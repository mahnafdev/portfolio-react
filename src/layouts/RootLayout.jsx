import { Fragment } from "react";
import { Outlet } from "react-router";
import NavBar from "./NavBar";

const RootLayout = () => {
	return (
		<Fragment>
			<header>
				<NavBar />
			</header>
			<Outlet />
		</Fragment>
	);
};

export default RootLayout;
