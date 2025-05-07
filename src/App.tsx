import "@mantine/core/styles.css";
import "@mantine/nprogress/styles.css";

import { useEffect } from "react";
import { Container, MantineProvider } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import { ModalsProvider } from "@mantine/modals";
import { NavigationProgress, nprogress } from "@mantine/nprogress";
import ReactGA from "react-ga4";

import { GoogleAnalytics } from "./data";
import FooterSection from "./components/Footer";
import {
	ContactSection,
	EducationSection,
	ExperienceSection,
	ExtraSection,
	HeroSection,
	// Projects,
} from "./sections";

export default function App() {
	const [scroll, _] = useWindowScroll();

	useEffect(() => {
		// formula: https://css-tricks.com/how-i-put-the-scroll-percentage-in-the-browser-title-bar/
		const scrollPercent =
			(scroll.y / (window.document.body.offsetHeight - window.innerHeight)) *
			100;
		nprogress.set(scrollPercent);
	}, [scroll]);

	ReactGA.initialize(GoogleAnalytics.MeasurementId);

	return (
		<MantineProvider>
			<ModalsProvider>
				<NavigationProgress />
				<Container my="128px">
					<HeroSection />
					<ExperienceSection />
					{/* <Projects /> */}
					<EducationSection />
					<ExtraSection />
					<ContactSection />
				</Container>
				<FooterSection />
			</ModalsProvider>
		</MantineProvider>
	);
}
