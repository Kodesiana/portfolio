import { Button, Flex, Stack, Text, Title } from "@mantine/core";
import { useState } from "react";
import ReactGA from "react-ga4";
import {
	TbMicroscope,
	TbPresentation,
	TbServer,
	TbTrophy,
	TbUsers,
} from "react-icons/tb";

import ExperienceBulletList from "~/components/ExperienceBulletList";
import HomeLabSection from "~/components/HomeLab";
import PublicationBulletList from "~/components/PublicationBulletList";

import {
	Activities,
	Awards,
	Certifications,
	Presentations,
	Publications,
} from "~/data";

const ExtraTabs = {
	awards: {
		label: "Awards",
		icon: <TbTrophy size={18} />,
		component: <ExperienceBulletList items={Awards} />,
	},
	certification: {
		label: "Certification",
		icon: <TbUsers size={18} />,
		component: <ExperienceBulletList items={Certifications} />,
	},
	activities: {
		label: "Activities",
		icon: <TbUsers size={18} />,
		component: <ExperienceBulletList items={Activities} />,
	},
	publication: {
		label: "Publication",
		icon: <TbMicroscope size={18} />,
		component: (
			<Stack>
				<Title order={5}>Journal Articles</Title>
				<PublicationBulletList
					items={Publications.filter((x) => x.type === "journal_article")}
				/>
				
				<Title order={5} mt="lg">
					Conference Papers
				</Title>
				<PublicationBulletList
					items={Publications.filter((x) => x.type === "conference_paper")}
				/>
			</Stack>
		),
	},
	presentation: {
		label: "Presentation",
		icon: <TbPresentation size={18} />,
		component: <ExperienceBulletList items={Presentations} />,
	},
	homelab: {
		label: "Home Lab",
		icon: <TbServer size={18} />,
		component: <HomeLabSection />,
	},
};

export default function ExtraSection() {
	const [selectedTab, setSelectedTab] = useState<keyof typeof ExtraTabs | "">(
		"",
	);

	return (
		<Stack my="xl" align="center" justify="center">
			{" "}
			<Text>Get to know more about me:</Text>
			<Flex align="center" justify="center" gap="xs" my="md" wrap="wrap">
				{Object.entries(ExtraTabs).map(([k, v]) => (
					<Button
						key={k}
						variant={k === selectedTab ? "filled" : "outline"}
						leftSection={v.icon}
						onClick={() => {
							ReactGA.event("portfolio_interaction", {
								section: "know_more",
								target: k,
							});
							setSelectedTab(k as keyof typeof ExtraTabs);
						}}
					>
						{v.label}
					</Button>
				))}
			</Flex>
			{selectedTab !== "" && ExtraTabs[selectedTab].component}
		</Stack>
	);
}
