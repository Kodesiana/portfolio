import { Badge, Flex, Image, Stack, Text } from "@mantine/core";

import HomeLabPng from "~/assets/server-rack_comp.jpg";

export default function HomeLabSection() {
	return (
		<Stack align="center" justify="center">
			<Image
				src={HomeLabPng}
				alt="Fahmi's home server"
				radius="md"
				w="50%"
				h="auto"
			/>
			<Text ta="center">
				I managed a small home lab based on a Raspberry Pi 4b with an external 2
				TB WD RED hard drive.
				<br />
				The server is running Raspbian OS and multiple apps in Docker container,
				managed via Ansible playbook.
				<br />
				The netwoking is managed through a Mikrotik hEX with firewall and QoS
				control via Queues.
			</Text>

			<Text mt="md">Some of the apps running in my server:</Text>
			<Flex align="center" justify="center" wrap="wrap" gap="sm">
				<Badge>Grafana</Badge>
				<Badge>Prometheus</Badge>
				<Badge>cAdvisor</Badge>
				<Badge>Portainer</Badge>
				<Badge>Pi-hole</Badge>
				<Badge>MLflow</Badge>
			</Flex>
		</Stack>
	);
}
