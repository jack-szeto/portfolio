"use client";

import { cn } from "@/lib/utils";
import { ModeToggle } from "./mode-toggle";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuList,
} from "./ui/navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useHash from "@/hooks/use-hash";
import { useMediaQuery } from "@/hooks/use-media-query";
import React from "react";
import { Button } from "./ui/button";
import { IconHome, IconMenu, IconX } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { FlyInVariant } from "@/animations/fly-in.variant";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function Header({ className }: { className?: string }) {
	const isDesktop = useMediaQuery("(min-width: 768px)");
	if (isDesktop) {
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
	return (
		<header
			className={cn(
				" fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
				className
			)}
		>
			<div className="container flex h-16 p-4 max-w-full items-center justify-center gap-4">
				<NavbarDropdown
					trigger={
						<Button variant="outline" size={"icon"}>
							<IconMenu />
						</Button>
					}
				/>
				{/* home button */}
				<Link href="/#home" passHref>
					<Button variant="outline" size={"icon"}>
						<IconHome />
					</Button>
				</Link>
				<ModeToggle />
			</div>
		</header>
	);
}

export type NavItem = {
	name: string;
	href: string;
	activeMatches?: string[];
};

export const NavItems: NavItem[] = [
	{
		name: "Home",
		href: "/#home",
		activeMatches: ["^/$", "^/#$", "^/#home$"],
	},
	{ name: "About", href: "/#about", activeMatches: ["^/#about$"] },
	{
		name: "Project",
		href: "/projects",
		activeMatches: ["^/projects(/.*)?$"],
	},
	{ name: "Work", href: "/work", activeMatches: ["^/work$"] },
	{ name: "Contact", href: "/#contact", activeMatches: ["^/#contact$"] },
];

export const Navbar = () => {
	const pathname = usePathname();
	const hash = useHash();
	const path = hash ? `${pathname}${hash}` : pathname;
	return (
		<NavigationMenu>
			<NavigationMenuList className=" space-x-4">
				{NavItems.map((item) => (
					<NavigationMenuItem key={item.href}>
						<Link
							href={item.href}
							className={cn(
								"transition-colors hover:text-foreground/80",
								item.activeMatches?.some((pattern) =>
									new RegExp(pattern).test(path)
								)
									? "text-foreground"
									: "text-foreground/60"
							)}
							passHref
						>
							{item.name}
						</Link>
					</NavigationMenuItem>
				))}
			</NavigationMenuList>
		</NavigationMenu>
	);
};
type NavbarDropdownProps = {
	trigger?: React.ReactNode;
};
export const NavbarDropdown: React.FC<NavbarDropdownProps> = ({ trigger }) => {
	const [open, setOpen] = React.useState(false);
	const pathname = usePathname();
	const hash = useHash();
	const path = hash ? `${pathname}${hash}` : pathname;
	return (
		<DropdownMenu open={open} onOpenChange={setOpen}>
			<DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
			<DropdownMenuContent className="flex flex-col gap-4 items-center p-4">
				<DropdownMenuLabel>Menu</DropdownMenuLabel>

				<DropdownMenuGroup>
					<motion.div
						className="flex flex-col gap-2 items-center"
						initial="hidden"
						animate="visible"
						exit="hidden"
					>
						{NavItems.map((item) => (
							<motion.div key={item.href} variants={FlyInVariant}>
								<Link
									href={item.href}
									className={cn(
										"transition-colors hover:text-foreground/80",
										item.activeMatches?.some((pattern) =>
											new RegExp(pattern).test(path)
										)
											? "text-foreground"
											: "text-foreground/60"
									)}
									// onClick={() => setOpen(false)}
								>
									{item.name}
								</Link>
							</motion.div>
						))}
					</motion.div>
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
