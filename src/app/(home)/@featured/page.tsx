import { FeaturedProjects } from "@/data/projects";
import { FeaturedSection } from "@/sections/featured.secion";

const Page = () => {
	const items = FeaturedProjects();
	return (
		<>
			<FeaturedSection items={items} />
		</>
	);
};

export default Page;
