import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import React from "react";
import { cn } from "@/lib/utils";
import { Project } from "@/data/projects";
import Link from "next/link";

type ProjectCardProps = {
	className?: string;
	project: Project;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
	className,
	project,
}) => (
	<Link href={`/projects/${project.id}`}>
		<CardContainer
			className={cn("inter-var")}
			containerClassName={className}
		>
			<CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border  ">
				<CardItem
					translateZ="50"
					className="text-xl font-bold text-neutral-600 dark:text-white"
				>
					{project.title}
				</CardItem>
				<CardItem
					as="p"
					translateZ="60"
					className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
				>
					{project.description}
				</CardItem>
				<CardItem translateZ="100" className="w-full mt-4">
					<Image
						src={project.image}
						className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
						alt={project.title}
						placeholder="blur"
						priority={false}
					/>
				</CardItem>
			</CardBody>
		</CardContainer>
	</Link>
);
