import { Fragment } from "react";
import { Outlet } from "react-router";
import NavBar from "./NavBar";
import Footer from "./Footer";

const RootLayout = () => {
	return (
		<Fragment>
			<header>
				<NavBar />
			</header>
			<Outlet />
			<Footer />
		</Fragment>
	);
};

export default RootLayout;
