// --- Chakra-UI ---
import { BackgroundProps, Box, Link, Text } from '@chakra-ui/react';

// --- Icons ---
import { FiExternalLink } from 'react-icons/fi';

// --- Component Props Interface ---
interface IInfoLinkProps {
	bgColor?: BackgroundProps['bgColor'];
}

export default function InfoLinkComponent({ bgColor }: IInfoLinkProps): JSX.Element {
	return (
		<Box
			w="full"
			display="grid"
			placeItems="center"
			zIndex="overlay"
			px="4"
			className="mt-10 mb-4"
		>
			© {new Date().getFullYear()} DevRanker. Build with ❤️ in 🇺🇸
		</Box>
	);
}
