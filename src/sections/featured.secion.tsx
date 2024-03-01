"use client";

import { FadeInVariant } from "@/animations/fade-in.variant";
import { FlyInVariant } from "@/animations/fly-in.variant";
import { ProjectCard } from "@/components/project-card";
import { Project } from "@/data/projects";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";

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
					className=" relative max-w-screen-xl w-full flex flex-col gap-8 p-8 mx-auto"
				>
					<motion.div>
						<h2 className="scroll-m-20 text-2xl font-semibold tracking-tight gradient-text">
							Featured
						</h2>
					</motion.div>
					<motion.div
						className="flex justify-evenly items-center gap-8"
						variants={FadeInVariant}
						initial="hidden"
						whileInView="visible"
						exit="hidden"
					>
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
					</motion.div>
				</section>
			</AnimatePresence>
		</MotionConfig>
	);
};
