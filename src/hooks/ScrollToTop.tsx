import { useEffect } from "react";
import { useLocation } from "react-router";

// biome-ignore lint/suspicious/noExplicitAny: Just a wrapper
export default function ScrollToTop({ children }: any) {
	const location = useLocation();

	// biome-ignore lint/correctness/useExhaustiveDependencies: Only monitor path changes
	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: "instant" });
	}, [location.pathname]);

	return children;
}
