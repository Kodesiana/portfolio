import {
	ActionIcon,
	Container,
	Group,
	Switch,
	Text,
	useMantineColorScheme,
} from "@mantine/core";
import { TbMoonStars, TbSun } from "react-icons/tb";

import { SocialLinks } from "~/data";
import classes from "./Footer.module.css";

export default function FooterSection() {
	const { setColorScheme, colorScheme } = useMantineColorScheme();

	return (
		<div className={classes.footer}>
			<Container className={classes.inner}>
				<Text>Copyright (C) 2025 Fahmi Noor Fiqri.</Text>
				<Switch
					size="lg"
					color="dark.4"
					onLabel={<TbSun size={16} color="var(--mantine-color-yellow-4)" />}
					offLabel={
						<TbMoonStars size={16} color="var(--mantine-color-blue-6)" />
					}
					checked={colorScheme === "light"}
					onClick={() => {
						if (colorScheme === "dark") {
							setColorScheme("light");
						} else {
							setColorScheme("dark");
						}
					}}
				/>
				<Group
					gap={0}
					className={classes.links}
					justify="flex-end"
					wrap="nowrap"
				>
					{SocialLinks.map((x) => (
						<ActionIcon
							key={x.label}
							size="lg"
							color="gray"
							variant="subtle"
							aria-label={x.label}
							component="a"
							href={x.href}
							target="_blank"
						>
							{x.icon}
						</ActionIcon>
					))}
				</Group>
			</Container>
		</div>
	);
}
