import { StaticImageData } from "next/image";

import angular from "@/assets/images/brands/angular.svg";
import aws from "@/assets/images/brands/aws.svg";
import csharp from "@/assets/images/brands/csharp.svg";
import css from "@/assets/images/brands/css.svg";
import docker from "@/assets/images/brands/docker.svg";
import firebase from "@/assets/images/brands/firebase.svg";
import flutter from "@/assets/images/brands/flutter.svg";
import html from "@/assets/images/brands/html.svg";
import javascript from "@/assets/images/brands/javascript.svg";
import laravel from "@/assets/images/brands/laravel.svg";
import mongodb from "@/assets/images/brands/mongodb.svg";
import mysql from "@/assets/images/brands/mysql.svg";
import nextjs from "@/assets/images/brands/nextjs.svg";
import php from "@/assets/images/brands/php.svg";
import postgresql from "@/assets/images/brands/postgresql.svg";
import react from "@/assets/images/brands/react.svg";
import tailwindcss from "@/assets/images/brands/tailwindcss.svg";
import typescript from "@/assets/images/brands/typescript.svg";
import unity from "@/assets/images/brands/unity.svg";
import { Tech } from "./techs";

export type Skill = {
	value: Tech;
	weight: number;
	icon: {
		src: string | StaticImageData;
		alt: string;
	};
};

export const skills: Skill[] = [
	{
		value: Tech.Nextjs,
		weight: 95,
		icon: { src: nextjs, alt: Tech.Nextjs },
	},
	{
		value: Tech.React,
		weight: 90,
		icon: { src: react, alt: Tech.React },
	},
	{
		value: Tech.Angular,
		weight: 40,
		icon: { src: angular, alt: Tech.Angular },
	},
	{
		value: Tech.Laravel,
		weight: 30,
		icon: { src: laravel, alt: Tech.Laravel },
	},
	{
		value: Tech.PHP,
		weight: 30,
		icon: { src: php, alt: Tech.PHP },
	},
	{
		value: Tech.TypeScript,
		weight: 90,
		icon: { src: typescript, alt: Tech.TypeScript },
	},
	{
		value: Tech.JavaScript,
		weight: 80,
		icon: { src: javascript, alt: Tech.JavaScript },
	},
	{
		value: Tech.HTML5,
		weight: 90,
		icon: { src: html, alt: Tech.HTML5 },
	},
	{
		value: Tech.CSS3,
		weight: 80,
		icon: { src: css, alt: Tech.CSS3 },
	},
	{
		value: Tech.TailwindCSS,
		weight: 70,
		icon: { src: tailwindcss, alt: Tech.TailwindCSS },
	},
	{
		value: Tech.PostgreSQL,
		weight: 60,
		icon: { src: postgresql, alt: Tech.PostgreSQL },
	},
	{
		value: Tech.MySql,
		weight: 50,
		icon: { src: mysql, alt: Tech.MySql },
	},
	{
		value: Tech.MongoDB,
		weight: 50,
		icon: { src: mongodb, alt: Tech.MongoDB },
	},
	{
		value: Tech.Docker,
		weight: 70,
		icon: { src: docker, alt: Tech.Docker },
	},
	{
		value: Tech.Unity,
		weight: 80,
		icon: { src: unity, alt: Tech.Unity },
	},
	{
		value: Tech.CSharp,
		weight: 80,
		icon: { src: csharp, alt: Tech.CSharp },
	},
	{
		value: Tech.Flutter,
		weight: 40,
		icon: { src: flutter, alt: Tech.Flutter },
	},
	{
		value: Tech.AWS,
		weight: 50,
		icon: { src: aws, alt: Tech.AWS },
	},
	{
		value: Tech.Firebase,
		weight: 40,
		icon: { src: firebase, alt: Tech.Firebase },
	},
];
