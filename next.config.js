/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "admin.babycheese.studio",
				pathname: "/uploads/**", // Allow all images in the /uploads folder
			},
		],
	},
};

module.exports = nextConfig;