"use client";

import { FadeInVariant } from "@/animations/fade-in.variant";
import { FlyInVariant } from "@/animations/fly-in.variant";
import { cn } from "@/lib/utils";
import { AnimatePresence, MotionConfig, Variants, motion } from "framer-motion";
import about1 from "@/assets/images/about/about_1.png";
import about2 from "@/assets/images/about/about_2.png";
import about3 from "@/assets/images/about/about_3.png";
import Image, { StaticImageData } from "next/image";
import React from "react";
import {
	BottomLeftVariant,
	BoxDecoration,
	BoxDecorationDirection,
	TopRightVariant,
} from "@/components/box-decoration";

type BriefAboutSectionProps = {
	className?: string;
};
export const BriefAboutSection: React.FC<BriefAboutSectionProps> = (
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
							variants={FadeInVariant}
						>
							About Me
						</motion.h2>

						<div className="w-full flex flex-row items-stretch justify-stretch">
							<div className=" flex flex-col items-start gap-16 flex-1 lg:flex-grow-0 lg:flex-shrink-1 lg:basis-auto z-10">
								<AboutSection
									title="🚀Hi, I'm Jack: Full-Stack Developer"
									description="Hello! I'm Jack, a software engineer with a deep love for all things tech. I've spent a good chunk of my career diving into full-stack development and cloud computing, crafting web-based software and websites that aim to solve real-world problems. For me, it's all about using the latest and greatest in technology to build solutions that truly make a difference."
									image={{
										imageSrc: about3,
										imageAlt: "About Me",
									}}
									decoration={{
										direction:
											BoxDecorationDirection.TopRight,
										childCount: 6,
									}}
								/>
								<AboutSection
									title="🎮Beyond Code: A Game Dev at Heart"
									description="Away from the professional grind, you'll find me lost in the world of game development. It's here that I get to experiment with new stories and gameplay mechanics. This isn't just playtime, though; it sharpens my creativity and problem-solving abilities, enriching my work in unexpected ways."
									reversedRow
									image={{
										imageSrc: about2,
										imageAlt: "About Me",
									}}
									decoration={{
										direction:
											BoxDecorationDirection.TopLeft,
										childCount: 2,
									}}
								/>
								<AboutSection
									title="💡What Drives Me? Innovation and Impact"
									description="At the heart of it, I'm driven by a desire to innovate and create digital experiences that resonate. Whether it's through my professional work or personal projects, my goal is to leave a positive mark on the world, one line of code at a time."
									image={{
										imageSrc: about1,
										imageAlt: "About Me",
									}}
									decoration={{
										direction:
											BoxDecorationDirection.BottomLeft,
										childCount: 3,
									}}
								/>
							</div>

							<motion.div
								className="relative flex-1 min-w-0 justify-center items-center hidden lg:flex z-0"
								variants={FlyInVariant}
								initial="hidden"
								whileInView="visible"
							>
								<motion.div
									className="z-10"
									whileHover={{
										scale: 1.05,
										transition: {
											duration: 0.33,
										},
									}}
								>
									<Image
										className="w-80 max-w-[25dvw] aspect-square border-8 border-primary shadow-md hover:shadow-2xl transition"
										src={about2}
										alt="About Me"
										placeholder="blur"
									/>
								</motion.div>
								<motion.div
									className="absolute bottom-1/3 left-1/3"
									variants={TopRightVariant}
									whileHover={{
										scale: 1.05,
										transition: {
											duration: 0.33,
										},
									}}
								>
									<Image
										className="w-80 max-w-[25dvw] aspect-square border-8 border-primary shadow-md hover:shadow-2xl transition"
										src={about1}
										alt="About Me"
										placeholder="blur"
									/>
								</motion.div>
								<motion.div
									className="absolute top-1/3 right-1/3"
									variants={BottomLeftVariant}
									whileHover={{
										scale: 1.05,
										transition: {
											duration: 0.33,
										},
									}}
								>
									<Image
										className=" w-80 max-w-[25dvw] aspect-square border-8 border-primary shadow-md hover:shadow-2xl transition"
										src={about3}
										alt="About Me"
										placeholder="blur"
									/>
								</motion.div>

								<motion.div
									initial="hidden"
									whileInView="visible"
									transition={{
										staggerChildren: 0,
									}}
								>
									<BoxDecoration
										className="absolute right-0 bottom-0 w-40"
										direction={
											BoxDecorationDirection.BottomLeft
										}
										childCount={3}
									/>

									<BoxDecoration
										className="absolute right-0 bottom-0"
										direction={
											BoxDecorationDirection.TopLeft
										}
										childCount={5}
									/>
								</motion.div>
							</motion.div>
						</div>
					</motion.div>
				</section>
			</AnimatePresence>
		</MotionConfig>
	);
};

type AboutSectionProps = {
	title: string;
	description: string;
	reversedRow?: boolean;
	image: {
		imageSrc: string | StaticImageData;
		imageAlt: string;
	};
	decoration?: {
		direction: BoxDecorationDirection;
		childCount: number;
	};
};

const AboutSection: React.FC<AboutSectionProps> = ({
	title,
	description,
	reversedRow,
	image,
	decoration,
}) => {
	const flexDirections = ["md:flex-row-reverse", "md:flex-row"];
	const mdReversedRow = reversedRow ? flexDirections[0] : flexDirections[1];
	return (
		<div
			className={cn(
				"md:w-full flex flex-col-reverse md:flex-row justify-between items-center gap-8",
				mdReversedRow
			)}
		>
			<motion.div className="relative" variants={FadeInVariant}>
				<motion.h3
					className="scroll-m-20 text-xl font-semibold tracking-tight w-full max-w-96"
					variants={FlyInVariant}
				>
					{title}
				</motion.h3>
				<motion.p
					className="leading-7 [&:not(:first-child)]:mt-6tracking-tight w-full max-w-96"
					variants={FlyInVariant}
				>
					{description}
				</motion.p>
				{decoration && (
					<BoxDecoration
						className={`absolute ${
							decoration.direction ===
							BoxDecorationDirection.TopRight
								? "right-0"
								: "left-1/4"
						} top-1/3`}
						direction={decoration.direction}
						childCount={decoration.childCount}
					/>
				)}
			</motion.div>
			<motion.div className=" lg:hidden" variants={FlyInVariant}>
				<Image
					className=" w-80 max-w-full md:max-w-[45dvw] aspect-square border-8 border-primary shadow-md hover:shadow-2xl transition"
					src={image.imageSrc}
					alt={image.imageAlt}
					placeholder="blur"
				/>
			</motion.div>
		</div>
	);
};
