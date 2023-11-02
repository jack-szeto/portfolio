export default function RootLayout({
	children,
	banner,
	featured,
}: {
	children: React.ReactNode;
	banner: React.ReactNode;
	featured: React.ReactNode;
}) {
	return (
		<main className="min-h-screen flex flex-col">
			{children}
			{featured}
		</main>
	);
}
