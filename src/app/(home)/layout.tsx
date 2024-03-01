import { Background } from "@/components/ui/background";
import { TracingBeam } from "@/components/ui/tracing-beam";

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
		<TracingBeam className="min-h-screen flex flex-col gap-12 max-w-screen-xl">
			{children}
			{featured}
		</TracingBeam>
	);
}
