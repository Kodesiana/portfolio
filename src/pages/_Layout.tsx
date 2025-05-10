import { Container } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import { NavigationProgress, nprogress } from "@mantine/nprogress";
import { useEffect } from "react";
import { Outlet } from "react-router";

import FooterSection from "~/components/Footer";

export default function App() {
	const [scroll, _] = useWindowScroll();

	useEffect(() => {
		// formula: https://css-tricks.com/how-i-put-the-scroll-percentage-in-the-browser-title-bar/
		const scrollPercent =
			(scroll.y / (window.document.body.offsetHeight - window.innerHeight)) *
			100;
		nprogress.set(scrollPercent);
	}, [scroll]);

	return (
		<>
			<NavigationProgress />
			<Container my="128px">
				<Outlet />
			</Container>
			<FooterSection />
		</>
	);
}
