import { Suspense, lazy } from "react";
import ReactGA from "react-ga4";
import { BrowserRouter, Route, Routes } from "react-router";

import { GoogleAnalytics } from "./data";

import Layout from "./pages/_Layout";

const ResumePage = lazy(() => import("./pages/Resume"));
const PortfolioPage = lazy(() => import("./pages/Porfolio"));

export default function App() {
	ReactGA.initialize(GoogleAnalytics.MeasurementId);

	return (
		<BrowserRouter>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route element={<Layout />}>
						<Route index element={<ResumePage />} />
						<Route path="portfolio" element={<PortfolioPage />} />
					</Route>
				</Routes>
			</Suspense>
		</BrowserRouter>
	);
}
