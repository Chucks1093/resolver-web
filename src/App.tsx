import "./app.css";
import LandingPage from "./pages/LandingPage";
import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router";

const router = createBrowserRouter([
	{
		path: "/",
		element: <LandingPage />,
	},
]);

export default function App() {
	return (
		<>
			<Toaster />
			<RouterProvider router={router} />
		</>
	);
}
