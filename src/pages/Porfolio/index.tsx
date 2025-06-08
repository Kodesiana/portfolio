import {
	Button,
	Center,
	Flex,
	SegmentedControl,
	Stack,
	Text,
	Title,
} from "@mantine/core";
import { useState } from "react";
import ReactGA from "react-ga4";
import {
	TbArrowLeft,
	TbBrandOpenSourceFilled,
	TbBriefcase,
	TbEye,
	TbMicroscope,
	TbPlayerPlayFilled,
} from "react-icons/tb";
import { Link } from "react-router";

import { type ProjectCategory, Projects, type TechNames, Techs } from "~/data";

import ProjectItem from "./ProjectItem";

const CategoryFilter = [
	{
		value: "",
		label: (
			<Center style={{ gap: 10 }}>
				<TbEye size="1.4em" />
				<span>All</span>
			</Center>
		),
	},
	{
		value: "professional",
		label: (
			<Center style={{ gap: 10 }}>
				<TbBriefcase size="1.4em" />
				<span>Professional</span>
			</Center>
		),
	},
	{
		value: "research",
		label: (
			<Center style={{ gap: 10 }}>
				<TbMicroscope size="1.4em" />
				<span>Scientific Research</span>
			</Center>
		),
	},
	{
		value: "open-source",
		label: (
			<Center style={{ gap: 10 }}>
				<TbBrandOpenSourceFilled size="1.4em" />
				<span>Open Source</span>
			</Center>
		),
	},
	{
		value: "active",
		label: (
			<Center style={{ gap: 10 }}>
				<TbPlayerPlayFilled size="1.4em" />
				<span>Maintained</span>
			</Center>
		),
	},
];

export default function PortfolioPage() {
	const [techStack, setTechStack] = useState<TechNames | "">("");
	const [category, setCategory] = useState<string>("");

	function onTechClick(key: string) {
		ReactGA.event("portfolio_interaction", {
			section: "projects",
			target: key,
		});

		setTechStack(key === techStack ? "" : (key as TechNames));
	}

	return (
		<Stack align="center" justify="center" mt={120}>
			<Button
				component={Link}
				my="lg"
				variant="subtle"
				size="lg"
				to="/"
				leftSection={<TbArrowLeft size={24} />}
			>
				Back to my resume
			</Button>

			<Title>I work with</Title>
			<Text size="xs">Sorted alphabetically</Text>

			<Flex align="center" justify="center" gap="xs" wrap="wrap">
				{Object.entries(Techs)
					.filter((x) => x[1].show === undefined || x[1].show)
					.sort((a, b) => a[1].label.localeCompare(b[1].label))
					.map(([k, v]) => (
						<Button
							key={k}
							variant={k === techStack ? "filled" : "subtle"}
							leftSection={v.icon}
							onClick={() => onTechClick(k)}
						>
							{v.label}
						</Button>
					))}
			</Flex>

			<Title mt="xl">Things I have built</Title>

			<SegmentedControl
				color="teal"
				data={CategoryFilter}
				value={category}
				onChange={setCategory}
				styles={{
					root: { flexWrap: 'wrap' },
				}}
			/>

			<Flex
				mt="xl"
				align="flex-start"
				justify="center"
				wrap="wrap"
				gap="md"
				w="100%"
			>
				{Projects.filter((x) =>
					techStack !== "" ? x.tech.includes(techStack) : true,
				)
					.filter((x) =>
						category !== ""
							? x.categories.includes(category as ProjectCategory)
							: true,
					)
					.map((x) => (
						<ProjectItem key={x.title} project={x} />
					))}
			</Flex>
		</Stack>
	);
}
