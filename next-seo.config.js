/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
	type: 'website',
	titleTemplate: '%s | DevRanker',
	defaultTitle: 'DevRanker',
	description: 'Indexing the Top 2% Devs in Web3',
	site_name: 'DevRanker',
	openGraph: {
		url: 'https://devranker.com',
		title: 'DevRanker',
		description: 'Indexing the Top 2% Devs in Web3',
		images: [
			{
				url: '/public/static/images/openGraph.jpeg',
				width: 512,
				height: 256,
				alt: 'Dev Ranker Banner Image',
			},
			{
				url: 'https://ibb.co/FxfbYXy',
				width: 512,
				height: 256,
				alt: 'Dev Ranker Banner Image',
			},
		],
		site_name: 'Dev Ranker',
	},
};

export default defaultSEOConfig;
