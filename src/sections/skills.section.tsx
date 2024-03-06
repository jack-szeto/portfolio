"use client";

import { FadeInVariant } from "@/animations/fade-in.variant";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { FlyInVariant } from "@/animations/fly-in.variant";
import { Skill, skills } from "@/data/skills";

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
				duration: 1.333,
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
						className="flex flex-col gap-8 justify-start items-center"
						initial="hidden"
						whileInView="visible"
						exit="hidden"
					>
						<motion.h2
							className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0"
							variants={FlyInVariant}
						>
							Skills
						</motion.h2>

						<motion.div
							className=" w-full px-4 md:px-16 py-0"
							variants={FadeInVariant}
						>
							<SkillCloud skills={skills} />
						</motion.div>
					</motion.div>
				</section>
			</AnimatePresence>
		</MotionConfig>
	);
};

type SkillCloudProps = {
	className?: string;
	skills: Skill[];
};
const SkillCloud: React.FC<SkillCloudProps> = ({ skills, className }) => {
	skills.sort((a, b) => b.weight - a.weight);
	return (
		<motion.div
			className={cn(
				"flex flex-wrap gap-4 justify-center items-center p-4",
				className
			)}
			initial="hidden"
			whileInView="visible"
			transition={{
				staggerChildren: 0.1,
			}}
		>
			{skills.map((skill, i) => (
				<motion.div
					key={i}
					className=""
					whileHover={{
						scale: 1.1,
						transition: {
							duration: 0.1666,
						},
					}}
					variants={FlyInVariant}
				>
					<Badge className="flex gap-2 px-4 py-1">
						<Image
							src={skill.icon.src}
							alt={skill.icon.alt}
							className="w-6 h-6"
						/>
						<span className=" select-none">{skill.value}</span>
					</Badge>
				</motion.div>
			))}
		</motion.div>
	);
};
