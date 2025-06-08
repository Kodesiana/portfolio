import { Badge, Flex, List, Stack, Text, Timeline, Title } from "@mantine/core";
import { Fragment } from "react/jsx-runtime";

import {
	ProfessionalExperience,
	ProfessionalExperienceGreenBadges,
	type ExperienceDescription,
} from "~/data";
import { cyrb53 } from "~/utils/hash";

function RenderDescription({items}: {items: ExperienceDescription[]}) {

	return (
		<Stack gap="0">
			{items.map((x) => (
				<Fragment key={cyrb53(`${x.title}${x.company}${x.duration}`)}>
					<Text fw={500} mt="md">
						{x.title}
					</Text>
					<Text size="xs">
						{x.company && `${x.company} | `}
						{x.duration}
					</Text>
					<List>
						{x.items.map((y) => (
							<List.Item key={cyrb53(y)}>{y}</List.Item>
						))}
					</List>
				</Fragment>
			))}
		</Stack>
	);
}

export default function ExperienceSection() {
	return (
		<div>
			<Stack justify="center" align="center" my="xl">
				<Title order={2} mb="xl">
					I have worked at
				</Title>

				<Timeline active={1}>
					{ProfessionalExperience.map((x) => (
						<Timeline.Item key={x.key} title={x.company}>
							<Text c="dimmed" size="xs">
								{x.location} | {x.employmentType} | {x.employmentDuration}
							</Text>
							<RenderDescription key={x.key} items={x.description} />
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
