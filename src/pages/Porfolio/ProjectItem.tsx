import {
	ActionIcon,
	Avatar,
	Badge,
	Card,
	Divider,
	Flex,
	Group,
	HoverCard,
	Image,
	Text,
} from "@mantine/core";
import {
	TbArrowUpRight,
	TbBrandGithub,
	TbBrandOpenSourceFilled,
	TbBriefcase,
	TbInfoCircle,
	TbMicroscope,
	TbPlayerPlayFilled,
} from "react-icons/tb";

import { type Project, Techs } from "~/data";

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
									title="Scientific research project"
								/>
							)) ||
							(cat === "active" && (
								<TbPlayerPlayFilled
									size="1.4em"
									color="var(--mantine-color-red-5)"
									title="Actively maintained"
								/>
							)) ||
							(cat === "professional" && (
								<TbBriefcase
									size="1.4em"
									color="var(--mantine-color-yellow-7)"
									title="Professional work"
								/>
							)),
					)}
				</Group>
			</Group>

			<Text size="sm" c="dimmed">
				{project.shortDesc}
			</Text>

			<Divider my="md" />

			<Group gap="0" justify="space-between">
				<HoverCard width={400}>
					<HoverCard.Target>
						<Avatar color="white" title="View tech stack">
							<TbInfoCircle />
						</Avatar>
					</HoverCard.Target>

					<HoverCard.Dropdown>
						<Flex align="center" justify="center" wrap="wrap" gap="0">
							{project.tech.map((tech) => (
								<Badge
									key={`${project.key}-${tech}`}
									color="white"
									variant="transparent"
									leftSection={Techs[tech].icon}
								>
									{Techs[tech].label}
								</Badge>
							))}
						</Flex>
					</HoverCard.Dropdown>
				</HoverCard>

				<Group gap="xs">
					{project.githubUrl && (
						<ActionIcon
							color="blue"
							radius="lg"
							size="lg"
							variant="light"
							component="a"
							target="_blank"
							href={project.githubUrl}
							title="Open GitHub repository"
						>
							<TbBrandGithub size={18} />
						</ActionIcon>
					)}
					{project.appUrl && (
						<ActionIcon
							color="green"
							radius="lg"
							size="lg"
							variant="light"
							component="a"
							target="_blank"
							href={project.appUrl}
							title="Visit app page"
						>
							<TbArrowUpRight size={18} />
						</ActionIcon>
					)}
				</Group>
			</Group>
		</Card>
	);
}
