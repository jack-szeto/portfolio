import React from "react";
import { Button, ButtonProps } from "./button";
import { cn } from "@/lib/utils";

type BorderMagicButtonProps = {} & ButtonProps;
export const BorderMagicButton: React.FC<BorderMagicButtonProps> = ({
	className,
	children,
	...props
}) => {
	return (
		<Button
			className={cn(
				"relative inline-flex overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50",
				className
			)}
			{...props}
		>
			<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#d1ff62_0%,#2999ff_20%,#11ddb5_50%,#d1ff62_100%)]" />
			<span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-4 py-2 text-sm font-medium text-white backdrop-blur-3xl">
				{children}
			</span>
		</Button>
	);
};
