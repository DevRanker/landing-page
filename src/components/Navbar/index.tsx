import Link from 'next/link';
import React from 'react';

// React Icons
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import ThemeButtonComponent from '../ThemeButton';

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
import Image from 'next/image';

interface Props {
	// Define your component's props here
}

const Navbar: React.FC<Props> = props => {
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
		<div className="flex z-[999] justify-center items-center w-full h-16 fixed  top-0 backdrop-blur-xl border-b-[0.8px] border-black dark:border-white/15 shadow-sm">
			<div className="flex justify-between items-center max-w-[1284px] w-[1284px]">
				<div className="flex gap-5">
					<Link href="https://github.com/DevRanker" target="_blank">
						<FaGithub className="text-xl" />
					</Link>
					<Link href="/" className="">
						<FaXTwitter className="text-xl" />
					</Link>
					<Link href="/">
						<FaLinkedin className="text-xl" />
					</Link>
				</div>
				<Link href={'/'} className="flex items-center h-full gap-2 text-2xl font-black ">
					<Image
						src="/devranker.jpeg"
						alt="Dev Ranker"
						width={40}
						height={40}
						className="rounded-full"
					/>
					Dev Ranker
				</Link>
				<div className="flex items-center gap-5">
					<Link href="/">Home</Link>
					<Link href="/">About</Link>
					<Link href="/">Login</Link>
					{/* <ThemeButtonComponent styleProps={buttonStyleProps} /> */}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
