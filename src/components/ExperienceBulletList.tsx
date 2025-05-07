import {
	Anchor,
	Badge,
	Group,
	List,
	Spoiler,
	Stack,
	Text,
	ThemeIcon,
} from "@mantine/core";
import { TbCircleCheck } from "react-icons/tb";

import type { ExperienceBulletItem } from "~/data";

export interface ExperienceBulletListProps {
	items: ExperienceBulletItem[];
}

export default function ExperienceBulletList({
	items,
}: ExperienceBulletListProps) {
	return (
		<Spoiler maxHeight={350} showLabel="Show more" hideLabel="Hide" pb="md">
			<Stack align="center" justify="center">
				<List
					spacing="xs"
					size="sm"
					center
					icon={
						<ThemeIcon color="teal" size={24} radius="xl">
							<TbCircleCheck size={16} />
						</ThemeIcon>
					}
				>
					{items.map((x) => (
						<List.Item key={x.key}>
							<Group>
								{x.href ? (
									<Anchor fw={500} href={x.href}>
										{x.title}
									</Anchor>
								) : (
									<Text fw={500}>{x.title}</Text>
								)}
								<Badge>{x.year}</Badge>
								{x.extra}
							</Group>

							<Text>{x.description}</Text>
						</List.Item>
					))}
				</List>
			</Stack>
		</Spoiler>
	);
}
