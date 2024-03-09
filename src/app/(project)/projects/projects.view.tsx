"use client";
import { FlyInVariant } from "@/animations/fly-in.variant";
import { ProjectCard } from "@/components/project-card";
import { Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import React from "react";

type ProjectsViewProps = {
	className?: string;
	projects: Project[];
};

export const ProjectsView: React.FC<ProjectsViewProps> = ({
	className,
	projects,
}) => {
	return (
		<MotionConfig
			transition={{
				type: "spring",
				duration: 1.333,
				staggerChildren: 0.333,
			}}
		>
			<AnimatePresence mode="popLayout">
				<motion.main
					className={cn("flex flex-col gap-8", className)}
					initial="hidden"
					animate="visible"
					exit="hidden"
				>
					<motion.h1
						className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0"
						variants={FlyInVariant}
					>
						Projects
					</motion.h1>

					<ProjectsViewer projects={projects} />
				</motion.main>
			</AnimatePresence>
		</MotionConfig>
	);
};

const projectsViewerVariants = cva("group/projects-viewer relative", {
	variants: {
		variant: {
			grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch",
			list: "flex flex-col gap-4 items-stretch",
		},
	},
	defaultVariants: {
		variant: "grid",
	},
});

type ProjectsViewerProps = VariantProps<typeof projectsViewerVariants> & {
	className?: string;
	projects: Project[];
};

const ProjectsViewer: React.FC<ProjectsViewerProps> = ({
	variant,
	projects,
	className,
}) => {
	return (
		<MotionConfig
			transition={{
				type: "spring",
				duration: 1.333,
				staggerChildren: 0.111,
			}}
		>
			<motion.section
				className={cn(projectsViewerVariants({ variant, className }))}
				initial="hidden"
				animate="visible"
				exit="hidden"
			>
				{projects.map((project) => (
					<motion.div key={project.id} variants={FlyInVariant}>
						<ProjectCard project={project} />
					</motion.div>
				))}
			</motion.section>
		</MotionConfig>
	);
};
