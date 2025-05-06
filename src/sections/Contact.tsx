import { Button, Group, Stack, Title } from "@mantine/core";
import { IconBrandWhatsapp, IconMail } from "@tabler/icons-react";

import { Email, WhatsApp } from "~/data";

export default function ContactSection() {
	return (
		<div>
			<Stack align="center" justify="center" mt={120}>
				<Title my="xl">Get in touch</Title>

				<Group>
					<Button
						size="xl"
						variant="gradient"
						gradient={{ from: "blue", to: "cyan", deg: 200 }}
						leftSection={<IconMail size={32} />}
						component="a"
						href={`mailto:${Email}`}
					>
						Send me an email
					</Button>
					<Button
						size="xl"
						color="green"
						leftSection={<IconBrandWhatsapp size={32} />}
						component="a"
						href={`https://wa.me/${WhatsApp}`}
					>
						Chat with me
					</Button>
				</Group>
			</Stack>
		</div>
	);
}
