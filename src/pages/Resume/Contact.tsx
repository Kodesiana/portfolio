import { Button, Group, Stack, Title } from "@mantine/core";
import { TbBrandWhatsapp, TbMail } from "react-icons/tb";

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
						leftSection={<TbMail size={32} />}
						component="a"
						href={`mailto:${Email}`}
					>
						Send me an email
					</Button>
					<Button
						size="xl"
						color="green"
						leftSection={<TbBrandWhatsapp size={32} />}
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
