import { Suspense, lazy, useEffect } from "react";
import ReactGA from "react-ga4";
import { BrowserRouter, Route, Routes, useLocation } from "react-router";

import { GoogleAnalytics } from "./data";

import Layout from "./pages/_Layout";

const ResumePage = lazy(() => import("./pages/Resume"));
const PortfolioPage = lazy(() => import("./pages/Porfolio"));

// biome-ignore lint/suspicious/noExplicitAny: Just a wrapper
function ScrollToTop({ children }: any) {
	const location = useLocation();

	// biome-ignore lint/correctness/useExhaustiveDependencies: Only monitor path changes
	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: "instant" });
	}, [location.pathname]);

	return children;
}

export default function App() {
	ReactGA.initialize(GoogleAnalytics.MeasurementId);

	return (
		<BrowserRouter>
			<Suspense fallback={<div>Loading...</div>}>
				<ScrollToTop>
					<Routes>
						<Route element={<Layout />}>
							<Route index element={<ResumePage />} />
							<Route path="portfolio" element={<PortfolioPage />} />
						</Route>
					</Routes>
				</ScrollToTop>
			</Suspense>
		</BrowserRouter>
	);
}
