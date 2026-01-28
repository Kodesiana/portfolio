import { Badge, Flex, Group, Image, SimpleGrid, Stack, Text } from "@mantine/core";

import HomeLabPng from "~/assets/server-rack.webp";

export default function HomeLabSection() {
	return (
		<SimpleGrid cols={2}>
			<Image
				src={HomeLabPng}
				alt="Fahmi's home server"
				radius="md"
				w="90%"
			/>
			<Stack align="center" justify="center">
				<Text>
					I have a small home lab with 6 TB of storage (3x2 TB WD RED), an Intel i5-10400 processor, and 32 GB of DDR4 memory.
					<br />
					The server is running Ubuntu Server with mergerfs for storage. Almost everything is run using Docker/Podman, and fully managed via Ansible playbook.
					<br />
					The netwoking gear mostly consists of Mikrotik products (hEX, hAP) and TP-LINK APs.
				</Text>

				<Text mt="md">Some of the apps running in my server:</Text>
				<Flex align="center" justify="center" wrap="wrap" gap="sm">
					<Badge>Pi-hole</Badge>
					<Badge>Grafana</Badge>
					<Badge>Prometheus</Badge>
					<Badge>MLflow</Badge>
					<Badge>Tailscale</Badge>
				</Flex>
			</Stack>
		</SimpleGrid>
	);
}
