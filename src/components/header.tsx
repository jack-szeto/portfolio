"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { ModeToggle } from "./mode-toggle";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import Link from "next/link";

export function Header({ className }: { className?: string }) {
	return (
		<header
			className={cn(
				"sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
				className
			)}
		>
			<div className="container flex h-14 max-w-screen-2xl items-center justify-end gap-4">
				<Navbar />
				<ModeToggle />
			</div>
		</header>
	);
}

export type NavItem = {
	name: string;
	href: string;
};

export const NavItems: NavItem[] = [
	{ name: "Home", href: "/" },
	{ name: "About", href: "/#about" },
	{ name: "Project", href: "/projects" },
	{ name: "Work", href: "/work" },
	{ name: "Contact", href: "/#contact" },
];

export const Navbar = () => {
	return (
		<NavigationMenu>
			<NavigationMenuList className=" space-x-4">
				{NavItems.map((item) => (
					<NavigationMenuItem key={item.href}>
						<Link href={item.href} passHref>
							{item.name}
						</Link>
					</NavigationMenuItem>
				))}
			</NavigationMenuList>
		</NavigationMenu>
	);
};
