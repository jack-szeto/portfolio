export type Work = {
	company: string;
	position: string;
	type: "Full-time" | "Part-time" | "Freelance" | "Internship";
	descriptionMarkdown: string;
	date?: {
		startDate: Date;
		endDate?: Date;
	};
};

export const works: Work[] = [
	{
		company: "TacklEd Innovation Limited",
		position: "Senior Software Developer",
		type: "Full-time",
		descriptionMarkdown: `Led API server development with PostgreSQL and MongoDB, supporting scalable applications.
Designed database schemas for PostgreSQL, MongoDB, and Firestore, optimizing data efficiency.
Developed ReactJs front-ends and a Flutter mobile app, enhancing user experience and cross-platform integration.
Engineered AWS and Firebase cloud infrastructures, ensuring application scalability and security.
Managed and mentored junior developers, promoting teamwork and productivity.`,
		date: {
			startDate: new Date("May 2022"),
			endDate: new Date("Jan 2024"),
		},
	},
	{
		company: "Arrokoth Ventures Limited",
		position: "Web3 Developer",
		type: "Part-time",
		descriptionMarkdown: `Developed a web3 application interface and management panel, facilitating secure and efficient blockchain interactions.`,
		date: {
			startDate: new Date("Jan 2022"),
			endDate: new Date("Sep 2022"),
		},
	},
	{
		company: "Explora",
		position: "Data Consultant",
		type: "Part-time",
		descriptionMarkdown: `Retrieved and analyzed data from client relational databases, presenting insights and trends through PowerBI visualizations.
Built and deployed Azure cloud functions using C# and .Net, automating data processing and integration tasks.`,
		date: {
			startDate: new Date("Jan 2022"),
			endDate: new Date("May 2022"),
		},
	},
	{
		company: "Big Deeper Studio Limited",
		position: "Game Developer",
		type: "Full-time",
		descriptionMarkdown: `Developed engaging mobile and tablet games using Unity & C#, contributing to a significant increase in user downloads.`,
		date: {
			startDate: new Date("Dec 2020"),
			endDate: new Date("Feb 2021"),
		},
	},
	{
		company: "IT Wake Limited",
		position: "Software Engineer",
		type: "Full-time",
		descriptionMarkdown: `Implemented dynamic front-end interfaces for an online-learning platform using Angular, enhancing user interaction and satisfaction.
Implemented payment-gateway on the Angular project.
Developed RESTful APIs using Laravel, supporting scalable web applications.`,
		date: {
			startDate: new Date("Dec 2019"),
			endDate: new Date("Nov 2020"),
		},
	},
	{
		company: "Softmedia Technology Co. Ltd.",
		position: "Programmer",
		type: "Full-time",
		descriptionMarkdown: `Maintained and improved web-based systems written in pure PHP, ensuring high reliability and performance.`,
		date: {
			startDate: new Date("Sep 2017"),
			endDate: new Date("Aug 2018"),
		},
	},
];

/*
Senior Software Developer
TacklEd Innovation Limited, May 2022 - Jan 2024
Led API server development with PostgreSQL and MongoDB, supporting scalable applications.
Designed database schemas for PostgreSQL, MongoDB, and Firestore, optimizing data efficiency.
Developed ReactJs front-ends and a Flutter mobile app, enhancing user experience and cross-platform integration.
Engineered AWS and Firebase cloud infrastructures, ensuring application scalability and security.
Managed and mentored junior developers, promoting teamwork and productivity.

Web3 Developer (Part-Time)
Arrokoth Ventures Limited, Jan 2022 - Sep 2022
Developed a web3 application interface and management panel, facilitating secure and efficient blockchain interactions.

Data Consultant (Part-Time)
Explora, Jan 2022 - May 2022
Retrieved and analyzed data from client relational databases, presenting insights and trends through PowerBI visualizations.
Built and deployed Azure cloud functions using C# and .Net, automating data processing and integration tasks.

Game Developer
Big Deeper Studio Limited, Dec 2020 - Feb 2021
Developed engaging mobile and tablet games using Unity & C#, contributing to a significant increase in user downloads.

Software Engineer
IT Wake Limited, Dec 2019 - Nov 2020
Implemented dynamic front-end interfaces for an online-learning platform using Angular, enhancing user interaction and satisfaction.
Implemented payment-gateway on the Angular project.
Developed RESTful APIs using Laravel, supporting scalable web applications.

Programmer - Softmedia Technology Co. Ltd.
Softmedia Technology Co. Ltd., Sep 2017 - Aug 2018
Maintained and improved web-based systems written in pure PHP, ensuring high reliability and performance.
*/
