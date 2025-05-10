import {
	ActionIcon,
	Button,
	Group,
	Image,
	Stack,
	Text,
	Title,
} from "@mantine/core";
import { TbArrowRight } from "react-icons/tb";

import AvatarPng from "~/assets/avatar.jpg";
import { BlogUrl, SocialLinks } from "~/data";

export default function HeroSection() {
	return (
		<Stack align="center">
			<Image src={AvatarPng} w="128px" h="128px" radius="128px" />
			<Title ta="center">Fahmi Noor Fiqri</Title>
			<Title order={4} ta="center">
				Software Engineer
				<br />
				Machine Learning Researcher
			</Title>

			<Text ta="center">Building efficient and high performance apps.</Text>

			<Button
				component="a"
				mt="lg"
				variant="subtle"
				size="lg"
				href={BlogUrl}
				target="_blank"
				rightSection={<TbArrowRight size={24} />}
			>
				Read my blog
			</Button>

			<Group my="xl" justify="center">
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
