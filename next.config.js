/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,

	async redirects() {
		return [
			{
				source: "/",
				destination: "/linktree",
				permanent: true,
			},
		];
	},

	images: {
		domains: ["i.pinimg.com", "img.icons8.com", "images.unsplash.com"],
	},
};

module.exports = nextConfig;
