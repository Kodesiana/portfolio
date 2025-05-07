import { Badge, Flex, Stack, Text, Timeline, Title } from "@mantine/core";

import {
	ProfessionalExperience,
	ProfessionalExperienceGreenBadges,
} from "~/data";

export default function ExperienceSection() {
	return (
		<div>
			<Stack justify="center" align="center" my="xl">
				<Title order={2} mb="xl">
					I have worked at
				</Title>

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
										color={
											ProfessionalExperienceGreenBadges.includes(y)
												? "teal"
												: undefined
										}
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
