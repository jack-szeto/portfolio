import { TracingBeam } from "@/components/ui/tracing-beam";

export default function RootLayout({
	children,
	featured,
	about,
	skills,
}: {
	children: React.ReactNode;
	featured: React.ReactNode;
	about: React.ReactNode;
	skills: React.ReactNode;
}) {
	return (
		<TracingBeam
			className="flex flex-col gap-32"
			containerClassName="min-h-dvh max-w-screen-xl"
		>
			{children}
			{featured}
			{about}
			{skills}
		</TracingBeam>
	);
}
