module.exports = {
	reactStrictMode: true,
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: { and: [/\.(js|ts|md)x?$/] },
			use: [
				{
					loader: '@svgr/webpack',
					options: {
						svgoConfig: { plugins: [{ removeViewBox: false }] },
					},
				},
			],
		});
		return config;
	},
};
