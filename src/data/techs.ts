export const Tech = {
	Nextjs: "Next.js",
	React: "React",
	TypeScript: "TypeScript",
	JavaScript: "JavaScript",
	HTML5: "HTML5",
	CSS3: "CSS3",
	TailwindCSS: "TailwindCSS",
	MySql: "MySQL",
	PostgreSQL: "PostgreSQL",
	MongoDB: "MongoDB",
	Docker: "Docker",
	Unity: "Unity",
	CSharp: "C#",
	Angular: "Angular",
	Laravel: "Laravel",
	PHP: "PHP",
	Flutter: "Flutter",
	Firebase: "Firebase",
	AWS: "AWS",
} as const;

export type Tech = (typeof Tech)[keyof typeof Tech];
