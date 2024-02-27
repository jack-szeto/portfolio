"use client";

import { PolygonParticle } from "@/components/polygon-particle";
import { BorderMagicButton } from "@/components/ui/border-magic-button";
import { Button } from "@/components/ui/button";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { cn } from "@/lib/utils";
import {
	AnimatePresence,
	MotionConfig,
	motion,
	useAnimation,
} from "framer-motion";
import React, { useEffect } from "react";

const FadeInVariant = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
};

const FlyInVariant = {
	hidden: { y: 50, opacity: 0 },
	visible: { y: 0, opacity: 1 },
};
type BannerSectionProps = {
	className?: string;
};
export const BannerSection: React.FC<BannerSectionProps> = (
	{ className },
	ref
) => {
	return (
		<MotionConfig
			transition={{
				type: "spring",
				duration: 1.666,
				staggerChildren: 0.1,
			}}
		>
			<AnimatePresence mode="popLayout">
				<motion.div
					ref={ref}
					className={cn("", className)}
					variants={FadeInVariant}
					initial="hidden"
					animate="visible"
					exit="hidden"
				>
					<motion.div variants={FlyInVariant}>
						<h3 className="scroll-m-20 text-2xl font-semibold tracking-tight gradient-text">
							Elevating Web Experiences with
						</h3>
					</motion.div>

					<motion.div variants={FlyInVariant}>
						<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl gradient-text">
							Speed, Performance, and Seamless Interactivity.
						</h1>
					</motion.div>

					<motion.div variants={FlyInVariant}>
						<p className=" w-96 max-w-full">
							Hi, I&apos;m{" "}
							<span className="font-semibold">Jack</span>
							, a web developer based in Hong Kong.
							<br />I build high-performance websites and
							applications with modern technologies for you.
						</p>
					</motion.div>

					<motion.div
						variants={FlyInVariant}
						className=" flex flex-row gap-4 mt-20"
					>
						<BorderMagicButton size={"lg"}>
							Contact Me
						</BorderMagicButton>
						<Button
							size={"lg"}
							variant={"outline"}
							className="  rounded-full"
						>
							See My Works
						</Button>
					</motion.div>

					{/* TODO: some animated graphical effect at the bottom right */}
					<div className="absolute bottom-0 right-0 w-96 h-96 p-16">
						{/* the polygon mask does not work */}
						{/* <PolygonParticle /> */}
					</div>
				</motion.div>
			</AnimatePresence>
		</MotionConfig>
	);
};
