import "@mantine/core/styles.css";
import "@mantine/nprogress/styles.css";

import { Suspense, lazy } from "react";
import ReactGA from "react-ga4";
import { BrowserRouter, Route, Routes } from "react-router";
import { MantineProvider } from "@mantine/core";

import { GoogleAnalytics } from "./data";

import Layout from "./pages/_Layout";
import ScrollToTop from "./hooks/ScrollToTop";
import SuspenseLoader from "./components/SuspenseLoader";

const ResumePage = lazy(() => import("./pages/Resume"));
const PortfolioPage = lazy(() => import("./pages/Porfolio"));

export default function App() {
	ReactGA.initialize(GoogleAnalytics.MeasurementId);

	return (
		<MantineProvider>
			<BrowserRouter>
				<Suspense fallback={<SuspenseLoader />}>
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
		</MantineProvider>
	);
}
