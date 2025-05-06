import {
	Badge,
	Button,
	Card,
	Divider,
	Flex,
	Group,
	Image,
	Stack,
	Text,
	Transition,
} from "@mantine/core";
import { useTimeout } from "@mantine/hooks";
import {
	IconArrowUpRight,
	IconBrandGithub,
	IconInfoCircle,
} from "@tabler/icons-react";
import { useEffect, useState } from "react";
import ReactGA from "react-ga4";

import { ProjectCategory, Projects, TechMapping, Techs } from "~/data";

type TechStackType = keyof typeof TechMapping | "";

export default function ProjectsAndStack() {
	const [mounted, setMounted] = useState(true);
	const [selectedTechStack, setSelectedTechStack] = useState<TechStackType>("");
	const { start, clear } = useTimeout(() => setMounted(true), 100);

	useEffect(() => {
		if (mounted) {
			clear();
		}
	}, [mounted, clear]);

	return (
		<div>
			<Stack align="center" justify="center" mt={120}>
				<Text mb="xl">I work with....</Text>
			</Stack>

			<Flex align="center" justify="center" gap="xs" mb="xl" wrap="wrap">
				{Object.entries(Techs)
					.filter(([_, v]) => v.show)
					.map(([k, v]) => (
						<Button
							key={k}
							variant={k === selectedTechStack ? "filled" : "subtle"}
							leftSection={v.icon}
							onClick={() => {
								ReactGA.event("portfolio_interaction", {
									section: "projects",
									target: k,
								});

								setMounted(false);
								setSelectedTechStack(
									k === selectedTechStack ? "" : (k as TechStackType),
								);
								start();
							}}
						>
							{v.label}
						</Button>
					))}
				<Text>...and more</Text>
			</Flex>

			<Flex align="center" justify="center" gap="xs" wrap="wrap">
				{Projects.filter((x) =>
					selectedTechStack !== "" ? x.tech.includes(selectedTechStack) : true,
				).map((x) => (
					<Transition
						key={x.name}
						mounted={mounted}
						transition="pop-bottom-left"
						duration={200}
						timingFunction="ease"
					>
						{(transitionStyle) => (
							<Card
								shadow="sm"
								p="md"
								radius="md"
								w={320}
								withBorder
								style={{ ...transitionStyle }}
							>
								{x.coverImage && (
									<Card.Section>
										<Image
											src={x.coverImage}
											height={160}
											alt={x.name}
											mb="md"
										/>
									</Card.Section>
								)}

								<Text mb="xs" fw={500}>
									{x.name}
								</Text>

								<Text size="sm" c="dimmed">
									{x.shortDesc}
								</Text>

								<Flex mt="sm" gap="xs" wrap="wrap">
									<Badge color="pink">{ProjectCategory[x.category]}</Badge>
									{x.tech.map((tech) => (
										<Badge key={tech} color="blue">
											{TechMapping[tech]}
										</Badge>
									))}
								</Flex>

								{(x.githubUrl || x.appUrl) && <Divider my="md" />}

								<Group gap="0">
									<Button
										color="blue"
										radius="md"
										variant="subtle"
										leftSection={<IconInfoCircle size={18} />}
									>
										Detail
									</Button>
									{x.githubUrl && (
										<Button
											color="blue"
											radius="md"
											variant="subtle"
											leftSection={<IconBrandGithub size={18} />}
											component="a"
											target="_blank"
											href={x.githubUrl}
										>
											Repo
										</Button>
									)}
									{x.appUrl && (
										<Button
											color="blue"
											radius="md"
											variant="subtle"
											leftSection={<IconArrowUpRight size={18} />}
											component="a"
											target="_blank"
											href={x.appUrl}
										>
											Visit
										</Button>
									)}
								</Group>
							</Card>
						)}
					</Transition>
				))}
			</Flex>
		</div>
	);
}
