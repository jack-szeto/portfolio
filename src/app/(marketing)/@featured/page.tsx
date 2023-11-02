import { MaskedCard } from "@/components/masked-card";
import Image from "next/image";

import wildwester from "@/assets/images/projects/wildwesters.io/wildwesters.io_demo.png";
import magnolia from "@/assets/images/projects/magnolia/magnolia-lab.com_en_.png";
import guild22 from "@/assets/images/projects/guild22.io/guild22.io_.png";

const Page = () => {
	const items = [
		{
			title: "Wild Westers",
			description: "A website for a game.",
			image: wildwester,
		},
		{
			title: "Magnolia",
			description: "A website for a game.",
			image: magnolia,
		},
		{
			title: "Guild 22",
			description: "A website for a game.",
			image: guild22,
		},
	];
	return (
		<section className=" relative max-w-screen-xl w-full flex flex-col gap-8 p-8 mx-auto">
			<h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
				Featured
			</h3>

			<div className="flex justify-evenly items-center gap-8">
				{items.map((item) => (
					<MaskedCard
						key={item.title}
						className=" max-w-sm aspect-square hover:scale-105 active:scale-95 transition-transform cursor-pointer"
					>
						<Image
							src={item.image}
							placeholder="blur"
							alt={item.title}
							style={{
								width: "100%",
								height: "100%",
								objectFit: "cover",
							}}
						/>
					</MaskedCard>
				))}
			</div>
		</section>
	);
};

export default Page;
