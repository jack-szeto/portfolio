import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export type SocialMedia = {
	id: string;
	title: string;
	url: string;
	icon: React.ReactNode;
};

export const socials: SocialMedia[] = [
	{
		id: "github",
		title: "GitHub",
		url: "https://github.com/jack-szeto",
		icon: <GitHubLogoIcon className=" w-6 h-6" />,
	},
	{
		id: "linkedin",
		title: "LinkedIn",
		url: "https://www.linkedin.com/in/ngai-chi-sze-to-3a5242195/",
		icon: <LinkedInLogoIcon className=" w-6 h-6" />,
	},
];
