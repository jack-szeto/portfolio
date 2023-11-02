import { cn } from "@/lib/utils";
import React from "react";

export const MaskedCard = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn(
			" rounded-3xl bg-card text-card-foreground mask-radial",
			className
		)}
		{...props}
	/>
));
MaskedCard.displayName = "MaskedCard";
