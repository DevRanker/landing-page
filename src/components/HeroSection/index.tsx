import { Center } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import SearchComponent from '../Search';
import MotionContainer from '../Motion/MotionContainer';
import Image from 'next/image';
import { slide } from '@root/src/animations';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import HomeTable from '../HomeTable';
import { FaGithub } from 'react-icons/fa';
import CountUp from 'react-countup';

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

	useEffect(() => {
		const githubUsers = async () => {
			console.log('Fetching github users');
			try {
				const res = await fetch('http://localhost:3000/api/githubUsers');
				if (!res.ok) {
					throw new Error(`HTTP error! status: ${res.status}`);
				}
				const data = await res.json();
				console.log(
					'Github users: ',
					data,
					'Length: ',
					data.length,
					'First user: ',
					data[0]
				);
			} catch (error) {
				console.error('An error occurred while fetching github users:', error);
			}
		};
		githubUsers();
		// const repositoryDetails = async () => {
		// 	console.log('Fetching github users');
		// 	try {
		// 		const res = await fetch('http://localhost:3000/api/repositoryDetails');
		// 		if (!res.ok) {
		// 			throw new Error(`HTTP error! status: ${res.status}`);
		// 		}
		// 		const data = await res.json();
		// 		console.log('Repos ', data, 'Length: ', data.length, 'First user: ', data[0]);
		// 	} catch (error) {
		// 		console.error('An error occurred while fetching repository details:', error);
		// 	}
		// };
		// repositoryDetails();
	}, [router.query.login]);

	return (
		<div className=" flex flex-col items-center gap-12 mt-40 w-[1284px] max-w-[1284px] overflow-x-hidden px-8">
			<NextSeo title="Home" description="High Precision Developer Hiring" />

			{/* Hero section */}
			<div className="flex flex-col items-center justify-center w-full gap-6 ">
				<h1 className="font-black text-3xl  leading-[1.25] xs:text-4xl xs:leading-[1] sm:text-6xl md:text-7xl text-center flex flex-col">
					<span>Indexing the Top 2% </span>
					{/* <br /> */}
					<span className="">Devs in Web3</span>
				</h1>
				<h2 className="text-sm xs:text-xl lg:text-2xl font-normal opacity-50 max-w-[520px] text-center">
					The right developer recognized with zero-effort
				</h2>
			</div>

			{/* Blurred blob */}
			<div className="absolute w-56 h-56 bg-purple-600 -top-10 -left-12 blur-[140px] rounded-full "></div>
			<div className="absolute w-56 h-56 bg-purple-600 top-[23%] -right-32 blur-[140px] rounded-full "></div>

			{/* CTA */}
			<div className="flex items-center gap-8">
				<div className="flex items-center gap-3">
					<div className="px-3 py-3 rounded-md bg-purple-600/50">
						<FaGithub size={32} />
					</div>
					<span>
						<h4 className="text-3xl font-bold text-center">
							<CountUp start={0} end={9756} /> <span className="">+</span>
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
