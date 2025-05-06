import {
	ActionIcon,
	Button,
	Group,
	Image,
	Stack,
	Text,
	Title,
} from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";

import AvatarPng from "~/assets/avatar.jpg";
import { BlogUrl, SocialLinks } from "~/data";

export default function HeroSection() {
	return (
		<Stack align="center">
			<Image src={AvatarPng} w="128px" h="128px" radius="128px" />
			<Title>Fahmi Noor Fiqri</Title>
			<Title order={4} ta="center">
				Software Engineer
				<br />
				Machine Learning Researcher
			</Title>

			<Text>Building efficient and high performance apps.</Text>

			<Button
				component="a"
				mt="lg"
				variant="subtle"
				size="lg"
				href={BlogUrl}
				target="_blank"
				rightSection={<IconArrowRight size={24} />}
			>
				Read my blog
			</Button>

			<Group my="xl">
				{SocialLinks.map((x) => (
					<ActionIcon
						key={x.label}
						size="xl"
						variant="light"
						aria-label={x.label}
						component="a"
						href={x.href}
						target="_blank"
					>
						{x.icon}
					</ActionIcon>
				))}
			</Group>
		</Stack>
	);
}
