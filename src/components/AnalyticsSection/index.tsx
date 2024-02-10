import React from 'react';
import { FaGithub, FaStar } from 'react-icons/fa';
import { IoIosPerson } from 'react-icons/io';

type Props = {};

const AnalyticsSection = (props: Props) => {
	return (
		<div className="flex flex-col gap-12">
			<div className="flex flex-col gap-2 text-center items-center">
				<h2 className="text-3xl font-black text-center">Analytics</h2>
				<h3 className="w-full opacity-80 ">
					We have access to the best developers in web3 and the top startups hiring in
					web3”
				</h3>
			</div>
			<div className="flex gap-16">
				<div className="flex items-center gap-3">
					<div className="px-3 py-3 rounded-md bg-purple-600/50">
						<FaStar size={32} />
					</div>
					<span>
						<h4 className="text-2xl font-bold">4.9</h4>
						<h3 className="opacity-85">Rating overall</h3>
					</span>
				</div>
				<div className="flex items-center gap-3">
					<div className="px-3 py-3 rounded-md bg-purple-600/50">
						<FaGithub size={32} />
					</div>
					<span>
						<h4 className="text-2xl font-bold">90,000+</h4>
						<h3 className="opacity-85">Github profiles indexed</h3>
					</span>
				</div>
				<div className="flex items-center gap-3">
					<div className="px-3 py-3 rounded-md bg-purple-600/50">
						<IoIosPerson size={32} />
					</div>
					<span>
						<h4 className="text-2xl font-bold">300+</h4>
						<h3 className="opacity-85">Developers hired</h3>
					</span>
				</div>
			</div>
		</div>
	);
};

export default AnalyticsSection;
