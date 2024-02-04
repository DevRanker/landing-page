import { Center } from '@chakra-ui/react';
import React from 'react';
import SearchComponent from '../Search';
import MotionContainer from '../Motion/MotionContainer';
import Image from 'next/image';
import { slide } from '@root/src/animations';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
// import{ router as Router} from 'next/router';

type Props = {};

const HeroSection = (props: Props) => {
	// const router = Router();

	// const handleSearchLogin = (login?: string) => {
	// 	login &&
	// 		router.push({
	// 			pathname: '/user/[login]',
	// 			query: { login },
	// 		});
	// };
	return (
		<div className="flex flex-col items-center min-h-screen gap-12 mt-40 w-[1284px] max-w-[1284px]">
			<NextSeo
				title="Search"
				description="🦸‍♀️ A super template for Next.js with a pack of incredible tools"
			/>

			{/* Hero section */}
			<div className="flex flex-col items-center justify-center w-full gap-10">
				<h1 className="font-black md:text-6xl text-7xl max-w-[700px] text-center leading-[1.1]">
					<span>Indexing the best</span>
					<br />
					<span className="">Developers</span> in Web3
				</h1>
				<h2 className="text-xl font-normal opacity-50 max-w-[480px] text-center">
					Driving Growth in the Web3 Space. Unleashing Potential in Decentralized
					Development.
				</h2>
			</div>

			{/* CTA */}
			<div className="flex items-center gap-8">
				<Link
					href="/"
					className="flex items-center justify-center border-2 border-purple-600 hover:-translate-y-[2px] transition-all duration-300 text-white rounded-md py-4 px-8 text-lg font-medium hover:shadow shadow-purple-600
					shadow-[rgba(0,0,0,0.35)_0px_5px_15px]
					"
				>
					Get Started Now
				</Link>
				<div className="flex flex-col">
					<span className="text-2xl font-medium opacity-75">90,000+</span>
					<span className="text-sm opacity-60">developers Indexed</span>
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
					{/* <SearchComponent handleSearchLogin={handleSearchLogin} /> */}
					<SearchComponent />
				</Center>
			</MotionContainer>

			{/* Glide table */}
			{/* <DataEditor getCellContent={getData} columns={columns} rows={numRows} /> */}
			<div>
				<Image src="/static/images/gridTable.png" alt="Hero" width={1284} height={800} />
			</div>
		</div>
	);
};

export default HeroSection;
