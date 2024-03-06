"use client";

import { FadeInVariant } from "@/animations/fade-in.variant";
import { FlyInVariant } from "@/animations/fly-in.variant";
import { SparklesCore } from "@/components/ui/sparkles";
import { cn } from "@/lib/utils";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";

type PageLayoutProps = {
	className?: string;
	children: React.ReactNode;
};

export const PageLayout: React.FC<PageLayoutProps> = (
	{ className, children },
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
					<div className=" absolute inset-0 -z-10">
						{/* Core component */}
						<SparklesCore
							background="transparent"
							minSize={0.4}
							maxSize={1}
							particleDensity={100}
							className="w-full h-full"
							particleColor="#646464"
						/>

						{/* Radial Gradient to prevent sharp edges */}
						<div className="absolute inset-0 w-full h-full bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
					</div>
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
							Thanks for stopping by!
						</motion.h2>

						<motion.p
							className="scroll-m-20 text-lg font-light tracking-tight"
							variants={FlyInVariant}
						>
							{"I'd love to hear from you."}
						</motion.p>

						<motion.div variants={FlyInVariant}>
							{children}
						</motion.div>
					</motion.div>
				</section>
			</AnimatePresence>
		</MotionConfig>
	);
};
