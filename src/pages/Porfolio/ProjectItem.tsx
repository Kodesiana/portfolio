import { Button, Card, Divider, Group, Image, Text } from "@mantine/core";
import {
	TbArrowUpRight,
	TbBrandGithub,
	TbBrandOpenSourceFilled,
	TbInfoCircle,
	TbMicroscope,
	TbPlayerPlayFilled,
} from "react-icons/tb";
import { Link } from "react-router";

import type { Project } from "~/data";

export default function ProjectItem({ project }: { project: Project }) {
	return (
		<Card shadow="sm" p="md" radius="md" w={295} withBorder>
			{project.coverImage && (
				<Card.Section>
					<Image
						src={project.coverImage}
						height={160}
						alt={project.title}
						mb="md"
					/>
				</Card.Section>
			)}

			<Group justify="space-between" wrap="nowrap">
				<Text mb="xs" fw={500}>
					{project.title}
				</Text>
				<Group gap="xs" wrap="nowrap">
					{project.categories.map(
						(cat) =>
							(cat === "open-source" && (
								<TbBrandOpenSourceFilled
									size="1.4em"
									color="green"
									title="Open source"
								/>
							)) ||
							(cat === "research" && (
								<TbMicroscope
									size="1.4em"
									color="var(--mantine-color-blue-5)"
									title="Research project"
								/>
							)) ||
							(cat === "active" && (
								<TbPlayerPlayFilled
									size="1.4em"
									color="var(--mantine-color-red-5)"
									title="Actively maintained"
								/>
							)),
					)}
				</Group>
			</Group>

			<Text size="sm" c="dimmed">
				{project.shortDesc}
			</Text>

			{(project.githubUrl || project.appUrl) && <Divider my="md" />}

			<Group gap="0" grow>
				<Button
					color="blue"
					size="xs"
					radius="md"
					variant="subtle"
					leftSection={<TbInfoCircle size={18} />}
					component={Link}
					to={`/portfolio/${project.key}`}
				>
					Detail
				</Button>
				{project.githubUrl && (
					<Button
						color="blue"
						size="xs"
						radius="md"
						variant="subtle"
						leftSection={<TbBrandGithub size={18} />}
						component="a"
						target="_blank"
						href={project.githubUrl}
					>
						Code
					</Button>
				)}
				{project.appUrl && (
					<Button
						color="blue"
						size="xs"
						radius="md"
						variant="subtle"
						leftSection={<TbArrowUpRight size={18} />}
						component="a"
						target="_blank"
						href={project.appUrl}
					>
						Visit
					</Button>
				)}
			</Group>
		</Card>
	);
}
