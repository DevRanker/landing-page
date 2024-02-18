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
		<div className="flex z-[999] justify-center items-center w-full h-24 fixed  top-0 backdrop-blur-xl border-b-[0.8px] border-black dark:border-white/15 shadow-sm">
			<div className="flex justify-between items-center max-w-[1284px] w-[1284px]">
				<Link href={'/'} className="flex items-center h-full gap-2 text-xl font-black ">
					<Image
						src="/logos/logoLightCrop.png"
						alt="Dev Ranker"
						width={35}
						height={35}
						className="block dark:hidden rounded-full w-10 h-10"
					/>
					Dev Ranker
				</Link>
				<div className="flex items-center gap-20 text-lg">
					<Link
						href="https://cal.com/arstofbaniya"
						target="_blank"
						className="flex items-center justify-center border-2 border-purple-600 hover:bg-purple-600 transition-all duration-300 text-white rounded-full py-2 px-4
					shadow-[rgba(0,0,0,0.35)_0px_5px_15px]
					"
					>
						Get Started
					</Link>
					<Link href="/">Home</Link>
					{/* <Link href="/">Jobs</Link> */}
					<Link
						href="https://twitter.com/devranker"
						target="_blank"
						className=" border-2 border-white dark:border-black rounded-full p-2"
					>
						<FaXTwitter className="text-xl" />
					</Link>
					{/* <ThemeButtonComponent /> */}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
