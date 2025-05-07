import { SiDevdotto } from "react-icons/si";
import {
	TbBrandGithubFilled,
	TbBrandInstagramFilled,
	TbBrandLinkedinFilled,
	TbBrandStackoverflow,
	TbBrandTwitterFilled,
	TbBrandYoutubeFilled,
} from "react-icons/tb";

export const Email = "fahmi@kodesiana.com";
export const WhatsApp = "+6289665387072";

export const BlogUrl = "https://kodesiana.com";

export const SocialLinks = [
	{
		label: "dev.to",
		href: "https://dev.to/fahminlb33",
		icon: <SiDevdotto size="1.8em" />,
	},
	{
		label: "GitHub",
		href: "https://github.com/fahminlb33",
		icon: <TbBrandGithubFilled style={{ width: "70%", height: "70%" }} />,
	},
	{
		label: "Stackoverflow",
		href: "https://stackoverflow.com/users/5561144/fahmi-noor-fiqri",
		icon: <TbBrandStackoverflow style={{ width: "70%", height: "70%" }} />,
	},
	{
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/fahmi-noor-fiqri",
		icon: <TbBrandLinkedinFilled style={{ width: "70%", height: "70%" }} />,
	},
	{
		label: "YouTube",
		href: "https://www.youtube.com/c/FahmiNoorFiqri",
		icon: <TbBrandYoutubeFilled style={{ width: "70%", height: "70%" }} />,
	},
	{
		label: "Instagram",
		href: "https://instagram.com/fahminoorfiqri",
		icon: <TbBrandInstagramFilled style={{ width: "70%", height: "70%" }} />,
	},
	{
		label: "X",
		href: "https://x.com/fahminoorfiqri",
		icon: <TbBrandTwitterFilled style={{ width: "70%", height: "70%" }} />,
	},
];
