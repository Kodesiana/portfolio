export type ExperienceDescription = {
	title: string;
	company?: string;
	duration: string;
	items: string[];
};

export type Experience = {
	key: string;
	company: string;
	location: string;
	employmentType: "Contract" | "Freelance" | "Full-time";
	employmentDuration: string;
	description: ExperienceDescription[];
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
		key: "metranet-dpr",
		company: "Metranet, PT",
		location: "Jakarta, Indonesia",
		employmentType: "Freelance",
		employmentDuration: "May 2025 - present",
		description: [
			{
				title: "Data Analyst (and more)",
				company: "House of Representatives (DPR)",
				duration: "May 2025 - present",
				items: [
					"Developed strategic dashboard using Tableau to government units support decision making",
					"Utilized LLM to analyze legal bills and clauses and provided comprehensive analysis of possible contradictions to existing laws",
					"Provisioned and managed multiple AI-centric applications: llama-cpp-python, SGLang, Dify.ai, and n8n, along with it's dependencies such as Docker, PostgreSQL, Redis, and Minio",
					"Quantized multiple LLMs for efficient inference using llama.cpp and SGLang",
				],
			},
		],
		badges: ["Python", "PostgreSQL", "Apache Hive", "PostgreSQL", "Tableau", "Docker", "Redis", "Minio", "llama.cpp", "SGLang", "Dify.ai", "n8n"],
	},
	{
		key: "freelance-2024",
		company: "Self-Employed",
		location: "Remote from Bogor, West Java, Indonesia",
		employmentType: "Freelance",
		employmentDuration: "March 2024 - present",
		description: [
			{
				title: "Research Assistant",
				duration: "January 2022 - present",
				items: [
					"Contributed to Sundanese NLP research for evaluating stemming algorithm",
					"Utilized ChatGPT to generate synthetic dataset and fine-tuned information retrieval model based on Sentence-Transformers pretrained model",
				],
			},
			{
				title: "Backend Developer",
				duration: "January 2022 - March 2024",
				items: [
					"Built a point-of-sales app for wholesaler using Remix frontend and ASP.NET Core backend",
				],
			},
		],
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
			"Tableau",
			"Azure",
		],
	},
	{
		key: "logee-2019",
		company: "Telkom Indonesia",
		location: "Jakarta, Indonesia",
		employmentType: "Contract",
		employmentDuration: "October 2019 - March 2024",
		description: [
			{
				title: "Lead Backend Developer",
				duration: "January 2022 - March 2024",
				items: [
					"Rewritten NodeJS codebase to Go resulted in a 40% increase of request throughput",
					"Built a data ingestion pipeline in Go to connect Apache Kafka to Google Pub/Sub to build a data warehouse",
					"Tested Atlas HCL as database migration tool for PostgreSQL, reducing database schema versioning complexity on a large application",
					"Overhauled Dockerfiles to reduce image size by 50% using a distroless base image",
					"Crafted Helm charts and deployed container apps to OpenShift (K8s) using Jenkins",
				],
			},
			{
				title: "Backend Developer",
				duration: "October 2019 - December 2022",
				items: [
					"Contributed to develop truck management system REST API using NodeJS and MongoDB",
					"Implemented event-driven microservice apps using Apache Kafka as its backbone",
					"Standardized a structured logging framework for microservice apps and built APM dashboard in Kibana and DataDog",
					"Resolved multiple security issues in the codebase identified by SonarQube & DefectDojo",
				],
			},
		],
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
		company: "Self-Employed",
		location: "Remote from Bogor, West Java, Indonesia",
		employmentType: "Freelance",
		employmentDuration: "March 2022 - May 2022",
		description: [
			{
				title: "Research Assistant",
				duration: "January 2022 - March 2024",
				items: [
					"Implemented a hybrid statistical and machine learning-based decision support system using SEM-PLS (structured equation modelling-partial least squares) and multilayer perceptron architecture",
				],
			},
			{
				title: "Software Engineer",
				duration: "October 2019 - December 2022",
				items: [
					"Implemented a knowledge graph analysis system to correlate person information with a focus on criminal network prediction",
				],
			},
		],
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
		company: "Teknologi Maju Sentosa, PT",
		location: "Jakarta, Indonesia",
		employmentType: "Full-time",
		employmentDuration: "January 2019 - November 2019",
		description: [
			{
				title: "Windows Developer",
				duration: "January 2022 - March 2024",
				items: [
					"Developed a Windows-based Windows Presentation Foundation (WPF) application to tunnel internet traffic through a Shadowsocks proxy server via TUN adapter",
					"Created an automated proxy switch using a PAC script to select the fastest proxy server, providing users with a fast and reliable connection",
					"Created MSI installer using WiX toolset v3 to automate the app, TUN driver, and MSVCRT component installation",
				],
			},
		],
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
		company: "Self-Employed",
		location: "Remote from Bogor, West Java, Indonesia",
		employmentType: "Freelance",
		employmentDuration: "October 2015 - August 2018",
		description: [
			{
				title: "Software Engineer",
				duration: "January 2022 - March 2024",
				items: [
					"Developed a Windows Server automation tool to configure networking (IP, subnet, NetBIOS), user accounts, and more from a centralized control server for a data center",
					"Developed a video voice over recording application using Windows Forms and ffmpeg to encode audio and video together, providing an easy-to-use video voice over application",
					"Created an application to automate YouTube video metadata scraping into an Excel",
				],
			},
		],
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
