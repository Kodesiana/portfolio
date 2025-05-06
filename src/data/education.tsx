export type Education = {
	key: string;
	school: string;
	degree: string;
	year: string;
	props: Array<{ key: string; value: string }>;
};

export const Educations: Education[] = [
	{
		key: "s2",
		school: "IPB University",
		degree: "Master of Computer Science",
		year: "2023 - 2025",
		props: [
			{
				key: "Thesis",
				value:
					"Prediction of Humpback Whale Sighting Zones based on Environmental Factors from Remote Sensing Data using Tree-based Algorithms",
			},
			{ key: "GPA", value: "TBD" },
			{
				key: "Selected Courses",
				value:
					"Computational Intelligence, e-Government, Topics in Data Mining for Agriculture",
			},
			{
				key: "Research Grant",
				value:
					"BIMA PTM by The Ministry of Education, Culture, Research, and Technology of the Republic of Indonesia",
			},
		],
	},
	{
		key: "s1",
		school: "Pakuan University",
		degree: "Bachelor of Computer Science",
		year: "2018 - 2023",
		props: [
			{
				key: "Thesis",
				value:
					"Rice Disease Image Classification using MobileNetV2 Pre-trained Model with Attention Visualization using Gradient-weighted Class Activation Mapping (Grad-CAM)",
			},
			{ key: "GPA", value: "3.88" },
			{
				key: "Selected Courses",
				value:
					"Data Mining, Artificial Intelligence, Data Analytics, Databases, Decision Support System",
			},
			{
				key: "Scholarship",
				value:
					"PANCAKARSA by The Ministry of Youth and Sports of Kabupaten Bogor",
			},
		],
	},
];
