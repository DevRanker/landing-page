import React from 'react';
import { FaGithub, FaStar } from 'react-icons/fa';
import { IoIosPerson } from 'react-icons/io';

type Props = {};

const AnalyticsSection = (props: Props) => {
	return (
		<div className="flex gap-16">
			<div className="flex items-center gap-3">
				<div className="px-3 py-3 rounded-md bg-white/10">
					<FaStar size={32} />
				</div>
				<span>
					<h4 className="text-2xl font-bold">4.9</h4>
					<h3 className="opacity-85">Rating overall</h3>
				</span>
			</div>
			<div className="flex items-center gap-3">
				<div className="px-3 py-3 rounded-md bg-white/10">
					<FaGithub size={32} />
				</div>
				<span>
					<h4 className="text-2xl font-bold">90,000+</h4>
					<h3 className="opacity-85">Github profiles indexed</h3>
				</span>
			</div>
			<div className="flex items-center gap-3">
				<div className="px-3 py-3 rounded-md bg-white/10">
					<IoIosPerson size={32} />
				</div>
				<span>
					<h4 className="text-2xl font-bold">300+</h4>
					<h3 className="opacity-85">Developers hired</h3>
				</span>
			</div>
		</div>
	);
};

export default AnalyticsSection;
