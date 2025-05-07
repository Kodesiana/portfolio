import ReactGA from "react-ga4";
import { BrowserRouter, Route, Routes } from "react-router";

import { GoogleAnalytics } from "./data";

import PortfolioPage from "./pages/Porfolio";
import ProjectDetailPage from "./pages/Porfolio/ProjectDetail";
import ResumePage from "./pages/Resume";
import Layout from "./pages/_Layout";

export default function App() {
	ReactGA.initialize(GoogleAnalytics.MeasurementId);

	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route index element={<ResumePage />} />
					<Route path="portfolio" element={<PortfolioPage />} />
					<Route path="portfolio/:slug" element={<ProjectDetailPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
