import { List, Stack, Text } from "@mantine/core";
import type { JSX } from "react";

export type Experience = {
	key: string;
	role: string;
	company: string;
	location: string;
	employmentType: "Contract" | "Freelance" | "Full-time";
	employmentDuration: string;
	description: JSX.Element;
	badges: string[];
};

export const ProfessionalExperienceGreenBadges = [
	"C#",
	"TypeScript",
	"Golang",
	"Python",
	"NodeJS",
	".NET",
	".NET Framework",
];

export const ProfessionalExperience: Experience[] = [
	{
		key: "freelance-2024",
		role: "Research Assistant & Software Engineer",
		company: "Self-Employed",
		location: "Remote: Bogor, Indonesia",
		employmentType: "Freelance",
		employmentDuration: "March 2024 - present",
		description: (
			<List>
				<List.Item>
					Contributed to Sundanese NLP research for evaluating stemming
					algorithm. Utilized ChatGPT to generate synthetic dataset and
					fine-tuned information retrieval model based on Sentence-Transformers
					pretrained model.
				</List.Item>
				<List.Item>
					Built a point-of-sales app for wholesaler using Remix frontend and
					ASP.NET Core backend.
				</List.Item>
			</List>
		),
		badges: [
			"TypeScript",
			"C#",
			".NET",
			"Python",
			"Remix",
			"ASP.NET Core",
			"Flask",
			"Pytorch",
			"Sentence-Transformers",
			"Open AI",
			"MLflow",
			"PostgreSQL",
			"pg_vector",
			"Docker",
			"GitHub",
			"Azure",
		],
	},
	{
		key: "logee-2019",
		role: "Backend Developer",
		company: "Telkom Indonesia",
		location: "Jakarta, Indonesia",
		employmentType: "Contract",
		employmentDuration: "October 2019 - March 2024",
		description: (
			<Stack gap="0">
				<Text fw={500} mt="md">
					Lead Backend Developer
				</Text>
				<Text size="xs">January 2022 - March 2024</Text>
				<List>
					<List.Item>
						Rewritten NodeJS codebase to Go resulted in a 40% increase of
						request throughput
					</List.Item>
					<List.Item>
						Built a data ingestion pipeline in Go to connect Apache Kafka to
						Google Pub/Sub to build a data warehouse
					</List.Item>
					<List.Item>
						Tested Atlas HCL as database migration tool for PostgreSQL, reducing
						database schema versioning complexity on a large application
					</List.Item>
					<List.Item>
						Overhauled Dockerfiles to reduce image size by 50% using a
						distroless base image
					</List.Item>
					<List.Item>
						Crafted Helm charts and deployed container apps to OpenShift (K8s)
						using Jenkins
					</List.Item>
				</List>

				<Text fw={500} mt="md">
					Backend Developer
				</Text>
				<Text size="xs">January 2019 - November 2019</Text>
				<List>
					<List.Item>
						Contributed to develop truck management system REST API using NodeJS
						and MongoDB
					</List.Item>
					<List.Item>
						Implemented event-driven microservice apps using Apache Kafka as its
						backbone
					</List.Item>
					<List.Item>
						Standardized a structured logging framework for microservice apps
						and built APM dashboard in Kibana and DataDog
					</List.Item>
					<List.Item>
						Resolved multiple security issues in the codebase identified by
						SonarQube & DefectDojo
					</List.Item>
				</List>
			</Stack>
		),
		badges: [
			"NodeJS",
			"Golang",
			"MongoDB",
			"PostgreSQL",
			"Redis",
			"Minio",
			"Elasticsearch",
			"Kibana",
			"Apache Kafka",
			"GitLab",
			"Docker",
			"OpenShift",
			"Nginx Ingress",
			"Helm",
			"Jenkins",
			"SonarQube",
			"DefectDojo",
			"DataDog",
			"Alibaba Cloud",
			"Google Cloud",
			"Microservice",
			"DDD",
			"CQRS",
		],
	},
	{
		key: "freelance-2023",
		role: "Research Assistant & Software Engineer",
		company: "Self-Employed",
		location: "Remote: Bogor, Indonesia",
		employmentType: "Freelance",
		employmentDuration: "March 2022 - May 2022",
		description: (
			<List>
				<List.Item>
					Implemented a hybrid statistical and machine learning-based decision
					support system using SEM-PLS (structured equation modelling-partial
					least squares) and multilayer perceptron architecture
				</List.Item>
				<List.Item>
					Implemented a knowledge graph analysis system to correlate person
					information with a focus on criminal network prediction
				</List.Item>
			</List>
		),
		badges: [
			"Python",
			"FastAPI",
			"React",
			"SEM-PLS",
			"LIME",
			"Geospatial Data",
			"Network Analysis",
			"Docker",
			"Azure",
		],
	},
	{
		key: "tms-2019",
		role: "Windows App Developer",
		company: "Teknologi Maju Sentosa, PT",
		location: "Jakarta, Indonesia",
		employmentType: "Full-time",
		employmentDuration: "January 2019 - November 2019",
		description: (
			<List>
				<List.Item>
					Developed a Windows-based Windows Presentation Foundation (WPF)
					application to tunnel internet traffic through a Shadowsocks proxy
					server via TUN adapter
				</List.Item>
				<List.Item>
					Created an automated proxy switch using a PAC script to select the
					fastest proxy server, providing users with a fast and reliable
					connection
				</List.Item>
				<List.Item>
					Created MSI installer using WiX toolset v3 to automate the app, TUN
					driver, and MSVCRT component installation
				</List.Item>
			</List>
		),
		badges: [
			"C#",
			".NET Framework",
			"WPF",
			"Shadowsocks",
			"OpenVPN",
			"SOCKS5",
			"MVVM",
		],
	},
	{
		key: "freelance-2018",
		role: "Software Engineer",
		company: "Self-Employed",
		location: "Remote: Bogor, Indonesia",
		employmentType: "Freelance",
		employmentDuration: "October 2015 - August 2018",
		description: (
			<List>
				<List.Item>
					Developed a Windows Server automation tool to configure networking
					(IP, subnet, NetBIOS), user accounts, and more from a centralized
					control server for a data center
				</List.Item>
				<List.Item>
					Developed a video voice over recording application using Windows Forms
					and ffmpeg to encode audio and video together, providing an
					easy-to-use video voice over application
				</List.Item>
				<List.Item>
					Created an application to automate YouTube video metadata scraping
					into an Excel
				</List.Item>
			</List>
		),
		badges: [
			"C#",
			".NET Framework",
			"WPF",
			"WinForms",
			"ffmpeg",
			"Windows API",
			"Web Scraping",
			"Security",
		],
	},
];
