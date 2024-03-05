import { FeaturedProjects } from "@/data/projects";
import { FeaturedSection } from "@/sections/featured.secion";

const Page = () => {
	const items = FeaturedProjects(4);
	return (
		<>
			<FeaturedSection items={items} />
		</>
	);
};

export default Page;
