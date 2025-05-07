import {
	Group,
	Paper,
	Stack,
	Table,
	Text,
	Title,
	Transition,
	UnstyledButton,
} from "@mantine/core";
import { useState } from "react";

import { Educations } from "~/data";

export default function EducationSection() {
	const [selectedEducation, setSelectedEducation] = useState("");

	return (
		<Stack align="center" justify="center" my={120}>
			<Title order={2} mb="xl">I graduated from</Title>

			<Group mb="md">
				{Educations.map((x) => (
					<UnstyledButton
						key={`edu-${x.key}`}
						onClick={() => setSelectedEducation(x.key)}
					>
						<Paper withBorder p="lg">
							<Title order={4}>{x.school}</Title>
							<Text c="dimmed">{x.degree}</Text>
							<Text size="sm">{x.year}</Text>
						</Paper>
					</UnstyledButton>
				))}
			</Group>

			{Educations.map((x) => (
				<Transition
					key={`props-${x.key}`}
					mounted={selectedEducation === x.key}
					transition="fade"
					duration={200}
					enterDelay={200}
					timingFunction="ease"
				>
					{(transitionStyle) => (
						<Table style={{ ...transitionStyle }} w={500}>
							<Table.Tbody>
								{x.props.map((r) => (
									<Table.Tr key={`row-${x.key}-${r.key}`}>
										<Table.Td>{r.key}</Table.Td>
										<Table.Td>{r.value}</Table.Td>
									</Table.Tr>
								))}
							</Table.Tbody>
						</Table>
					)}
				</Transition>
			))}
		</Stack>
	);
}
