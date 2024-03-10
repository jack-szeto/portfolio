"use client";

import { MouseEnterContext, use3dRotation } from "@/hooks/use-3d-rotation";
import { cn } from "@/lib/utils";
import React, { useContext, useRef, useEffect, useCallback } from "react";

export const CardContainer = ({
	children,
	className,
	containerClassName,
}: {
	children?: React.ReactNode;
	className?: string;
	containerClassName?: string;
}) => {
	const {
		containerRef,
		isMouseEntered,
		setIsMouseEntered,
		handleMouseEnter,
		handleMouseMove,
		handleMouseLeave,
	} = use3dRotation();
	return (
		<MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
			<div
				className={cn(
					"flex items-center justify-stretch relative",
					containerClassName
				)}
				style={{
					perspective: "1000px",
				}}
			>
				<div
					ref={containerRef}
					onMouseEnter={handleMouseEnter}
					onMouseMove={handleMouseMove}
					onMouseLeave={handleMouseLeave}
					className={cn(
						"flex items-center justify-center relative transition-all duration-200 ease-linear",
						className,
						isMouseEntered
							? "shadow-lg md:shadow-2xl shadow-gray-200 dark:shadow-gray-800"
							: ""
					)}
					style={{
						transformStyle: "preserve-3d",
					}}
				>
					{children}
				</div>
			</div>
		</MouseEnterContext.Provider>
	);
};

export const CardBody = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<div
			className={cn(
				"h-96 w-96 max-w-full [transform-style:preserve-3d]  [&>*]:[transform-style:preserve-3d]",
				className
			)}
		>
			{children}
		</div>
	);
};

export const CardItem = ({
	as: Tag = "div",
	children,
	className,
	translateX = 0,
	translateY = 0,
	translateZ = 0,
	rotateX = 0,
	rotateY = 0,
	rotateZ = 0,
	...rest
}: {
	as?: React.ElementType;
	children: React.ReactNode;
	className?: string;
	translateX?: number | string;
	translateY?: number | string;
	translateZ?: number | string;
	rotateX?: number | string;
	rotateY?: number | string;
	rotateZ?: number | string;
}) => {
	const ref = useRef<HTMLDivElement>(null);
	const [isMouseEntered] = useMouseEnter();

	const handleAnimations = useCallback(() => {
		if (!ref.current) return;
		if (isMouseEntered) {
			ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
		} else {
			ref.current.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
		}
	}, [
		isMouseEntered,
		rotateX,
		rotateY,
		rotateZ,
		translateX,
		translateY,
		translateZ,
	]);

	useEffect(() => {
		handleAnimations();
	}, [handleAnimations, isMouseEntered]);

	return (
		<Tag
			ref={ref}
			className={cn(
				"w-fit transition duration-200 ease-linear",
				className
			)}
			{...rest}
		>
			{children}
		</Tag>
	);
};

// Create a hook to use the context
export const useMouseEnter = () => {
	const context = useContext(MouseEnterContext);
	if (context === undefined) {
		throw new Error(
			"useMouseEnter must be used within a MouseEnterProvider"
		);
	}
	return context;
};
