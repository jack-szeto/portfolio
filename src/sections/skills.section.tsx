"use client";

import { FadeInVariant } from "@/animations/fade-in.variant";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { IconBrandNextjs } from "@tabler/icons-react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";

/*
Skills
Programming

Nextjs, Reactjs, Angular, Laravel, HTML5, SCSS, etc
Nodejs, SQL, MongoDB
Docker

Unity, C#, .Net, Java
Flutter

Editing
Photoshop

AWS cloud server
Firebase
*/
const data = [
	{
		value: "Next.js",
		count: 80,
		props: {
			icon: <IconBrandNextjs />,
		},
	},
	{
		value: "React",
		count: 90,
	},
	{
		value: "Angular",
		count: 30,
	},
	{
		value: "Laravel",
		count: 20,
	},
	{
		value: "HTML5",
		count: 90,
	},
	{
		value: "SCSS",
		count: 80,
	},
	{
		value: "Node.js",
		count: 50,
	},
	{
		value: "SQL",
		count: 60,
	},
	{
		value: "MongoDB",
		count: 50,
	},
	{
		value: "Docker",
		count: 70,
	},
	{
		value: "Unity",
		count: 80,
	},
	{
		value: "C#",
		count: 80,
	},
	{
		value: ".Net",
		count: 30,
	},
	{
		value: "Java",
		count: 10,
	},
	{
		value: "Flutter",
		count: 40,
	},
	{
		value: "Photoshop",
		count: 50,
	},
	{
		value: "AWS",
		count: 50,
	},
	{
		value: "Firebase",
		count: 40,
	},
];

type SkillsSectionProps = {
	className?: string;
};
export const SkillsSection: React.FC<SkillsSectionProps> = (
	{ className },
	ref
) => {
	return (
		<MotionConfig
			transition={{
				type: "spring",
				duration: 1.666,
				staggerChildren: 0.333,
			}}
		>
			<AnimatePresence mode="popLayout">
				<section
					id="about"
					ref={ref}
					className={cn(
						" relative max-w-screen-xl w-full p-8 overflow-x-clip overflow-y-visible",
						className
					)}
				>
					<motion.div
						className="flex flex-col gap-8 justify-start items-start"
						initial="hidden"
						whileInView="visible"
						exit="hidden"
					>
						<motion.h2
							className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0"
							variants={FadeInVariant}
						>
							Skills
						</motion.h2>

						<motion.div
							className=" w-full p-16"
							variants={FadeInVariant}
						></motion.div>
					</motion.div>
				</section>
			</AnimatePresence>
		</MotionConfig>
	);
};
