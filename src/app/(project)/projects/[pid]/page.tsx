import { Background } from "@/components/ui/background";
import { ProjectView } from "./project.view";
import { GetProject } from "@/data/projects";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Page = async ({ params }: { params: { pid: string } }) => {
	const project = GetProject(params.pid);
	if (!project) {
		notFound();
	}
	return (
		<Background
			className="max-w-screen-xl w-full min-h-[720px] flex flex-col justify-start gap-8 p-8 mx-auto"
			variant="dots"
		>
			<ProjectView project={project} />
		</Background>
	);
};

export default Page;
