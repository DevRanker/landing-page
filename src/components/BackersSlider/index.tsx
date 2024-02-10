import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {};

// Logos of Supporters and Arrays of those logos
const bitcoinLogo = '/static/images/bitcoin.svg';
const ethereumFoundationLogo = '/static/images/ethereumFoundation.svg';
const filecoinLogo = '/static/images/filecoin.svg';
const orangeDaoLogo = '/static/images/orangeDao.jpg';
const pancakeswapLogo = '/static/images/pancakeswap.svg';
const polygonLogo = '/static/images/polygon.svg';
const uniswapLogo = '/static/images/uniswap.svg';
const optimismLogo = '/static/images/optimism.svg';
const arbitrumLogo = '/static/images/arbitrumFoundation.svg';
const entrepreneurFirst = '/static/images/entrepreneurFirst.jpg';
const protocolLabsLogo = '/static/images/protocolLabs.webp';
const consensysMeshLogo = '/static/images/consensysMesh.png';
const logosArray1 = [uniswapLogo, ethereumFoundationLogo, optimismLogo, arbitrumLogo];
const logosArray2 = [
	entrepreneurFirst,
	protocolLabsLogo,
	consensysMeshLogo,
	orangeDaoLogo,
];
// const logosArray2 = [polygonLogo, ethereumFoundationLogo, bitcoinLogo, filecoinLogo];

const BackersSlider = (props: Props) => {
	return (
		<>
			{/* Backed By */}
			<div className="flex flex-col gap-8">
				<Link href="https://www.orangedao.xyz/" target="_blank">
					<Image
						src="/static/images/orangeDaoBanner.jpg"
						width={500}
						height={200}
						alt=""
					/>
				</Link>
			</div>
			{/* Supported By */}
			<div className="flex flex-col items-center max-w-[1284px] gap-4">
				<div className="flex flex-col">
					<h2 className="text-3xl font-black text-center">
						In our prior ventures, we&apos;ve worked with
					</h2>
					{/* <h3 className="opacity-80">
						Backed and trusted by the leaders of the Web3 revolution
					</h3> */}
				</div>

				{/* Log sliders */}
				<div
					className="flex flex-col items-center w-full mask"
					style={{
						maskImage:
							'linear-gradient(to right, hsla(0, 0%, 0%, 0), hsla(0, 0%, 0%, 1) 10%, hsla(0, 0%, 0%, 1) 90%, hsla(0, 0%, 0%, 0))',
					}}
				>
					{/* Logo slider 1 */}
					<div className="flex items-center w-full gap-5 py-6 overflow-hidden select-none">
						<div className="flex items-center justify-around w-full whitespace-nowrap shrink-0 animate-logoScrollX">
							{logosArray1.map((logo, index) => (
								<div
									key={index}
									className="w-[clamp(8rem,1rem_+_25vmin,20rem)] grid place-items-center p-[calc(10rem,1rem_+_20vmin,25rem)/10] "
								>
									<Image
										src={logo}
										alt="Logo"
										width={64}
										height={64}
										className="object-contain w-full h-full py-5  rounded-md shadow-[rgba(118,115,115,0.7)_0px_2px_8px_0px] aspect-video px-6"
									/>
								</div>
							))}
						</div>
						<div className="flex items-center justify-around w-full whitespace-nowrap shrink-0 animate-logoScrollX">
							{logosArray1.map((logo, index) => (
								<div
									key={index}
									className="w-[clamp(8rem,1rem_+_25vmin,20rem)] grid place-items-center p-[calc(10rem,1rem_+_20vmin,25rem)/10] "
								>
									<Image
										src={logo}
										alt="Logo"
										width={64}
										height={64}
										className="object-contain w-full h-full py-5 rounded-md shadow-[rgba(118,115,115,0.7)_0px_2px_8px_0px] aspect-video px-6"
									/>
								</div>
							))}
						</div>
					</div>
					{/* Logo slider 2 */}
					<div className="flex items-center w-full gap-5 py-6 overflow-hidden select-none">
						<div
							className="flex items-center justify-around w-full gap-5 whitespace-nowrap shrink-0 animate-logoScrollX "
							style={{ animationDirection: 'reverse', animationDelay: '-2s' }}
						>
							{logosArray2.map((logo, index) => (
								<div
									key={index}
									className="w-[clamp(8rem,1rem_+_25vmin,20rem)] grid place-items-center p-[calc(10rem,1rem_+_20vmin,25rem)/10] "
								>
									<Image
										src={logo}
										alt="Logo"
										width={64}
										height={64}
										className="object-contain w-full h-full py-5  rounded-md shadow-[rgba(118,115,115,0.7)_0px_2px_8px_0px] aspect-video px-6"
									/>
								</div>
							))}
						</div>
						<div
							className="flex items-center justify-around w-full gap-5 whitespace-nowrap shrink-0 animate-logoScrollX"
							style={{ animationDirection: 'reverse', animationDelay: '-2s' }}
						>
							{logosArray2.map((logo, index) => (
								<div
									key={index}
									className="w-[clamp(8rem,1rem_+_25vmin,20rem)] grid place-items-center p-[calc(10rem,1rem_+_20vmin,25rem)/10] "
								>
									<Image
										src={logo}
										alt="Logo"
										width={64}
										height={64}
										className="object-contain w-full h-full py-5 rounded-md shadow-[rgba(118,115,115,0.7)_0px_2px_8px_0px] aspect-video px-6"
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default BackersSlider;
