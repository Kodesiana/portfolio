import { Button, Flex, Stack, Text, Title } from "@mantine/core";
import { useState } from "react";
import ReactGA from "react-ga4";
import { TbArrowLeft } from "react-icons/tb";
import { Link } from "react-router";

import { Projects, type TechNames, Techs } from "~/data";

import ProjectItem from "./ProjectItem";

export default function PortfolioPage() {
	const [selectedTechStack, setSelectedTechStack] = useState<TechNames | "">(
		"",
	);

	function onTechClick(key: string) {
		ReactGA.event("portfolio_interaction", {
			section: "projects",
			target: key,
		});

		setSelectedTechStack(key === selectedTechStack ? "" : (key as TechNames));
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
					.sort((a, b) => a[1].label.localeCompare(b[1].label))
					.map(([k, v]) => (
						<Button
							key={k}
							variant={k === selectedTechStack ? "filled" : "subtle"}
							leftSection={v.icon}
							onClick={() => onTechClick(k)}
						>
							{v.label}
						</Button>
					))}
			</Flex>

			<Title mt="xl">Things I have worked on</Title>
			<Flex
				mt="xl"
				align="flex-start"
				justify="center"
				wrap="wrap"
				gap="md"
				w="100%"
			>
				{Projects.filter((x) =>
					selectedTechStack !== "" ? x.tech.includes(selectedTechStack) : true,
				).map((x) => (
					<ProjectItem key={x.title} project={x} />
				))}
			</Flex>
		</Stack>
	);
}
