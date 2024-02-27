/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.unsplash.com",
				port: "",
				pathname: "**",
			},
			{
				// particles.js.org
				protocol: "https",
				hostname: "particles.js.org",
				port: "",
				pathname: "**",
			}
		],
	},
};

module.exports = nextConfig;
