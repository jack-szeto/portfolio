"use client";

import { FadeInVariant } from "@/animations/fade-in.variant";
import { FlyInVariant } from "@/animations/fly-in.variant";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { cn } from "@/lib/utils";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";

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
				duration: 1.666,
				staggerChildren: 0.333,
			}}
		>
			<AnimatePresence mode="popLayout">
				<section
					id="about"
					ref={ref}
					className={cn(
						" relative max-w-screen-xl w-full p-8",
						className
					)}
				>
					<motion.div
						className="flex flex-col gap-8 justify-start items-start"
						variants={FadeInVariant}
						initial="hidden"
						whileInView="visible"
						exit="hidden"
					>
						<motion.h2
							className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0"
							variants={FadeInVariant}
							// initial="hidden"
							// whileInView="visible"
							// exit="hidden"
						>
							About Me
						</motion.h2>

						<div className=" flex flex-col items-start gap-8">
							<motion.div
								className=""
								variants={FadeInVariant}
								// initial="hidden"
								// whileInView="visible"
								// exit="hidden"
							>
								<motion.h3
									className="scroll-m-20 text-2xl font-semibold tracking-tight w-full max-w-96"
									variants={FlyInVariant}
								>
									Passionate Technology Enthusiast &
									Full-Stack Developer
								</motion.h3>
								<motion.p
									className="leading-7 [&:not(:first-child)]:mt-6tracking-tight w-full max-w-96"
									variants={FlyInVariant}
								>
									I&apos;m Jack, a software engineer with a
									fervent passion for leveraging cutting-edge
									technology to develop innovative solutions.
									<br />
									With a solid year of experience in the IT
									industry, I specialize in full-stack
									development, cloud computing, and creating
									dynamic web-based software and websites.
								</motion.p>
							</motion.div>

							<motion.div
								className=""
								variants={FadeInVariant}
								// initial="hidden"
								// whileInView="visible"
								// exit="hidden"
							>
								<motion.h3
									className="scroll-m-20 text-2xl font-semibold tracking-tight w-full max-w-96"
									variants={FlyInVariant}
								>
									Beyond Code: A Game Developer at Heart
								</motion.h3>
								<motion.p
									className="leading-7 [&:not(:first-child)]:mt-6tracking-tight w-full max-w-96"
									variants={FlyInVariant}
								>
									When I&apos;m not coding for work, I dive
									into the world of game development,
									exploring new narratives and mechanics.
									<br />
									This hobby not only fuels my creativity but
									also sharpens my problem-solving skills,
									allowing me to bring fresh perspectives to
									professional projects.
								</motion.p>
							</motion.div>

							<motion.div
								className=""
								variants={FadeInVariant}
								// initial="hidden"
								// whileInView="visible"
								// exit="hidden"
							>
								<motion.h3
									className="scroll-m-20 text-2xl font-semibold tracking-tight w-full max-w-96"
									variants={FlyInVariant}
								>
									Driven by Innovation
								</motion.h3>
								<motion.p
									className="leading-7 [&:not(:first-child)]:mt-6tracking-tight w-full max-w-96"
									variants={FlyInVariant}
								>
									My journey in technology is propelled by an
									unwavering pursuit of innovation and a
									commitment to enriching lives through
									meaningful projects. I&apos;m dedicated to
									crafting engaging digital experiences that
									leave a lasting impact.
								</motion.p>
							</motion.div>
						</div>
					</motion.div>
				</section>
			</AnimatePresence>
		</MotionConfig>
	);
};
