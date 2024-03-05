import arrokoth from "@/assets/images/projects/arrokoth/arrokothventures.com_.png";
import guild22 from "@/assets/images/projects/guild22.io/guild22.io_.png";
import keweya from "@/assets/images/projects/keweya.com/uat.keweya.com.png";
import magnolia from "@/assets/images/projects/magnolia/magnolia-lab.com_en_.png";
import makerverse from "@/assets/images/projects/makerverse.hk/makerverse.hk.png";
import ponghk from "@/assets/images/projects/ponghk.com/www.ponghk.com_venues_Jiangsu-Club (1).png";
import wildwester from "@/assets/images/projects/wildwesters.io/wildwesters.io_demo.png";
import { StaticImageData } from "next/image";

export type Project = {
	id: string;
	title: string;
	description: string;
	image: StaticImageData;
	url?: string;
	date?: Date;
};

export const FeaturedProjects = (count: number = 3): Project[] => {
	return projects.slice(0, count);
};

export const GetProject = (id: string): Project | undefined => {
	return projects.find((project) => project.id === id);
};

export const projects: Project[] = [
	{
		id: "makerverse",
		title: "Makerverse",
		description: "A gamified online learning platform.",
		image: makerverse,
	},
	{
		id: "magnolia",
		title: "Magnolia Lab",
		description: "A website for a wine company.",
		image: magnolia,
	},
	{
		id: "wildwesters",
		title: "WildWesters",
		description: "A gallery of wild west characters.",
		image: wildwester,
	},
	{
		id: "keweya",
		title: "Keweya",
		description: "A online career experience platform.",
		image: keweya,
	},
	{
		id: "guild22",
		title: "Guild22",
		description: "A website for a game-fi community.",
		image: guild22,
	},
	{
		id: "arrokoth",
		title: "Arrokoth Ventures Limited",
		description: "A website for a cypto venture capital firm.",
		image: arrokoth,
	},
	{
		id: "ponghk",
		title: "Pong Group",
		description: "A website of a dinning group.",
		image: ponghk,
	},
];
