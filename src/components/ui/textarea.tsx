"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useRef, useState } from "react";

export interface TextareaProps
	extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
	({ className, ...props }, ref) => {
		const [value, setValue] = useState("");
		const textAreaRef = useRef<HTMLTextAreaElement>(null);

		useAutosizeTextArea(textAreaRef.current, value);

		const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
			const val = evt.target?.value;

			setValue(val);
		};

		const radius = 100; // change this to increase the rdaius of the hover effect
		const [visible, setVisible] = React.useState(false);

		let mouseX = useMotionValue(0);
		let mouseY = useMotionValue(0);

		function handleMouseMove({ currentTarget, clientX, clientY }: any) {
			let { left, top } = currentTarget.getBoundingClientRect();

			mouseX.set(clientX - left);
			mouseY.set(clientY - top);
		}
		return (
			<motion.div
				style={{
					background: useMotionTemplate`
        radial-gradient(
          ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
          var(--blue-500),
          transparent 80%
        )
      `,
				}}
				onMouseMove={handleMouseMove}
				onMouseEnter={() => setVisible(true)}
				onMouseLeave={() => setVisible(false)}
				className="p-[2px] rounded-lg transition duration-300 group/input"
			>
				<textarea
					className={cn(
						`flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:ring-ring
            border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input file:border-0 file:bg-transparent 
            file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
            focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
            disabled:cursor-not-allowed disabled:opacity-50
            dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
            group-hover/input:shadow-none transition duration-400 resize-none`,
						className
					)}
					ref={textAreaRef}
					{...props}
					onChange={handleChange}
          value={value}
				/>
			</motion.div>
		);
	}
);
Textarea.displayName = "Textarea";

export { Textarea };

const useAutosizeTextArea = (
	textAreaRef: HTMLTextAreaElement | null,
	value: string
) => {
	React.useEffect(() => {
		if (textAreaRef) {
			// We need to reset the height momentarily to get the correct scrollHeight for the textarea
			textAreaRef.style.height = "0px";
			const scrollHeight = textAreaRef.scrollHeight;

			// We then set the height directly, outside of the render loop
			// Trying to set this with state or a ref will product an incorrect value.
			textAreaRef.style.height = scrollHeight + "px";
		}
	}, [textAreaRef, value]);
};
