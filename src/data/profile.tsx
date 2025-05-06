import { Image } from "@mantine/core";
import {
	IconBrandGithubFilled,
	IconBrandInstagramFilled,
	IconBrandLinkedinFilled,
	IconBrandStackoverflow,
	IconBrandTwitterFilled,
	IconBrandYoutubeFilled,
} from "@tabler/icons-react";

import DevToBadge from "~/assets/dev-badge.svg";

export const Email = "fahmi@kodesiana.com";
export const WhatsApp = "+6289665387072";

export const BlogUrl = "https://kodesiana.com";

export const SocialLinks = [
	{
		label: "dev.to",
		href: "https://dev.to/fahminlb33",
		icon: <Image src={DevToBadge} h="70%" w="70%" />,
	},
	{
		label: "GitHub",
		href: "https://github.com/fahminlb33",
		icon: (
			<IconBrandGithubFilled
				style={{ width: "70%", height: "70%" }}
				stroke={1.5}
			/>
		),
	},
	{
		label: "Stackoverflow",
		href: "https://stackoverflow.com/users/5561144/fahmi-noor-fiqri",
		icon: (
			<IconBrandStackoverflow
				style={{ width: "70%", height: "70%" }}
				stroke={1.5}
			/>
		),
	},
	{
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/fahmi-noor-fiqri",
		icon: (
			<IconBrandLinkedinFilled
				style={{ width: "70%", height: "70%" }}
				stroke={1.5}
			/>
		),
	},
	{
		label: "YouTube",
		href: "https://www.youtube.com/c/FahmiNoorFiqri",
		icon: (
			<IconBrandYoutubeFilled
				style={{ width: "70%", height: "70%" }}
				stroke={1.5}
			/>
		),
	},
	{
		label: "Instagram",
		href: "https://instagram.com/fahminoorfiqri",
		icon: (
			<IconBrandInstagramFilled
				style={{ width: "70%", height: "70%" }}
				stroke={1.5}
			/>
		),
	},
	{
		label: "X",
		href: "https://x.com/fahminoorfiqri",
		icon: (
			<IconBrandTwitterFilled
				style={{ width: "70%", height: "70%" }}
				stroke={1.5}
			/>
		),
	},
];
