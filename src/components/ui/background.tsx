import { cn } from "@/lib/utils";
import React from "react";

type BackgroundProps = {
	className?: string;
	id?: string;
	children?: React.ReactNode;
	variant?: "grid" | "dots";
	backgroundContent?: React.ReactNode;
};

export const Background: React.FC<BackgroundProps> = ({
	className,
	id,
	variant = "grid",
	children,
	backgroundContent,
}) => {
	return (
		<div id={id} className={cn("relative", className)}>
			<div
				className={cn(
					"h-full w-full bg-background absolute top-0 left-0 flex items-center justify-center pointer-events-none z-[-999]",
					{
						"dark:bg-dot-white/[0.2] bg-dot-black/[0.2]":
							variant === "dots",
					},
					{
						"dark:bg-grid-white/[0.2] bg-grid-black/[0.2]":
							variant === "grid",
					}
				)}
			>
				{/* Radial gradient for the container to give a faded look */}
				<div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
				{backgroundContent}
			</div>
			{children}
		</div>
	);
};
