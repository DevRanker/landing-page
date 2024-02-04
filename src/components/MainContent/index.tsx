import dynamic from 'next/dynamic';

// --- Chakra-UI ---
import {
	Box,
	ComponentDefaultProps,
	ComponentWithAs,
	Flex,
	IconButtonProps,
	useColorMode,
	useColorModeValue,
} from '@chakra-ui/react';

// --- Styles ---
import { HERO_PATTERN } from '@styles/bgImages';
import Footer from '../Footer';

// --- Components ---
const SearchHistoryComponent = dynamic(() => import('@components/SearchHistory'));
const ThemeButtonComponent = dynamic(() => import('@components/ThemeButton'));
const InfoLinkComponent = dynamic(() => import('@components/InfoLink'));
const Navbar = dynamic(() => import('@components/Navbar'));

// --- Component Props Interface ---
interface IMainContentProps {
	children: React.ReactNode;
}

export default function MainContentComponent({
	children,
}: IMainContentProps): JSX.Element {
	const { colorMode } = useColorMode();

	// const bgColor = useColorModeValue('gray.50', 'gray.900');
	const bgColor = '#050414';

	const buttonStyleProps:
		| ComponentDefaultProps
		| ComponentWithAs<'button', IconButtonProps> = {
		color: useColorModeValue('gray.50', 'gray.600'),
		bgColor: useColorModeValue('gray.600', 'gray.50'),
		borderRadius: 'xl',
		boxShadow: 'xl',
		_hover: { backgroundColor: useColorModeValue('gray.700', 'gray.200') },
	};

	return (
		<Box
			// bgColor={bgColor}
			bgImage={`url("${HERO_PATTERN(colorMode)}")`}
			overflow="hidden"
			// className="flex justify-center"
		>
			<div className="">
				{/* <Flex
					gap={4}
					height=""
					position="absolute"
					top={[4, 10]}
					right={[4, 10]}
					zIndex="overlay"
				>
					<SearchHistoryComponent styleProps={buttonStyleProps} />

					<ThemeButtonComponent styleProps={buttonStyleProps} />
				</Flex> */}
				<Navbar />

				{children}
				<Footer bgColor={bgColor} />
			</div>
		</Box>
	);
}
