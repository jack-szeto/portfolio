"use client";
import { FlyInVariant } from "@/animations/fly-in.variant";
import { Work } from "@/data/works";
import { cn } from "@/lib/utils";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import React from "react";
import { format } from "date-fns";

type WorkViewProps = {
	className?: string;
	works: Work[];
};
export const WorkView: React.FC<WorkViewProps> = ({ className, works }) => {
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
						Works
					</motion.h1>

					{works.map((work) => (
						<motion.div
							key={work.company}
							className="max-w-screen-md"
							variants={FlyInVariant}
						>
							<motion.div
								className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full"
								variants={FlyInVariant}
							/>
							<motion.h2 className="text-2xl font-semibold">
								{work.position}
							</motion.h2>
							{/* company */}
							<motion.p className="text-lg">
								{work.company}
							</motion.p>
							<motion.p className="text-lg text-muted-foreground">
								{work.date?.startDate &&
									format(work.date.startDate, "MMM yyyy")}
								{work.date?.endDate &&
									` - ${format(
										work.date.endDate,
										"MMM yyyy"
									)}`}
							</motion.p>
							{/* description */}
							<motion.p className="leading-7 [&:not(:first-child)]:mt-6">
								{work.descriptionMarkdown
									.split("\n")
									.map((line, i) => (
										<React.Fragment key={i}>
											{line}
											<br />
											<br />
										</React.Fragment>
									))}
							</motion.p>
						</motion.div>
					))}
				</motion.main>
			</AnimatePresence>
		</MotionConfig>
	);
};
