import { Text } from "@mantine/core";
import type { ReactNode } from "react";

import type { TechNames } from "./tech";

export type ProjectCategory = "open-source" | "research" | "active";
export type Project = {
	key: string;
	title: string;
	tech: Array<TechNames>;
	categories: Array<ProjectCategory>;
	shortDesc: string;
	longDesc: ReactNode;
	employment?: string;
	coverImage?: string;
	githubUrl?: string;
	appUrl?: string;
};
export const Projects: Project[] = [
	{
		key: "ritsu-pi",
		title: "Ritsu-Pi",
		categories: ["open-source", "active"],
		tech: ["ansible", "docker", "grafana", "prometheus", "mlflow"],
		coverImage: "https://placehold.co/600x400",
		githubUrl: "https://github.com/fahminlb33/ritsu-pi",
		shortDesc: "A home lab server automation using Ansible playbook",
		longDesc: <Text>Lorem ipsum</Text>,
	},
	{
		key: "bogor-house-price",
		title: "Bogor House Price Analysis",
		categories: ["open-source"],
		tech: ["python", "duckdb", "powerbi", "gemini"],
		coverImage: "https://placehold.co/600x400",
		githubUrl: "https://github.com/fahminlb33/bogor-house-price",
		shortDesc: "End-to-end house price analysis and recommendation using RAG",
		longDesc: <Text>Lorem ipsum</Text>,
	},
	{
		key: "salary-calculator",
		title: "PPP Salary Calculator",
		categories: ["open-source", "active"],
		tech: ["typescript", "react"],
		coverImage: "https://placehold.co/600x400",
		githubUrl: "https://github.com/Kodesiana/ppp-calculator",
		appUrl: "https://kalkulator-gaji.kodesiana.app/",
		shortDesc: "Salary converter using the Purchasing Power Parity (PPP) method to approximate standard of living",
		longDesc: <Text>Lorem ipsum</Text>,
	},
	{
		key: "pohonfit",
		title: "Pohonfit",
		categories: ["open-source", "research", "active"],
		tech: ["typescript", "react"],
		coverImage: "https://placehold.co/600x400",
		githubUrl: "https://github.com/Kodesiana/ppp-calculator",
		appUrl: "https://kalkulator-gaji.kodesiana.app/",
		shortDesc: "Tool for estimating tree growth using a novel nonlinear regression model",
		longDesc: <Text>Lorem ipsum</Text>,
	},
	{
		key: "thesis-whale",
		title: "Whale Sighthing Zone Prediction",
		categories: ["open-source", "research", "active"],
		tech: ["typescript", "react"],
		coverImage: "https://placehold.co/600x400",
		githubUrl: "https://github.com/fahminlb33/autogbifml",
		appUrl: "https://paus.kodesiana.app",
		shortDesc: "AutoGBIFML: modelling whale sighting zones using GBIF occurrence data and tree-based models (my master thesis)",
		longDesc: <Text>Lorem ipsum</Text>,
	},
];
