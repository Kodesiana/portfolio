import ContactSection from "./Contact";
import EducationSection from "./Education";
import ExperienceSection from "./Experience";
import ExtraSection from "./Extra";
import HeroSection from "./Hero";
import ProjectsSection from "./Projects";

export default function ResumePage() {
	return (
		<>
			<HeroSection />
			<ExperienceSection />
			<ProjectsSection />
			<EducationSection />
			<ExtraSection />
			<ContactSection />
		</>
	);
}
