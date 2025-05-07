import type { ReactNode } from "react";
import {
	SiAlpinedotjs,
	SiApachekafka,
	SiApachespark,
	SiArduino,
	SiBun,
	SiDatadog,
	SiDbt,
	SiDuckdb,
	SiEspressif,
	SiFastapi,
	SiFfmpeg,
	SiFlask,
	SiGooglecloud,
	SiGooglegemini,
	SiGrafana,
	SiHelm,
	SiHuggingface,
	SiJenkins,
	SiJira,
	SiJupyter,
	SiKibana,
	SiKubernetes,
	SiLinux,
	SiLooker,
	SiMantine,
	SiMinio,
	SiMlflow,
	SiNginx,
	SiNumpy,
	SiOllama,
	SiOpencv,
	SiOpentelemetry,
	SiPandas,
	SiPostgresql,
	SiPrometheus,
	SiPytorch,
	SiQgis,
	SiRedhatopenshift,
	SiRedis,
	SiScikitlearn,
	SiScrapy,
	SiSonarqube,
	SiSqlite,
	SiTensorflow,
	SiUv,
	SiWebassembly,
} from "react-icons/si";
import {
	TbAppWindow,
	TbBrandAnsible,
	TbBrandAzure,
	TbBrandCSharp,
	TbBrandCloudflare,
	TbBrandDocker,
	TbBrandElastic,
	TbBrandGit,
	TbBrandGithub,
	TbBrandGitlab,
	TbBrandGolang,
	TbBrandMongodb,
	TbBrandNodejs,
	TbBrandOffice,
	TbBrandOpenai,
	TbBrandPython,
	TbBrandReact,
	TbBrandTypescript,
	TbLayoutDashboard,
	TbProtocol,
} from "react-icons/tb";

const IconSize = "1.6em";

const InternalTechs = {
	// languages
	python: {
		label: "Python",
		icon: <TbBrandPython size={IconSize} />,
	},
	typescript: {
		label: "TypeScript",
		icon: <TbBrandTypescript size={IconSize} />,
	},
	golang: {
		label: "Golang",
		icon: <TbBrandGolang size={IconSize} />,
	},
	// runtimes
	dotnet: {
		label: ".NET",
		icon: <TbBrandCSharp size={IconSize} />,
	},
	nodejs: {
		label: "NodeJS",
		icon: <TbBrandNodejs size={IconSize} />,
	},
	bun: {
		label: "Bun",
		show: false,
		icon: <SiBun size={IconSize} />,
	},
	// frameworks
	aspnetcore: {
		label: "ASP.NET Core",
		show: false,
	},
	react: {
		label: "React",
		icon: <TbBrandReact size={IconSize} />,
	},
	flask: {
		label: "Flask",
		icon: <SiFlask size={IconSize} />,
	},
	fastapi: {
		label: "FastAPI",
		icon: <SiFastapi size={IconSize} />,
	},
	transformers: {
		label: "Transformers",
		icon: <SiHuggingface size={IconSize} />,
	},
	numpy: {
		label: "NumPy",
		show: false,
		icon: <SiNumpy size={IconSize} />,
	},
	pandas: {
		label: "Pandas",
		show: false,
		icon: <SiPandas size={IconSize} />,
	},
	tensorFlow: {
		label: "TensorFlow",
		icon: <SiTensorflow size={IconSize} />,
	},
	pytorch: {
		label: "PyTorch",
		icon: <SiPytorch size={IconSize} />,
	},
	scikitLearn: {
		label: "Scikit-Learn",
		icon: <SiScikitlearn size={IconSize} />,
	},
	xgboost: {
		label: "XGBoost",
		show: false,
	},
	lightgbm: {
		label: "LightGBM",
		show: false,
	},
	mcp: {
		label: "Model Context Protocol",
		icon: <TbProtocol size={IconSize} />,
	},
	scrapy: {
		label: "Scrapy",
		icon: <SiScrapy size={IconSize} />,
	},
	wasm: {
		label: "WASM",
		icon: <SiWebassembly size={IconSize} />,
	},
	// databases
	sqlite: {
		label: "SQLite",
		icon: <SiSqlite size={IconSize} />,
	},
	postgres: {
		label: "PostgreSQL",
		icon: <SiPostgresql size={IconSize} />,
	},
	duckdb: {
		label: "DuckDB",
		icon: <SiDuckdb size={IconSize} />,
	},
	redis: {
		label: "Redis",
		icon: <SiRedis size={IconSize} />,
	},
	mongodb: {
		label: "MongoDB",
		icon: <TbBrandMongodb size={IconSize} />,
	},
	elasticsearch: {
		label: "Elasticsearch",
		icon: <TbBrandElastic size={IconSize} />,
	},
	minio: {
		label: "MinIO",
		icon: <SiMinio size={IconSize} />,
	},
	// BI tools
	lookerStudio: {
		label: "Looker Studio",
		icon: <SiLooker size={IconSize} />,
	},
	powerbi: {
		label: "Microsoft Power BI",
		icon: <TbLayoutDashboard size={IconSize} />,
	},
	msExcel: {
		label: "Microsoft Excel",
		icon: <TbBrandOffice size={IconSize} />,
	},
	kibana: {
		label: "Kibana",
		icon: <SiKibana size={IconSize} />,
	},
	dbt: {
		label: "dbt",
		icon: <SiDbt size={IconSize} />,
	},
	// tools
	uv: {
		label: "uv",
		icon: <SiUv size={IconSize} />,
	},
	git: {
		label: "Git",
		icon: <TbBrandGit size={IconSize} />,
	},
	github: {
		label: "GitHub",
		icon: <TbBrandGithub size={IconSize} />,
	},
	gitlab: {
		label: "GitLab",
		icon: <TbBrandGitlab size={IconSize} />,
	},
	qgis: {
		label: "QGIS",
		icon: <SiQgis size={IconSize} />,
	},
	otel: {
		label: "OpenTelemetry",
		icon: <SiOpentelemetry size={IconSize} />,
	},
	jupyter: {
		label: "Jupyter Notebooks",
		icon: <SiJupyter size={IconSize} />,
	},
	ollama: {
		label: "Ollama",
		icon: <SiOllama size={IconSize} />,
	},
	jira: {
		label: "JIRA",
		show: false,
		icon: <SiJira size={IconSize} />,
	},
	// UI
	wpf: {
		label: "WPF",
		show: false,
		icon: <TbAppWindow size={IconSize} />,
	},
	winforms: {
		label: "Windows Forms",
		show: false,
		icon: <TbAppWindow size={IconSize} />,
	},
	alpinejs: {
		label: "Alpine",
		show: false,
		icon: <SiAlpinedotjs size={IconSize} />,
	},
	mantine: {
		label: "Mantine",
		show: false,
		icon: <SiMantine size={IconSize} />,
	},
	// infra
	ansible: {
		label: "Ansible",
		icon: <TbBrandAnsible size={IconSize} />,
	},
	linux: {
		label: "Linux",
		icon: <SiLinux size={IconSize} />,
	},
	docker: {
		label: "Docker",
		icon: <TbBrandDocker size={IconSize} />,
	},
	k8s: {
		label: "Kubernetes",
		icon: <SiKubernetes size={IconSize} />,
	},
	helm: {
		label: "Helm",
		icon: <SiHelm size={IconSize} />,
	},
	openshift: {
		label: "OpenShift",
		icon: <SiRedhatopenshift size={IconSize} />,
	},
	jenkins: {
		label: "Jenkins",
		icon: <SiJenkins size={IconSize} />,
	},
	sonarQube: {
		label: "SonarQube",
		icon: <SiSonarqube size={IconSize} />,
	},
	prometheus: {
		label: "Prometheus",
		icon: <SiPrometheus size={IconSize} />,
	},
	grafana: {
		label: "Grafana",
		icon: <SiGrafana size={IconSize} />,
	},
	datadog: {
		label: "DataDog",
		icon: <SiDatadog size={IconSize} />,
	},
	nginx: {
		label: "Nginx",
		icon: <SiNginx size={IconSize} />,
	},
	// data tools
	apacheKafka: {
		label: "Apache Kafka",
		icon: <SiApachekafka size={IconSize} />,
	},
	apacheSpark: {
		label: "Apache Spark",
		icon: <SiApachespark size={IconSize} />,
	},
	mlflow: {
		label: "MLflow",
		icon: <SiMlflow size={IconSize} />,
	},
	// computer vision and media
	ffmpeg: {
		label: "ffmpeg",
		icon: <SiFfmpeg size={IconSize} />,
	},
	opencv: {
		label: "OpenCV",
		icon: <SiOpencv size={IconSize} />,
	},
	// services
	azure: {
		label: "Microsoft Azure",
		icon: <TbBrandAzure size={IconSize} />,
	},
	gcp: {
		label: "Google Cloud",
		icon: <SiGooglecloud size={IconSize} />,
	},
	cloudflare: {
		label: "CloudFlare",
		icon: <TbBrandCloudflare size={IconSize} />,
	},
	openai: {
		label: "Open AI",
		icon: <TbBrandOpenai size={IconSize} />,
	},
	gemini: {
		label: "Gemini",
		icon: <SiGooglegemini size={IconSize} />,
	},
	// hardware
	arduino: {
		label: "Arduino",
		show: false,
		icon: <SiArduino size={IconSize} />,
	},
	esp32: {
		label: "ESP-32",
		show: false,
		icon: <SiEspressif size={IconSize} />,
	},
};

export type TechNames = keyof typeof InternalTechs;
export const Techs: Record<
	TechNames,
	{ label: string; show?: boolean; icon?: ReactNode }
> = InternalTechs;
