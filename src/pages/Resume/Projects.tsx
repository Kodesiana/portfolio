import { Badge, Button, Group, Highlight, Stack, Title } from "@mantine/core";
import {
	TbArrowRight,
	TbBrandCSharp,
	TbBrandPython,
	TbBrandTypescript,
} from "react-icons/tb";
import { Link } from "react-router";

import { Projects } from "~/data";

export default function ProjectsSection() {
	return (
		<Stack align="center" justify="center" mt={120}>
			<Title order={2} mb="xl">
				I work with
			</Title>
			<Group>
				<Badge
					size="xl"
					color="green.5"
					autoContrast
					leftSection={<TbBrandCSharp size="1.4em" />}
				>
					.NET
				</Badge>
				<Badge
					size="xl"
					color="yellow.5"
					autoContrast
					leftSection={<TbBrandPython size="1.4em" />}
				>
					Python
				</Badge>
				<Badge
					size="xl"
					color="blue"
					autoContrast
					leftSection={<TbBrandTypescript size="1.4em" />}
				>
					TypeScript
				</Badge>
			</Group>

			<Highlight
				size="3em"
				ta="center"
				highlight={[`${Projects.length}+`]}
				highlightStyles={{
					backgroundImage:
						"linear-gradient(45deg, var(--mantine-color-cyan-5), var(--mantine-color-indigo-5))",
					fontWeight: 800,
					WebkitBackgroundClip: "text",
					WebkitTextFillColor: "transparent",
				}}
			>
				{`${Projects.length}+ projects`}
			</Highlight>

			<Button
				mt="lg"
				variant="subtle"
				size="lg"
				component={Link}
				to="/portfolio"
				rightSection={<TbArrowRight size={24} />}
			>
				View my portfolio
			</Button>
		</Stack>
	);
}
