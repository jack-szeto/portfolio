import { createContext, useRef, useState } from "react";


export const MouseEnterContext = createContext<
	[boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
>(undefined);

export const use3dRotation = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const [isMouseEntered, setIsMouseEntered] = useState(false);

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!containerRef.current) return;
		const { left, top, width, height } =
			containerRef.current.getBoundingClientRect();
		const x = (e.clientX - left - width / 2) / 25;
		const y = (e.clientY - top - height / 2) / 25;
		containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
	};

	const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
		setIsMouseEntered(true);
		if (!containerRef.current) return;
	};

	const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!containerRef.current) return;
		setIsMouseEntered(false);
		containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
	};

  return {
    containerRef,
    isMouseEntered,
    setIsMouseEntered,
    handleMouseMove,
    handleMouseEnter,
    handleMouseLeave,
  };
}