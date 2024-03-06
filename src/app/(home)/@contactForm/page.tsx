import { Label, LabelInputContainer } from "@/components/ui/label";
import { PageLayout } from "./page-layout";
import { Input } from "@/components/ui/input";
import { IconSend } from "@tabler/icons-react";
import { BottomGradient, Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const Page = () => {
	async function sendMeAMessage(formData: FormData) {
		"use server";

		const rawFormData = {
			name: formData.get("name"),
			email: formData.get("email"),
			message: formData.get("message"),
		};

		console.log(rawFormData);

		// mutate data
		// revalidate cache
	}
	return (
		<>
			<PageLayout>
				<div className="flex flex-col gap-0">
					<form
						id="contact-form"
						className="relative w-96 flex flex-col gap-4 rounded-md"
						action={sendMeAMessage}
					>
						<div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
							<LabelInputContainer>
								<Label htmlFor="firstname">Name</Label>
								<Input
									id="name"
									placeholder="Jack"
									type="text"
									name="name"
								/>
							</LabelInputContainer>

							<LabelInputContainer className="">
								<Label htmlFor="email">Email Address</Label>
								<Input
									id="email"
									placeholder="jack.ngaichi@gmail.com"
									type="email"
									name="email"
								/>
							</LabelInputContainer>
						</div>

						<LabelInputContainer className="">
							<Label htmlFor="message">Message</Label>
							<Textarea
								id="message"
								name="message"
								placeholder="Tell me about your thoughts..."
							/>
						</LabelInputContainer>

						<Button variant={"submit"} type="submit">
							<div className=" flex gap-1 justify-center items-center">
								<span>Send</span>
								<IconSend className="w-5 h-5" />
							</div>
							<BottomGradient />
						</Button>
					</form>
					<div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
				</div>
			</PageLayout>
		</>
	);
};

export default Page;
