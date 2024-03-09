import { TracingBeam } from "@/components/ui/tracing-beam";

export default function Layout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<TracingBeam
			className="flex flex-col gap-32"
			containerClassName="min-h-dvh max-w-screen-xl"
		>
			{children}
		</TracingBeam>
	);
}
