import { Badge, Flex, Stack, Text, Timeline } from "@mantine/core";

import { ProfessionalExperience } from "~/data";

const GreenBadges = [
	"C#",
	"TypeScript",
	"Golang",
	"Python",
	"NodeJS",
	".NET Framework",
];

export default function ExperienceSection() {
	return (
		<div>
			<Stack justify="center" align="center" my="xl">
				<Text mb="xl">I have worked at</Text>

				<Timeline active={0}>
					{ProfessionalExperience.map((x) => (
						<Timeline.Item key={x.key} title={x.company}>
							<Text c="dimmed" size="xs">
								{x.location} | {x.role} | {x.employmentType} |{" "}
								{x.employmentDuration}
							</Text>
							{x.description}
							<Flex mt="md" gap="xs" wrap="wrap">
								{x.badges.map((y) => (
									<Badge
										key={y}
										variant="light"
										style={{ textTransform: "none" }}
										color={GreenBadges.includes(y) ? "teal" : undefined}
										autoContrast
									>
										{y}
									</Badge>
								))}
							</Flex>
						</Timeline.Item>
					))}
				</Timeline>
			</Stack>
		</div>
	);
}
