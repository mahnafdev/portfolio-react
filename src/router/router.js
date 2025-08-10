import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import HomePage from "../pages/HomePage";

const router = createBrowserRouter([
	// Layout: Root
	{
		path: "/",
		Component: RootLayout,
		// Pages of 'Root' layout
		children: [
			// Home page
			{
				path: "/",
				Component: HomePage,
			},
		],
	},
]);

export default router;
