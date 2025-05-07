import ReactGA from "react-ga4";
import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router";

import { GoogleAnalytics } from "./data";

import Layout from "./pages/_Layout";

const ResumePage = lazy(() => import("./pages/Resume"));
const PortfolioPage = lazy(() => import("./pages/Porfolio"));
const ProjectDetailPage = lazy(() => import("./pages/Porfolio/ProjectDetail"));

export default function App() {
	ReactGA.initialize(GoogleAnalytics.MeasurementId);

	return (
		<BrowserRouter>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route element={<Layout />}>
						<Route index element={<ResumePage />} />
						<Route path="portfolio" element={<PortfolioPage />} />
						<Route path="portfolio/:slug" element={<ProjectDetailPage />} />
					</Route>
				</Routes>
			</Suspense>
		</BrowserRouter>
	);
}
