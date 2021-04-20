module.exports = {
	async rewrites() {
		return [
			{
				source: '/goods',
				destination: '/',
			},
			{
				source: '/sellors',
				destination: '/ranks',
			},
		];
	},
};
