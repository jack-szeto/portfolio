"use client";

import { FadeInVariant } from "@/animations/fade-in.variant";
import { FlyInVariant } from "@/animations/fly-in.variant";
import { ProjectCard } from "@/components/project-card";
import { Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import Link from "next/link";

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
				duration: 1.666,
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
						className="flex flex-col gap-8"
						variants={FadeInVariant}
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
						<div className="flex justify-evenly items-center gap-8">
							{items.map((item) => (
								<motion.div
									key={item.title}
									variants={FlyInVariant}
								>
									<ProjectCard
										key={item.title}
										project={item}
										className=" flex-1"
									/>
								</motion.div>
							))}
						</div>
						<motion.div
							className="flex items-center justify-end gap-4"
							variants={FlyInVariant}
						>
							<Link
								href="/projects"
								className="font-medium text-primary underline underline-offset-4"
							>
								See more
							</Link>
						</motion.div>
					</motion.div>
				</section>
			</AnimatePresence>
		</MotionConfig>
	);
};
