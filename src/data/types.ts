import type { JSX } from "react";

export type ExperienceBulletItem = {
	key: string;
	title: string;
	year: string;
	description?: string;
	href?: string;
	extra?: JSX.Element;
};

export type PublicationBulletItem = {
	key: string;
	type: "journal_article" | "conference_paper";
	citation: JSX.Element;
};
