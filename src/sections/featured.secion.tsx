"use client";

import { FadeInVariant } from "@/animations/fade-in.variant";
import { FlyInVariant } from "@/animations/fly-in.variant";
import { ProjectCard } from "@/components/project-card";
import { BottomGradient, Button } from "@/components/ui/button";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";
import { Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import Link from "next/link";
import React from "react";

type FeaturedSectionProps = {
	className?: string;
	items: Project[];
};
export const FeaturedSection: React.FC<FeaturedSectionProps> = (
	{ className, items },
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
					id="featured"
					ref={ref}
					className={cn(
						" relative max-w-screen-xl w-full p-8",
						className
					)}
				>
					<motion.div
						className="flex flex-col gap-8 items-center"
						initial="hidden"
						whileInView="visible"
						exit="hidden"
					>
						<motion.h2
							className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0"
							variants={FlyInVariant}
						>
							Featured Works
						</motion.h2>
						<Carousel>
							<CarouselContent className="p-8 md:py-16">
								{items.map((item) => (
									<CarouselItem
										className=" basis-10/12 md:basis-1/2 lg:basis-1/3"
										key={item.title}
									>
										<motion.div variants={FlyInVariant}>
											<ProjectCard
												key={item.title}
												project={item}
												className=" flex-1"
											/>
										</motion.div>
									</CarouselItem>
								))}
							</CarouselContent>
						</Carousel>
						<motion.div
							className="flex items-center justify-end gap-4"
							variants={FlyInVariant}
							initial="hidden"
							whileInView="visible"
						>
							<Link href="/projects" passHref>
								<Button
									size={"lg"}
									variant={"default"}
									className="rounded-full"
								>
									See All Projects
									<BottomGradient />
								</Button>
							</Link>
						</motion.div>
					</motion.div>
				</section>
			</AnimatePresence>
		</MotionConfig>
	);
};
