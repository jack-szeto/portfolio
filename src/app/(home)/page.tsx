import { Background } from "@/components/ui/background";
import { BannerSection } from "@/sections/banner.section";

const Page = () => {
	return (
		<Background
			className="max-w-screen-xl w-full min-h-dvh md:min-h-dvh flex flex-col justify-center gap-8 p-8 mx-auto"
			variant="dots"
		>
			<BannerSection className=" flex flex-col justify-center gap-0 mx-auto md:mx-0 max-w-full" />
		</Background>
	);
};

export default Page;