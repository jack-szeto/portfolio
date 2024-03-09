import { Background } from "@/components/ui/background";
import { ProjectsView } from "./projects.view";
import { projects } from "@/data/projects";

const Page = async () => {
	const allProjects = projects;
	return (
		<Background
			className="max-w-screen-xl w-full min-h-[720px] flex flex-col justify-start gap-8 p-8 mx-auto"
			variant="dots"
		>
			<ProjectsView projects={allProjects} />
		</Background>
	);
};

export default Page;
