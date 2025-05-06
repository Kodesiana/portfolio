import {
	IconBrandAnsible,
	IconBrandCSharp,
	IconBrandNodejs,
	IconBrandOpenai,
	IconBrandPython,
	IconBrandTypescript,
} from "@tabler/icons-react";
import type { JSX } from "react";

export type Tech = Record<
	string,
	| { show: true; label: string; icon: JSX.Element }
	| { show: false; label: string; icon?: JSX.Element }
>;
export const Techs: Tech = {
	// languages
	csharp: {
		label: ".NET",
		show: true,
		icon: <IconBrandCSharp />,
	},
	python: {
		label: "Python",
		show: true,
		icon: <IconBrandPython />,
	},
	typescript: {
		label: "TypeScript",
		show: true,
		icon: <IconBrandTypescript />,
	},
	// runtimes
	nodejs: {
		label: "NodeJS",
		show: true,
		icon: <IconBrandNodejs />,
	},
	bun: {
		label: "Bun",
		show: false,
	},
	// Frameworks
	aspnetcore: {
		label: "ASP.NET Core",
		show: false,
	},
	react: {
		label: "React",
		show: false,
	},
	flask: {
		label: "Flask",
		show: false,
	},
	transformers: {
		label: "Transformers",
		show: false,
	},
	// BI Tools
	powerbi: {
		label: "MS Power BI",
		show: false,
	},
	// Tools
	ansible: {
		label: "Ansible",
		show: true,
		icon: <IconBrandAnsible />,
	},
	// Services
	openai: {
		label: "Open AI",
		show: true,
		icon: <IconBrandOpenai />,
	},
	gemini: {
		label: "Gemini",
		show: false,
	},
};

export const TechMapping = Object.entries(Techs).reduce(
	(prev, [key, value]) => {
		prev[key] = value.label;
		return prev;
	},
	{} as Record<keyof typeof Techs, string>,
);

export const ProjectCategory = {
	"open-source": "Open Source",
};

export type Project = {
	name: string;
	tech: Array<keyof typeof TechMapping>;
	category: keyof typeof ProjectCategory;
	shortDesc: string;
	longDesc?: JSX.Element;
	coverImage?: string;
	githubUrl?: string;
	appUrl?: string;
};
export const Projects: Project[] = [
	{
		name: "Ritsu-Pi",
		category: "open-source",
		tech: ["ansible"],
		shortDesc: "Lorem ipsum",
		githubUrl: "https://github.com/fahminlb33/ritsu-pi",
	},
	{
		name: "Bogor House Price Analysis",
		category: "open-source",
		tech: ["python", "powerbi", "gemini", "gemini"],
		shortDesc: "Lorem ipsum",
		githubUrl: "https://github.com/fahminlb33/bogor-house-price",
	},
	{
		name: "Kalkulator Gaji",
		category: "open-source",
		tech: ["typescript", "react"],
		shortDesc: "Lorem ipsum",
		githubUrl: "https://github.com/Kodesiana/ppp-calculator",
		appUrl: "https://kalkulator-gaji.kodesiana.app/",
	},
];
