import { Background } from "@/components/ui/background";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function RootLayout({
	children,
	featured,
	about,
}: {
	children: React.ReactNode;
	featured: React.ReactNode;
	about: React.ReactNode;
}) {
	return (
		<TracingBeam
			className="flex flex-col gap-32"
			containerClassName="min-h-dvh max-w-screen-xl"
		>
			{children}
			{featured}
			{about}
		</TracingBeam>
	);
}
