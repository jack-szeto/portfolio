"use client";

import React, { useEffect, useState } from "react";
import { Button, ButtonProps } from "./ui/button";
import { useFormStatus } from "react-dom";
import { IconLoader } from "@tabler/icons-react";

type FormButtonProps = ButtonProps & {
	isLoading?: boolean;
	disableWhenPending?: boolean;
	countdown?: number;
};
export const FormButton = React.forwardRef<HTMLButtonElement, FormButtonProps>(
	(
		{
			isLoading = false,
			disableWhenPending = true,
			onClick,
			children,
			disabled,
			countdown,
			...props
		},
		ref
	) => {
		const { pending } = useFormStatus();
		const isOnCooldown = countdown !== undefined && countdown > 0;
		return (
			<Button
				ref={ref}
				{...props}
				disabled={
					(disableWhenPending && pending) ||
					isLoading ||
					disabled ||
					isOnCooldown
				}
				onClick={(e) => {
					onClick?.(e);
				}}
			>
				{(pending || isLoading) && (
					<IconLoader className="mr-2 h-4 w-4 animate-spin" />
				)}
				{isOnCooldown && (
					<span className="mr-2 text-xs font-medium text-muted-foreground">
						{countdown}s
					</span>
				)}
				{children}
			</Button>
		);
	}
);
FormButton.displayName = "FormButton";
