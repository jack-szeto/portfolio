"use client";

import { BorderMagicButton } from "@/components/ui/border-magic-button";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect } from "react";
import me from "@/assets/images/me.png";
import { FadeInVariant } from "@/animations/fade-in.variant";
import { FlyInVariant } from "@/animations/fly-in.variant";
import Link from "next/link";

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
				staggerChildren: 0.333,
			}}
		>
			<AnimatePresence mode="popLayout">
				<motion.section
					ref={ref}
					className={cn("relative", className)}
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
							Speed, Performance,<br /> and Seamless Interactivity.
						</h1>
					</motion.div>

					<div className="flex flex-col justify-center items-center gap-8 mt-28 md:flex-row md:mt-20 md:justify-between md:items-end">
						<div className="flex flex-col gap-4 max-w-full">
							<motion.div variants={FlyInVariant}>
								<div className=" w-24 max-w-[50%] aspect-square border-[4px] rounded-full overflow-hidden border-neutral-800 dark:border-neutral-200">
									<Image
										src={me}
										alt="Avatar"
										placeholder="blur"
										className="object-cover w-full h-full "
									/>
								</div>
							</motion.div>
							<motion.div variants={FlyInVariant}>
								<p className=" w-96 max-w-full">
									Hi, I&apos;m{" "}
									<span className="font-semibold">Jack</span>
									, a coder based in Hong Kong.
									<br />I build high-performance websites and
									applications with modern technologies for
									you.
								</p>
							</motion.div>
						</div>

						<div className=" flex flex-row gap-4">
							<motion.div variants={FlyInVariant}>
								<BorderMagicButton size={"lg"}>
									Contact Me
								</BorderMagicButton>
							</motion.div>
							<motion.div variants={FlyInVariant}>
								<Link href={"#featured"} passHref>
									<Button
										size={"lg"}
										variant={"default"}
										className="  rounded-full"
									>
										See My Works
									</Button>
								</Link>
							</motion.div>
						</div>
					</div>
				</motion.section>
			</AnimatePresence>
		</MotionConfig>
	);
};
