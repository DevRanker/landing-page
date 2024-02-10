import { Center } from '@chakra-ui/react';
import React from 'react';
import SearchComponent from '../Search';
import MotionContainer from '../Motion/MotionContainer';
import Image from 'next/image';
import { slide } from '@root/src/animations';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import HomeTable from '../HomeTable';
import { FaGithub } from 'react-icons/fa';

type Props = {};

const HeroSection = (props: Props) => {
	const router = useRouter();

	const handleSearchLogin = (login?: string) => {
		login &&
			router.push({
				pathname: '/user/[login]',
				query: { login },
			});
	};
	return (
		<div className=" flex flex-col items-center gap-12 mt-40 w-[1284px] max-w-[1284px] overflow-x-hidden">
			<NextSeo
				title="Home"
				description="🦸‍♀️ A super template for Next.js with a pack of incredible tools"
			/>

			{/* Hero section */}
			<div className="flex flex-col items-center justify-center w-full gap-6 ">
				<h1 className="font-black md:text-6xl text-7xl text-center flex flex-col">
					<span>Indexing the Top 2% </span>
					<br />
					<span className="-mt-12">Devs in Web3</span>
				</h1>
				<h2 className="text-xl font-normal opacity-50 max-w-[480px] text-center">
					The right developer recognized with zero-effort
				</h2>
			</div>

			{/* Blurred blob */}
			<div className="absolute w-56 h-56 bg-purple-600 -top-10 -left-12 blur-[140px] rounded-full "></div>
			<div className="absolute w-56 h-56 bg-purple-600 top-[23%] -translate-y-[50%] -right-32 blur-[140px] rounded-full "></div>

			{/* CTA */}
			<div className="flex items-center gap-8">
				{/* <Link
					href="https://cal.com/arstofbaniya"
					className="flex items-center justify-center border-2 border-purple-600 hover:-translate-y-[2px] transition-all duration-300 text-white rounded-md py-4 px-8 text-lg font-medium hover:shadow shadow-purple-600
					shadow-[rgba(0,0,0,0.35)_0px_5px_15px]
					"
				>
					Get Started Now
				</Link> */}
				{/* <div className="flex flex-col border-2 border-purple-600 py-3 px-6 rounded-sm"> */}

				<div className="flex items-center gap-3">
					<div className="px-3 py-3 rounded-md bg-purple-600/50">
						<FaGithub size={32} />
					</div>
					<span>
						<h4 className="text-3xl font-bold text-center">
							9,756 <span className="">+</span>
						</h4>
						<h3 className="opacity-85"> Web3 Developers Indexed</h3>
					</span>
				</div>
			</div>

			{/* Search Container */}
			<MotionContainer
				w="full"
				initial="initial"
				animate="animate"
				exit="exit"
				variants={slide}
				className=""
			>
				<Center w="full">
					<SearchComponent handleSearchLogin={handleSearchLogin} />
					{/* <SearchComponent /> */}
				</Center>
			</MotionContainer>

			{/* Glide table */}
			<HomeTable />
		</div>
	);
};

export default HeroSection;
