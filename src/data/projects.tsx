import type { TechNames } from "./tech";

export type ProjectCategory =
	| "open-source"
	| "research"
	| "active"
	| "professional";

export type Project = {
	key: string;
	year: string;
	title: string;
	categories: Array<ProjectCategory>;
	tech: Array<TechNames>;
	description: string;
	coverImage?: string;
	githubUrl?: string;
	appUrl?: string;
};

export const Projects: Project[] = [
	{
		key: "ipb-promotor-network",
		year: "2026",
		title: "IPB Researchers Co-occurence Network",
		categories: ["open-source", "research"],
		tech: ["python", "pandas", "cloudflare", "git", "github", "jupyter", "scrapy", "uv"],
		githubUrl: "https://github.com/Kodesiana/ipb-repo-analysis",
		appUrl: "https://ipb-promotor.kodesiana.com/",
		description: "Helping prospective students to find your next supervisor in IPB University",
	},
	{
		key: "devto-postmark-2025",
		year: "2025",
		title: "Ritsu-Pi EmailOps",
		categories: ["open-source"],
		tech: ["dotnet", "sqlite", "docker"],
		githubUrl: "https://github.com/fahminlb33/ritsu-pi-emailops",
		appUrl:
			"https://dev.to/fahminlb33/ritsu-pi-emailops-homelab-management-via-email-powered-by-postmark-4ean",
		description:
			"Email-based homelab management using Postmark Inbound Email API. View system resources, start, stop, and restart Docker containers via email",
	},
	{
		key: "bogorintellitraffic",
		year: "2025",
		title: "Bogor IntelliTraffic",
		categories: ["open-source"],
		tech: ["dotnet", "openai", "ffmpeg"],
		githubUrl: "https://github.com/Kodesiana/intellitraffic",
		appUrl:
			"https://www.linkedin.com/posts/fahmi-noor-fiqri_pitch-deck-for-bogor-intellitraffic-project-activity-7331867665487015936-O80H?utm_source=share&utm_medium=member_desktop&rcm=ACoAABxfGzwB1c29FfWPsCB8w9egtwrTkBivnvM",
		description:
			"Traffic intelligence system for Bogor City, Indonesia, utilizing live CCTV feed from Bogor municipality and OpenAI's GPT-1o for traffic analysis",
	},
	{
		key: "devto-permitio-mcp",
		year: "2025",
		title: "MCP Server Authorization using Permit.io",
		categories: ["open-source"],
		tech: ["nodejs", "typescript", "mcp", "sqlite"],
		githubUrl: "https://github.com/fahminlb33/devto-permitio-mcp",
		appUrl:
			"https://dev.to/fahminlb33/authorization-in-mcp-server-with-permitio-a-jira-like-task-management-api-492l",
		description:
			"A hackathon project utilizing Permit.io RBAC and ReBAC for authorization of tools in MCP server",
	},
	{
		key: "thesis-whale",
		year: "2024-2025",
		title: "AutoGBIFML",
		categories: ["open-source", "research", "active"],
		tech: [
			"python",
			"typescript",
			"alpinejs",
			"xgboost",
			"pandas",
			"scikitLearn",
			"jupyter",
			"uv",
		],
		githubUrl: "https://github.com/fahminlb33/autogbifml",
		appUrl: "https://paus.kodesiana.app",
		description:
			"Predicting whale sighting zones using GBIF occurrence data and tree-based models (master thesis)",
	},
	{
		key: "amsearch",
		year: "2024-2025",
		title: "AMSearch",
		categories: ["research", "professional"],
		tech: [
			"python",
			"flask",
			"jupyter",
			"pytorch",
			"transformers",
			"uv",
			"openai",
			"postgres",
		],
		description:
			"Sundanese-focused information retrieval and evaluation using LLM-generated synthetic data",
	},
	{
		key: "ritsu-pi",
		year: "2022-2025",
		title: "Ritsu-Pi",
		categories: ["open-source", "active"],
		tech: ["ansible", "docker", "grafana", "prometheus", "mlflow"],
		githubUrl: "https://github.com/fahminlb33/ritsu-pi",
		description:
			"A home lab server provisioning automation using Ansible playbook and Docker containers",
	},
	{
		key: "salary-calculator",
		year: "2025",
		title: "PPP Salary Calculator",
		categories: ["open-source", "active"],
		tech: ["typescript", "alpinejs"],
		githubUrl: "https://github.com/Kodesiana/ppp-calculator",
		appUrl: "https://kalkulator-gaji.kodesiana.app",
		description:
			"Salary converter using the Purchasing Power Parity (PPP) method to approximate standard of living",
	},
	{
		key: "bogor-house-price",
		year: "2024-2025",
		title: "Bogor House Price Analysis",
		categories: ["open-source"],
		tech: ["python", "duckdb", "powerbi", "gemini", "jupyter", "uv"],
		githubUrl: "https://github.com/fahminlb33/bogor-house-price",
		description:
			"End-to-end house price analysis in Bogor, Indonesia. Integrated agentic chat with Gemini AI and an MCP server",
	},
	{
		key: "blob-proxy",
		year: "2025",
		title: "CloudFlare R2 Proxy",
		categories: ["open-source", "active"],
		tech: ["typescript", "cloudflare"],
		githubUrl: "https://github.com/Kodesiana/blob-proxy",
		description:
			"CloudFlare R2 proxy using Workers for providing Azure-like SAS token to support file sharing",
	},
	{
		key: "classif-auth-net",
		year: "2024-2025",
		title: "AuthNET",
		categories: ["research", "active"],
		tech: ["python", "pytorch", "scikitLearn", "xgboost", "jupyter", "uv"],
		description:
			"Autoencoder-based deep learning model for chemometrics application in food authentication",
	},
	{
		key: "pohonfit",
		year: "2023-2025",
		title: "Pohonfit",
		categories: ["research", "active"],
		tech: ["typescript", "react", "numpy", "wasm", "mantine"],
		appUrl: "https://pohonfit.kodesiana.app",
		description:
			"Tool for estimating tree growth using a novel nonlinear regression model, running entirely in Python WASM",
	},
	{
		key: "pendekin",
		year: "2023-2025",
		title: "Pendekin",
		categories: ["open-source", "active"],
		tech: ["typescript", "cloudflare"],
		githubUrl: "https://github.com/Kodesiana/pendekin",
		description:
			"URL shortening API using CloudFlare Worker and KV. Used for outbound links in Kodesiana.com",
	},
	{
		key: "kalisma",
		year: "2024",
		title: "Kalisma Wholesaler",
		categories: ["professional"],
		tech: [
			"dotnet",
			"aspnetcore",
			"typescript",
			"react",
			"mantine",
			"postgres",
			"docker",
		],
		description: "Simple point-of-sales and stock management for wholesaler.",
	},
	{
		key: "devto-timescale-pgai",
		year: "2024",
		title: "KawanPaper",
		categories: ["open-source"],
		tech: ["nodejs", "typescript", "postgres"],
		githubUrl: "https://github.com/fahminlb33/KFlearning",
		appUrl:
			"https://dev.to/fahminlb33/systematic-literature-review-with-kawanpaper-110l",
		description:
			"RAG chat for assisting researcher in systematic literature review. Fully written in PL/pgSQL with Timescale's pgai ext.",
	},
	{
		key: "hb-noninvasive",
		year: "2024-2025",
		title: "Non-invasive Hemoglobin Measurement",
		categories: ["open-source", "research"],
		tech: ["python", "scikitLearn", "jupyter", "uv"],
		githubUrl: "https://github.com/fahminlb33/hb-noninvasive",
		description:
			"A novel non-invasive hemoglobin (Hb) prediction from near-infrared sensor using FFT and machine learning models",
	},
	{
		key: "eegautism",
		year: "2024-2025",
		title: "Autism Diagnosis from EEG Signal",
		categories: ["open-source", "research"],
		tech: ["python", "tensorFlow", "jupyter", "uv"],
		githubUrl: "https://github.com/fahminlb33/eegautism",
		description:
			"Comparison of multiple convolutional neural network architectures for diagnosing autism from 16 channels EEG",
	},
	{
		key: "logee-control-tower",
		year: "2022-2024",
		title: "Logee Control Tower",
		categories: ["professional"],
		tech: ["nodejs", "mongodb"],
		description:
			"Logee Control Tower is analytics platform for Logee's end-to-end supply chain solution, providing a helicopter view of the logstics operation",
	},
	{
		key: "logee-transport",
		year: "2019-2022",
		title: "Logee Transport",
		categories: ["professional"],
		tech: ["nodejs", "mongodb"],
		description:
			"Logee Transport is a truck management system to streamline logistics operations",
	},
	{
		key: "pico-nvidia-updater",
		year: "2024",
		title: "PicoNvidiaUpdater",
		categories: ["open-source"],
		tech: ["dotnet"],
		githubUrl: "https://github.com/fahminlb33/PicoNvidiaUpdater",
		description:
			"Small tool to update Nvidia GPU drivers without the annoying Nvidia GeForce Experience app",
	},
	{
		key: "kpu2024-pleno-readability",
		year: "2024-2025",
		title: "Indonesia Presidential Election 2024 Analytics",
		categories: ["open-source", "active"],
		tech: ["python", "pandas", "scrapy", "opencv", "jupyter", "uv"],
		githubUrl: "https://github.com/fahminlb33/kpu2024-pleno-readability",
		description:
			"Analysis of the Indonesia's Presidential Election 2024 ballot form. Detecting blur and possible manipulations",
	},
	{
		key: "kflearning",
		year: "2020-2024",
		title: "KFLearning",
		categories: ["open-source"],
		tech: ["dotnet", "winforms"],
		githubUrl: "https://github.com/fahminlb33/KFlearning",
		description:
			"Computer lab setup tool and student project management, tailored to help TAs in Pakuan University",
	},
	{
		key: "voyager",
		year: "2023",
		title: "Voyager",
		categories: ["open-source", "research"],
		tech: ["python", "numpy", "jupyter", "ffmpeg", "uv"],
		githubUrl: "https://github.com/fahminlb33/voyager",
		description: "Voyager (satellite) mission record decoder to images",
	},
	{
		key: "agripen",
		year: "2023",
		title: "AgriPen",
		categories: ["open-source", "research"],
		tech: [
			"arduino",
			"esp32",
			"dotnet",
			"python",
			"typescript",
			"aspnetcore",
			"react",
			"docker",
			"nginx",
		],
		githubUrl: "https://github.com/fahminlb33/PicoNvidiaUpdater",
		description:
			"Soil quality sensor using ESP-32 with a full-stack website dashboard and mobile app (MAUI) for monitoring",
	},
	{
		key: "redis-status-page",
		year: "2022",
		title: "Redis Status Page",
		categories: ["open-source"],
		tech: ["dotnet", "aspnetcore", "redis", "docker"],
		githubUrl: "https://github.com/fahminlb33/RedisStatusPage",
		appUrl: "https://dev.to/fahminlb33/status-page-with-redis-5gh7",
		description: "Simple status page built using Redis Stack for a hackathon",
	},
	{
		key: "bedah-data-apbd-2022",
		year: "2022",
		title: "Bedah Data APBD 2022",
		categories: ["open-source"],
		tech: ["python", "pandas", "gcp", "jupyter"],
		githubUrl: "https://github.com/fahminlb33/bedah-data-apbd-2022",
		description:
			"Analysis of Regional Government Budget (APBD) usage compliance by district",
	},
	{
		key: "ieee-cyberc-comp-2022",
		year: "2022",
		title: "China House Price Prediction",
		categories: ["open-source"],
		tech: ["python", "xgboost", "scikitLearn", "jupyter"],
		githubUrl: "https://github.com/fahminlb33/ieee-cyberc-2022",
		description:
			"IEEE CyberC Data Analytics Competition 2022. A model for predicting house prices in China regions",
	},
	{
		key: "skripsi-s1",
		year: "2022",
		title: "Paddy Disease Detection",
		categories: ["open-source", "research"],
		tech: ["python", "tensorFlow", "jupyter", "uv"],
		githubUrl: "https://github.com/fahminlb33/rice-paddy-classification",
		description:
			"Image classification model based on MobileNetV2 to classify 5 disease from paddy images (undergraduate thesis)",
	},
	{
		key: "natsupy",
		year: "2021",
		title: "NatsuPy",
		categories: ["open-source"],
		tech: ["python", "arduino", "numpy", "jupyter"],
		githubUrl: "https://github.com/fahminlb33/natsupy",
		description:
			"Analysis of Regional Government Budget (APBD) usage compliance by district",
	},
	{
		key: "sibyl-eeg",
		year: "2021",
		title: "Soberity Prediction using EEG",
		categories: ["open-source", "research"],
		tech: ["python", "numpy", "scikitLearn", "tensorFlow", "jupyter"],
		githubUrl: "https://github.com/fahminlb33/sibyl_eeg",
		description:
			"Predicting person soberity from alcohol-induced use using EEG signal",
	},
	{
		key: "ieee-cs-gsc-2021",
		year: "2021",
		title: "IEEE Computer Society Global Student Challenge 2021",
		categories: ["open-source"],
		tech: [
			"python",
			"numpy",
			"pandas",
			"scikitLearn",
			"tensorFlow",
			"apacheSpark",
			"jupyter",
		],
		githubUrl: "https://github.com/fahminlb33/ieee-gsc-2021",
		description:
			"Predicting server fault from log data and categorizing sentences into multiple categories",
	},
	{
		key: "covid-19-flask",
		year: "2020",
		title: "COVID-19 Diagnosis using Chest X-ray Images",
		categories: ["open-source", "research"],
		tech: ["python", "numpy", "scikitLearn", "tensorFlow", "flask", "jupyter"],
		githubUrl: "https://github.com/fahminlb33/covid-19-flask",
		description:
			"Predicting server fault from log data and categorizing sentences into multiple categories",
	},
	{
		key: "master-vpn",
		year: "2018",
		title: "MasterVPN",
		categories: ["professional"],
		tech: ["dotnet"],
		description: "An evolution of SuperVPN, a VPN client for Windows using Shadowsocks protocol. Now includes a PAC script to automatically select fastest server",
	},
	{
		key: "super-vpn",
		year: "2018",
		title: "SuperVPN",
		categories: ["professional"],
		tech: ["dotnet"],
		description: "Easy to use VPN client for Windows using Shadowsocks protocol to circumvent internet censorship",
	},
	{
		key: "mclam",
		year: "2017",
		title: "MClam",
		categories: ["open-source"],
		tech: ["dotnet"],
		githubUrl: "https://github.com/fahminlb33/MClam",
		description:
			"ClamAV P/invoke bindings for C#. Available bindings: libclamav, freshclam, and sigtool",
	},
];
