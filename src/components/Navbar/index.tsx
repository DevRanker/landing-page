import Link from 'next/link';
import React from 'react';

// React Icons
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import ThemeButtonComponent from '../ThemeButton';
import { IoClose } from 'react-icons/io5';

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
import { HamburgerIcon } from '@chakra-ui/icons';

interface Props {
	// Define your component's props here
}

const Navbar: React.FC<Props> = props => {
	const [mobileMenuIsOpen, setMobileMenuIsOpen] = React.useState(false);

	const buttonStyleProps:
		| ComponentDefaultProps
		| ComponentWithAs<'button', IconButtonProps> = {
		color: useColorModeValue('gray.50', 'gray.600'),
		bgColor: useColorModeValue('gray.600', 'gray.50'),
		borderRadius: 'xl',
		boxShadow: 'xl',
		_hover: { backgroundColor: useColorModeValue('gray.700', 'gray.200') },
	};

	const handleMobileMenu = () => {
		setMobileMenuIsOpen(!mobileMenuIsOpen);
	};
	return (
		<div className="flex z-[999] justify-center items-center w-full h-24 fixed  top-0 backdrop-blur-xl border-b-[0.8px] border-black dark:border-white/15 shadow-sm px-8">
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
				<div className="items-center gap-20 text-lg hidden sm:flex">
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
					<Link
						href="https://twitter.com/devranker"
						target="_blank"
						className=" border-2 border-white dark:border-black rounded-full p-2"
					>
						<FaXTwitter className="text-xl" />
					</Link>
					{/* <ThemeButtonComponent /> */}
				</div>
				<div className="sm:hidden">
					<HamburgerIcon
						className="sm:hidden text-3xl cursor-pointer"
						onClick={() => setMobileMenuIsOpen(true)}
					/>

					{/* Mobile Nav */}
					{mobileMenuIsOpen && (
						<div className="fixed text-2xl top-0 left-0 w-full min-h-screen bg-black dark:bg-gray-50/90 flex flex-col items-center justify-center gap-8">
							{/* Blurred blob */}
							<div className="absolute w-56 h-56 bg-purple-600 -top-10 -left-12 blur-[140px] rounded-full "></div>
							<div className="absolute w-56 h-56 bg-purple-600 bottom-64 -translate-y-[50%] -right-48 blur-[140px] rounded-full "></div>
							<div className="absolute w-56 h-56 bg-purple-600 -bottom-48 -translate-y-[50%] -left-24 blur-[140px] rounded-full "></div>
							<IoClose
								className="absolute top-8 right-8 text-3xl cursor-pointer"
								onClick={() => setMobileMenuIsOpen(false)}
							/>
							<Link href="/" className="" onClick={() => setMobileMenuIsOpen(false)}>
								Home
							</Link>
							<Link
								href="https://cal.com/arstofbaniya"
								target="_blank"
								onClick={() => setMobileMenuIsOpen(false)}
								className="flex items-center justify-center border-2 border-purple-600 hover:bg-purple-600 transition-all duration-300  rounded-full py-2 px-4
					shadow-[rgba(0,0,0,0.35)_0px_5px_15px] text-purple-600 hover:text-white
					"
							>
								Get Started
							</Link>
							<Link
								href="https://twitter.com/devranker"
								target="_blank"
								onClick={() => setMobileMenuIsOpen(false)}
								className=" border-2 border-black dark:border-black rounded-full p-2"
							>
								<FaXTwitter className="text-4xl" />
							</Link>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
