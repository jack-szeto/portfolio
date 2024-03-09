import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata, Viewport } from "next";
import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import { Header } from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
	title: "Jack Szeto - Software Engineer",
	description: "Jack Szeto's personal website and portfolio.",
};

export const viewport: Viewport = {
	themeColor: "#070707",
};

export default function RootLayout({
	children,
	footer,
}: {
	children: React.ReactNode;
	footer: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning className="scroll-smooth">
			<head></head>
			<body
				className={cn(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable
				)}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
				>
					<Header className="" />
					{children}
					<Footer />
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	);
}
