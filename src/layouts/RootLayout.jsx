import { Fragment } from "react";
import { Outlet } from "react-router";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Toaster } from "sonner";

const RootLayout = () => {
	return (
		<Fragment>
			<Toaster
				position="top-center"
				richColors
			/>
			<header>
				<NavBar />
			</header>
			<Outlet />
			<Footer />
		</Fragment>
	);
};

export default RootLayout;
