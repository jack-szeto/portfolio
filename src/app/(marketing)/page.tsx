import { Button } from "@/components/ui/button";

const Page = () => {
	return (
		<section className=" relative max-w-screen-xl w-full min-h-[720px] flex flex-col justify-center gap-8 p-8 mx-auto">
			<div className="flex flex-col gap-4">
				<h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
					Elevating Web Experiences with
				</h3>

				<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
					Speed, Performance, and Seamless Interactivity
				</h1>
			</div>

			<p className=" w-96 max-w-full">
				Hi, I&apos;m <span className="font-semibold">Jack</span>, a web
				developer based in Hong Kong.
				<br />I specialize in building high-performance websites and
				applications with modern technologies.
			</p>

			<div className=" flex flex-row gap-4 mt-20">
				<Button size={"lg"}>Contact Me</Button>
				<Button size={"lg"} variant={"outline"}>
					See My Work
				</Button>
			</div>

			{/* some graphical effect at the bottom right */}
			<div className="absolute bottom-0 right-0">
                
			</div>
		</section>
	);
};

export default Page;
