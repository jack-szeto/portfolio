import { MaskedCard } from "@/components/masked-card";
import Image, { StaticImageData } from "next/image";

import { ProjectCard } from "@/components/project-card";
import { FeaturedProjects } from "@/data/projects";

const Page = () => {
	const items = FeaturedProjects();
	return (
		<section className=" relative max-w-screen-xl w-full flex flex-col gap-8 p-8 mx-auto">
			<div className="flex justify-evenly items-center gap-8">
				{items.map((item) => (
					<ProjectCard key={item.title} project={item} className=" flex-1" />
				))}
			</div>
		</section>
	);
};

export default Page;
