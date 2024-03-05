import { FadeInVariant } from "@/animations/fade-in.variant";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const TopRightVariant = {
	hidden: {
		x: 0,
		y: 0,
		rotate: 0,
	},
	visible: {
		x: "40%",
		y: "-40%",
		rotate: 15,
	},
};
export const TopLeftVariant = {
	hidden: {
		x: 0,
		y: 0,
		rotate: 0,
	},
	visible: {
		x: "-40%",
		y: "-40%",
		rotate: -15,
	},
};
export const BottomLeftVariant = {
	hidden: {
		x: 0,
		y: 0,
		rotate: 0,
	},
	visible: {
		x: "-40%",
		y: "40%",
		rotate: -15,
	},
};
export const BottomRightVariant = {
	hidden: {
		x: 0,
		y: 0,
		rotate: 0,
	},
	visible: {
		x: "40%",
		y: "40%",
		rotate: 15,
	},
};

export enum BoxDecorationDirection {
	TopRight,
	TopLeft,
	BottomLeft,
	BottomRight,
}
export type BoxDecorationProps = {
	className?: string;
	childCount?: number;
	direction?: BoxDecorationDirection;
};

export const boxVariants = {
	[BoxDecorationDirection.TopRight]: TopRightVariant,
	[BoxDecorationDirection.TopLeft]: TopLeftVariant,
	[BoxDecorationDirection.BottomLeft]: BottomLeftVariant,
	[BoxDecorationDirection.BottomRight]: BottomRightVariant,
};
export const positionStyle = {
	[BoxDecorationDirection.TopRight]: { right: 0, top: 0 },
	[BoxDecorationDirection.TopLeft]: { left: 0, top: 0 },
	[BoxDecorationDirection.BottomLeft]: { left: 0, bottom: 0 },
	[BoxDecorationDirection.BottomRight]: { right: 0, bottom: 0 },
};
export const BoxDecoration: React.FC<BoxDecorationProps> = ({
	className,
	childCount = 1,
	direction = BoxDecorationDirection.TopRight,
}) => {
	const getChildRecursively = (
		count: number,
		opacity: number = 0.5
	): React.ReactNode => {
		if (count === 0) return null;
		return (
			<motion.div
				className={cn(
					"absolute w-2/3 aspect-square border border-gray-50"
				)}
				style={{
					opacity: opacity,
					...positionStyle[direction],
				}}
				variants={boxVariants[direction]}
			>
				{getChildRecursively(count - 1, opacity)}
			</motion.div>
		);
	};

	return (
		<motion.div
			className={cn("w-32 aspect-square", className)}
			variants={FadeInVariant}
		>
			<motion.div
				className="absolute w-full aspect-square border border-gray-50 opacity-50"
				variants={boxVariants[direction]}
				whileHover={{
					scale: [1, 1.05, 1],
					transition: {
						duration: 0.66,
					},
				}}
				style={{
					...positionStyle[direction],
				}}
			>
				{getChildRecursively(childCount - 1, 0.8)}
			</motion.div>
		</motion.div>
	);
};
