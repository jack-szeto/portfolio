
import { StaticImageData } from "next/image";

import angular from "@/assets/images/brands/angular.svg";
import aws from "@/assets/images/brands/aws.svg";
import csharp from "@/assets/images/brands/csharp.svg";
import css from "@/assets/images/brands/css.svg";
import docker from "@/assets/images/brands/docker.svg";
import firebase from "@/assets/images/brands/firebase.svg";
import flutter from "@/assets/images/brands/flutter.svg";
import html from "@/assets/images/brands/html.svg";
import laravel from "@/assets/images/brands/laravel.svg";
import mongodb from "@/assets/images/brands/mongodb.svg";
import nextjs from "@/assets/images/brands/nextjs.svg";
import postgresql from "@/assets/images/brands/postgresql.svg";
import react from "@/assets/images/brands/react.svg";
import tailwindcss from "@/assets/images/brands/tailwindcss.svg";
import unity from "@/assets/images/brands/unity.svg";

export type Skill = {
	value: string;
	weight: number;
	icon: {
		src: string | StaticImageData;
		alt: string;
	};
};

export const skills: Skill[] = [
	{
		value: "Next.js",
		weight: 95,
		icon: { src: nextjs, alt: "Next.js" },
	},
	{
		value: "React",
		weight: 90,
		icon: { src: react, alt: "React" },
	},
	{
		value: "Angular",
		weight: 40,
		icon: { src: angular, alt: "Angular" },
	},
	{
		value: "Laravel",
		weight: 30,
		icon: { src: laravel, alt: "Laravel" },
	},
	{
		value: "HTML5",
		weight: 90,
		icon: { src: html, alt: "HTML5" },
	},
	{
		value: "CSS3",
		weight: 80,
		icon: { src: css, alt: "CSS3" },
	},
	{
		value: "TailwindCSS",
		weight: 70,
		icon: { src: tailwindcss, alt: "TailwindCSS" },
	},
	{
		value: "PostgreSQL",
		weight: 60,
		icon: { src: postgresql, alt: "PostgreSQL" },
	},
	{
		value: "MongoDB",
		weight: 50,
		icon: { src: mongodb, alt: "MongoDB" },
	},
	{
		value: "Docker",
		weight: 70,
		icon: { src: docker, alt: "Docker" },
	},
	{
		value: "Unity",
		weight: 80,
		icon: { src: unity, alt: "Unity" },
	},
	{
		value: "C#",
		weight: 80,
		icon: { src: csharp, alt: "C#" },
	},
	{
		value: "Flutter",
		weight: 40,
		icon: { src: flutter, alt: "Flutter" },
	},
	{
		value: "AWS",
		weight: 50,
		icon: { src: aws, alt: "AWS" },
	},
	{
		value: "Firebase",
		weight: 40,
		icon: { src: firebase, alt: "Firebase" },
	},
];