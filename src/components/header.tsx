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
	activeMatches?: string[];
};

export const NavItems: NavItem[] = [
	{ name: "Home", href: "/", activeMatches: ["^/$", "^/#$"] },
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
