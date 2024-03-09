"use client";
import { FlyInVariant } from "@/animations/fly-in.variant";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";
import { Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import Image from "next/image";
import Video from "next-video";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/data/skills";

type ProjectViewProps = {
	className?: string;
	project: Project;
};

export const ProjectView: React.FC<ProjectViewProps> = ({
	className,
	project,
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
					<motion.div
						className="sticky top-14 flex gap-4 py-1 z-10 bg-background"
						variants={FlyInVariant}
					>
						<Link href="/projects">
							<Button variant={"link"}>&larr; Back</Button>
						</Link>
						<motion.h1 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 sticky top-24">
							{project.title}
						</motion.h1>
					</motion.div>

					<motion.p
						className="scroll-m-20 text-lg"
						variants={FlyInVariant}
					>
						{project.description}
					</motion.p>

					{project.medias && (
						<motion.div variants={FlyInVariant}>
							<Carousel className=" max-w-full">
								<CarouselContent className="">
									{project.medias.map((media, i) => (
										<CarouselItem
											className="basis-11/12 lg:basis-7/12"
											key={i}
										>
											<motion.div className="w-full h-full rounded-lg aspect-video overflow-hidden">
												{media.type == "image" ? (
													<Image
														src={media.src}
														alt={`${project.title} - ${i}`}
														className="w-full h-full object-contain"
													/>
												) : (
													<Video
														src={media.src}
														className="w-full h-full object-contain"
														autoPlay
														muted
														loop
														controls={false}
													/>
												)}
											</motion.div>
										</CarouselItem>
									))}
								</CarouselContent>
							</Carousel>
						</motion.div>
					)}
					{/* content */}
					{project.paragraphs?.map((paragraph, i) => (
						<motion.div key={i} className=" max-w-screen-md">
							<motion.h3
								className="scroll-m-20 pb-2 text-2xl font-semibold tracking-tight"
								variants={FlyInVariant}
							>
								{paragraph.title}
							</motion.h3>
							<motion.p
								className="scroll-m-20 text-lg"
								variants={FlyInVariant}
							>
								{paragraph.content}
							</motion.p>
						</motion.div>
					))}

					{/* tech stack badges */}
					<motion.div
						className="flex flex-col gap-4"
						initial="hidden"
						whileInView="visible"
						transition={{
							staggerChildren: 0.1,
						}}
					>
						<motion.h4
							className="scroll-m-20 text-xl font-semibold tracking-tight"
							variants={FlyInVariant}
						>
							Tech Stack
						</motion.h4>
						<motion.div className="flex flex-wrap gap-2 max-w-screen-md">
							{skills
								.filter(
									(s) =>
										project.techStack?.includes(s.value) ==
										true
								)
								.map((skill, i) => (
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
										<Badge variant={"tech"}>
											<Image
												src={skill.icon.src}
												alt={skill.icon.alt}
												className="w-6 h-6"
											/>
											<span className="ml-2 select-none">
												{skill.value}
											</span>
										</Badge>
									</motion.div>
								))}
						</motion.div>
					</motion.div>
				</motion.main>
			</AnimatePresence>
		</MotionConfig>
	);
};
