/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
	type: 'website',
	titleTemplate: '%s | DevRanker',
	defaultTitle: 'DevRanker',
	description: 'A place to find worlds best developers in the world',
	site_name: 'DevRanker',
	openGraph: {
		url: 'https://next-plate.vercel.app',
		title: 'DevRanker',
		description: 'A place to find worlds best developers in the world',
		images: [
			{
				url: 'https://next-plate.vercel.app/static/images/banner.jpg',
				width: 512,
				height: 256,
				alt: 'Next-Plate Banner Image',
			},
		],
		site_name: 'Next-Plate',
	},
};

export default defaultSEOConfig;
