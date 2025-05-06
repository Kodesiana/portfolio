import { List, Spoiler, Stack } from "@mantine/core";

import type { PublicationBulletItem } from "~/data";

export interface PublicationBulletListProps {
	items: PublicationBulletItem[];
}

export default function PublicationBulletList({
	items,
}: PublicationBulletListProps) {
	return (
		<Spoiler maxHeight={350} showLabel="Show more" hideLabel="Hide" pb="md">
			<Stack align="center" justify="center">
				<List spacing="xs">
					{items.map((x) => (
						<List.Item key={x.key}>{x.citation}</List.Item>
					))}
				</List>
			</Stack>
		</Spoiler>
	);
}
