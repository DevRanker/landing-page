import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
	initialColorMode: 'dark',
	useSystemColorMode: true,
};

const theme = extendTheme({
	config,
	fonts: {
		heading: 'Poppins',
		body: 'Poppins',
	},
	styles: {
		global: {
			'*::-webkit-scrollbar': {
				width: '4px',
			},
			'*::-webkit-scrollbar-track': {
				width: '6px',
			},
			'*::-webkit-scrollbar-thumb': {
				background: 'purple.500',
			},
		},
	},
});

export default theme;
