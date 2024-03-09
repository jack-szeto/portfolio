import arrokoth from "@/assets/images/projects/arrokoth/arrokothventures.com_.png";

import guild22 from "@/assets/images/projects/guild22.io/guild22.io_.png";
import guild22_2 from "@/assets/images/projects/guild22.io/guild22.io_ (1).png";

import keweya from "@/assets/images/projects/keweya.com/uat.keweya.com.png";
import keweya2 from "@/assets/images/projects/keweya.com/uat.keweya.com (1).png";

import magnolia from "@/assets/images/projects/magnolia/magnolia-lab.com_en_.png";
import magnoliaVideo from "@/assets/videos/magnolia/magnolia show case.mp4";

import makerverse from "@/assets/images/projects/makerverse.hk/makerverse.hk.png";
import makerverse2 from "@/assets/images/projects/makerverse.hk/makerverse.hk_play.png";
import makerverse3 from "@/assets/images/projects/makerverse.hk/makerverse.hk_play (1).png";

import ponghk from "@/assets/images/projects/ponghk.com/www.ponghk.com_venues_Jiangsu-Club (1).png";
import ponghk2 from "@/assets/images/projects/ponghk.com/www.ponghk.com_venues_Jiangsu-Club.png";
import ponghk3 from "@/assets/images/projects/ponghk.com/www.ponghk.com_venues.png";

import wildwester from "@/assets/images/projects/wildwesters.io/wildwesters.io_demo.png";
import wildwester2 from "@/assets/images/projects/wildwesters.io/wildwesters.io_.png";
import wildwester3 from "@/assets/images/projects/wildwesters.io/wildwesters.io_ (1).png";
import wildwester4 from "@/assets/images/projects/wildwesters.io/wildwesters.io_ (2).png";
import wildwester5 from "@/assets/images/projects/wildwesters.io/wildwesters.io_ (3).png";
import wildwester6 from "@/assets/images/projects/wildwesters.io/app.wildwesters.io_collection(iPhone 12 Pro).png";

import { StaticImageData } from "next/image";
import { Tech } from "./techs";
import { Asset } from "next-video/dist/assets.js";

type MediaType =
	| { type: "image"; src: string | StaticImageData }
	| { type: "video"; src: Asset };

export type Project = {
	id: string;
	title: string;
	description: string;
	thumbnail: StaticImageData;
	paragraphs?: {
		title: string;
		content: string;
	}[];
	medias?: MediaType[];
	url?: string;
	date?: {
		start: Date;
		end?: Date;
	};
	techStack?: Tech[];
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
		thumbnail: makerverse,
		paragraphs: [
			{
				title: "What is Makerverse?",
				content:
					"Makerverse is an online learning platform that provides a gamified learning experience for students to learn about different subjects. The platform is designed to be fun and engaging for students. Teachers can also use the platform to create and manage their own courses, and they can use the platform to track their students' progress and performance. The platform is designed to be easy to use, and it is built to be accessible to students of all ages and skill levels.",
			},
			{
				title: "The Challenge",
				content: `The challenge was to create a platform that runs on a web browser and is accessible to tablets and mobile devices. We also wanted to create a platform that is easy to use and is engaging for students. We wanted to create a platform that is fun and interactive, and that provides a gamified learning experience for students. We also wanted to create a platform that is easy for teachers to use, and that provides them with the tools they need to create and manage their own courses.`,
			},
			{
				title: "The Solution",
				content: `We used Unity to create the game and built the platform using Next.js and MongoDB.`,
			},
		],
		medias: [
			{
				type: "image",
				src: makerverse,
			},
			{
				type: "image",
				src: makerverse2,
			},
			{
				type: "image",
				src: makerverse3,
			},
		],
		techStack: [
			Tech.Unity,
			Tech.Nextjs,
			Tech.MongoDB,
			Tech.React,
			Tech.HTML5,
			Tech.CSS3,
			Tech.CSharp,
			Tech.Docker,
			Tech.AWS,
		],
	},
	{
		id: "magnolia",
		title: "Magnolia Lab",
		description: "A website for a wine company.",
		thumbnail: magnolia,
		paragraphs: [
			{
				title: "What is Magnolia Lab?",
				content:
					"Magnolia Lab is a wine company that provides wines that blends with Chinese hrebs. This website is my first project that I worked on and one of my favorite projects. I was responsible for the front-end development of the website. I used React to build the website. I used Angular and Laravel to build the backend and admin portal.",
			},
			{
				title: "The Challenge",
				content:
					"That was my first time using React. The most challenging part was to make the interactive animations and learn how to use React.",
			},
			{
				title: "The Solution",
				content:
					"Luckily, I got a lot of help from my friends and the internet. We found a mind-blowing library called Framer Motion. It made the animations so much easier to make. I also learned a lot from the React documentation and the internet.",
			},
		],
		medias: [
			{
				type: "image",
				src: magnolia,
			},
			{
				type: "video",
				src: magnoliaVideo,
			},
		],
		techStack: [
			Tech.React,
			Tech.Laravel,
			Tech.Angular,
			Tech.HTML5,
			Tech.CSS3,
			Tech.TypeScript,
			Tech.PHP,
			Tech.MySql,
		],
		url: "https://magnolia-lab.com/en",
	},
	{
		id: "wildwesters",
		title: "WildWesters",
		description: "A gallery of wild west characters.",
		thumbnail: wildwester,
		paragraphs: [
			{
				title: "What is WildWesters?",
				content:
					"WildWesters is a gallery of wild west characters. The website is built using Next.js and Mantine UI. ",
			},
		],
		medias: [
			{
				type: "image",
				src: wildwester,
			},
			{
				type: "image",
				src: wildwester2,
			},
			{
				type: "image",
				src: wildwester3,
			},
			{
				type: "image",
				src: wildwester4,
			},
			{
				type: "image",
				src: wildwester5,
			},
			{
				type: "image",
				src: wildwester6,
			},
		],
		techStack: [
			Tech.Nextjs,
			Tech.React,
			Tech.HTML5,
			Tech.CSS3,
			Tech.TypeScript,
		],
	},
	{
		id: "keweya",
		title: "Keweya",
		description: "A online career experience platform.",
		thumbnail: keweya,
		paragraphs: [
			{
				title: "What is Keweya?",
				content:
					"Keweya is an online career experience platform that provides students with the opportunity to explore different career paths. ",
			},
			{
				title: "The Challenge",
				content:
					"The challenge was to create a custom interactable experience player and a custom CMS for the client to manage the content. It was extremely difficult to make the experience player to be able to play different paths of the experience with complex interactions and video playback.",
			},
			{
				title: "The Solution",
				content:
					"There was no existing solution that could meet the requirements. We had to build the experience player from scratch. We spent tons of time on the R&D and finally we made it with React and Next.js.",
			},
		],
		medias: [
			{
				type: "image",
				src: keweya,
			},
			{
				type: "image",
				src: keweya2,
			},
		],
		techStack: [
			Tech.React,
			Tech.Nextjs,
			Tech.PostgreSQL,
			Tech.HTML5,
			Tech.CSS3,
			Tech.TypeScript,
			Tech.Docker,
			Tech.AWS,
		],
	},
	{
		id: "guild22",
		title: "Guild22",
		description: "A website for a game-fi community.",
		thumbnail: guild22,
		paragraphs: [
			{
				title: "What is Guild22?",
				content:
					"Guild22 is a community of game-fi enthusiasts. The website is built using React.",
			},
		],
		medias: [
			{
				type: "image",
				src: guild22,
			},
			{
				type: "image",
				src: guild22_2,
			},
		],
		techStack: [Tech.React, Tech.HTML5, Tech.CSS3, Tech.TypeScript],
	},
	{
		id: "arrokoth",
		title: "Arrokoth Ventures Limited",
		description: "A website for a cypto venture capital firm.",
		thumbnail: arrokoth,
		paragraphs: [
			{
				title: "What is Arrokoth Ventures Limited?",
				content:
					"Arrokoth Ventures Limited is a venture capital firm that invests in early-stage blockchain and crypto projects. The website is built using React.",
			},
		],
		medias: [
			{
				type: "image",
				src: arrokoth,
			},
		],
		techStack: [Tech.React, Tech.HTML5, Tech.CSS3, Tech.TypeScript],
	},
	{
		id: "ponghk",
		title: "Pong Group",
		description: "A website for a dinning group.",
		thumbnail: ponghk,
		paragraphs: [
			{
				title: "What is Pong Group?",
				content:
					"Pong Group is a group of restaurants and bars in Hong Kong. The website is built using React.",
			},
		],
		medias: [
			{
				type: "image",
				src: ponghk,
			},
			{
				type: "image",
				src: ponghk2,
			},
			{
				type: "image",
				src: ponghk3,
			},
		],
		techStack: [Tech.React, Tech.HTML5, Tech.CSS3, Tech.TypeScript],
	},
];
