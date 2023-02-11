/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
	poweredByHeader: false,
	trailingSlash: true,
	basePath: "",
	// The starter code load resources from `public` folder with `router.basePath` in React components.
	// So, the source code is "basePath-ready".
	// You can remove `basePath` if you don't need it.
	reactStrictMode: true,
});

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

	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: [
				{
					loader: "@svgr/webpack",
					options: {
						typescript: true,
						icon: true,
					},
				},
			],
		});

		return config;
	},
};

module.exports = nextConfig;
