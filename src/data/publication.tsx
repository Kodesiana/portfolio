import { Anchor, Text } from "@mantine/core";
import type { PublicationBulletItem } from "./types";

export const Publications: PublicationBulletItem[] = [
	{
		key: "devto-pgai-challenge-2024",
		type: "conference_paper",
		citation: (
			<Text>
				<strong>Fiqri, Fahmi Noor</strong>, Sri Setyaningsih, and Asep
				Saepulrohman. “Rice Disease Image Classification Using MobileNetV2
				Pretrained Model with Attention Visualization Using Gradient-Weighted
				Class Activation Mapping (Grad-CAM).” In 2023 6th International
				Conference on Information and Communications Technology (ICOIACT),
				367-71. Yogyakarta, Indonesia: IEEE, 2023.{" "}
				<Anchor href="https://ieeexplore.ieee.org/document/10455786">
					https://doi.org/10.1109/ICOIACT59844.2023.10455786
				</Anchor>
				.
			</Text>
		),
	},
	{
		key: "jubikom.v2i1.4831",
		type: "journal_article",
		citation: (
			<Text>
				Anggraeni, Irma, and <strong>Fahmi Noor Fiqri</strong>. “DESAIN PLATFORM
				MONITORING DAN OBSERVABILITY UNTUK MICROSERVICE BERBASIS ELASTIC STACK.”
				Jurnal Aplikasi Bisnis Dan Komputer 2, no. 1 (February 28, 2022): 14-19.{" "}
				<Anchor href="https://journal.unpak.ac.id/index.php/jubikom/article/view/4831">
					https://doi.org/10.33751/jubikom.v2i1.4831
				</Anchor>
				.
			</Text>
		),
	},
];
