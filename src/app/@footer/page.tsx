import { socials } from "@/data/socials";

const Footer = async () => {
	return (
		<footer className="flex flex-col justify-center items-center w-full p-16">
			<div className="flex justify-center items-center">
				{socials.map((social) => (
					<a
						key={social.id}
						href={social.url}
						target="_blank"
						rel="noopener noreferrer"
						className="m-2"
					>
						{social.icon}
					</a>
				))}
			</div>
			<span className="text-sm text-muted-foreground">
				&copy; 2024 Jack Szeto. All rights reserved.
			</span>
		</footer>
	);
};

export default Footer;
