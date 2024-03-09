import { Background } from "@/components/ui/background";
import { works } from "@/data/works";
import { WorkView } from "./work.view";

const Page = async () => {
	const allWorks = works;
	return (
		<Background
			className="max-w-screen-xl w-full min-h-[720px] flex flex-col justify-start gap-8 p-8 mx-auto"
			variant="dots"
		>
			<WorkView works={allWorks} />
		</Background>
	);
};

export default Page;
