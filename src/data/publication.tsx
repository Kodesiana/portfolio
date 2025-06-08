import { Anchor, Text } from "@mantine/core";
import type { PublicationBulletItem } from "./types";

export const Publications: PublicationBulletItem[] = [
	{
		key: "",
		type: "journal_article",
		citation: (
			<Text>
				Marzuki, Imam, Hindarto, Djarot, <strong>Fiqri, Fahmi Noor</strong>,
				Nurhidayati, Arif, Yunifa Miftachul, Rachmadi, Reza Fuad, Hariadi,
				Mochamad. "A KNN-Based Stacking for Tourism Destination Recommender
				System Based on User Demographic Data."{" "}
				<em>International Journal of Intelligent Engineering and Systems</em>,
				vol. 18, no. 4, 2025, pp. 219-232.{" "}
				<em>The Intelligent Networks And Systems Society</em>. doi:{" "}
				<Anchor href="https://doi.org/10.22266/ijies2025.0531.14">
					10.22266/ijies2025.0531.14
				</Anchor>
				.
			</Text>
		),
	},
	{
		key: "devto-pgai-challenge-2024",
		type: "conference_paper",
		citation: (
			<Text>
				<strong>Fiqri, Fahmi Noor</strong>, Setyaningsih, Sri, and Saepulrohman,
				Asep. "Rice Disease Image Classification Using MobileNetV2 Pretrained
				Model with Attention Visualization Using Gradient-Weighted Class
				Activation Mapping (Grad-CAM)."{" "}
				<em>
					2023 6th International Conference on Information and Communications
					Technology (ICOIACT), Yogyakarta, Indonesia, 10 November 2023
				</em>
				, pp. 367-71. <em>IEEE</em>. doi:{" "}
				<Anchor href="https://doi.org/10.1109/ICOIACT59844.2023.10455786">
					10.1109/ICOIACT59844.2023.10455786
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
				Anggraeni, Irma, and <strong>Fiqri, Fahmi Noor</strong>. "Desain
				Platform Monitoring dan Observability untuk Microservice berbasis
				Elastic Stack." <em>Jurnal Aplikasi Bisnis dan Komputer</em>, vol. 2,
				no. 1, 2022, pp. 14-19. doi:{" "}
				<Anchor href="https://journal.unpak.ac.id/index.php/jubikom/article/view/4831">
					10.33751/jubikom.v2i1.4831
				</Anchor>
				.
			</Text>
		),
	},
];
