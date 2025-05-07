import { Badge, Button, Flex, Image, Stack, Text, Title } from "@mantine/core";
import { TbArrowLeft } from "react-icons/tb";
import { Link, useParams } from "react-router";

import { Projects, Techs } from "~/data";

export default function ProjectDetail() {
	const params = useParams();
	const slug = params.slug ?? "";

	const project = Projects.find((x) => x.key === slug);
	if (!project) {
		return <Title>Oops, project is not found.</Title>;
	}

	return (
		<Stack>
			<Button
				component={Link}
				my="lg"
				variant="subtle"
				size="lg"
				relative="path"
				to=".."
				preventScrollReset
				leftSection={<TbArrowLeft size={24} />}
			>
				Back to portfolio
			</Button>

			<Image src={project.coverImage} />
			<Title ta="center">{project.title}</Title>
			<Text ta="center">{project.shortDesc}</Text>

			<Flex align="center" justify="center" wrap="wrap" gap="sm" mb="xl">
				{project.tech.map((tech) => (
					<Badge key={`${project.title}-${tech}`} color="blue">
						{Techs[tech].label}
					</Badge>
				))}
			</Flex>

			{project.longDesc}
		</Stack>
	);
}
