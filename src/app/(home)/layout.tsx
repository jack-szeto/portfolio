import { TracingBeam } from "@/components/ui/tracing-beam";
import { Suspense } from "react";

export default function Layout({
	children,
	featured,
	about,
	skills,
	contactForm,
}: {
	children: React.ReactNode;
	featured: React.ReactNode;
	about: React.ReactNode;
	skills: React.ReactNode;
	contactForm: React.ReactNode;
}) {
	return (
		<TracingBeam
			className="flex flex-col gap-32"
			containerClassName="min-h-dvh max-w-screen-xl"
		>
			{children}
			<Suspense>{featured}</Suspense>
			<Suspense>{about}</Suspense>
			<Suspense>{skills}</Suspense>
			<Suspense>{contactForm}</Suspense>
		</TracingBeam>
	);
}
