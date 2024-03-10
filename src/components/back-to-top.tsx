"use client";
import React, { useEffect } from "react";
import { Button } from "./ui/button";
import { IconArrowUp } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import {
	AnimatePresence,
	motion,
	scroll,
	useMotionValueEvent,
	useScroll,
} from "framer-motion";
import { FlyInVariant } from "@/animations/fly-in.variant";

type BackToTopProps = {
	className?: string;
};

export const BackToTop: React.FC<BackToTopProps> = ({ className }) => {
	const { scrollY } = useScroll();
	const [show, setShow] = React.useState(false);

	useMotionValueEvent(scrollY, "change", (latest) => {
		if (latest > 1000) {
			setShow(true);
		} else {
			setShow(false);
		}
	});
	return (
		<AnimatePresence>
			{show && (
				<motion.div
					className="fixed bottom-20 right-4 z-50"
					variants={FlyInVariant}
					initial="hidden"
					animate="visible"
					exit="hidden"
				>
					<Button
						variant={"outline"}
						size={"icon"}
						className={cn("", className)}
						onClick={() => {
							window.scrollTo({ top: 0, behavior: "smooth" });
						}}
					>
						<IconArrowUp />
					</Button>
				</motion.div>
			)}
		</AnimatePresence>
	);
};
