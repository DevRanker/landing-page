import Image from 'next/image';
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
const logosArray1 = [
	bitcoinLogo,
	ethereumFoundationLogo,
	filecoinLogo,
	orangeDaoLogo,
	pancakeswapLogo,
];
const logosArray2 = [
	polygonLogo,
	uniswapLogo,
	'https://cdn.worldvectorlogo.com/logos/ethereum-1.svg',
	'https://cdn.worldvectorlogo.com/logos/tezos-1.svg',
	'https://cdn.worldvectorlogo.com/logos/monero-1.svg',
];

const BackersSlider = (props: Props) => {
	return (
		<>
			{/* Supported By */}
			<div className="flex flex-col items-center w-full gap-8">
				<div className="flex flex-col gap-2">
					<h2 className="text-3xl font-black text-center">Supported By</h2>
					<h3>Backed and trusted by the leaders of the Web3 revolution</h3>
				</div>

				{/* Log sliders */}
				<div
					className="flex flex-col items-center w-full gap-8 mask"
					style={{
						maskImage:
							'linear-gradient(to right, hsla(0, 0%, 0%, 0), hsla(0, 0%, 0%, 1) 10%, hsla(0, 0%, 0%, 1) 90%, hsla(0, 0%, 0%, 0))',
					}}
				>
					{/* Logo slider 1 */}
					<div className="flex items-center w-full gap-8 py-6 overflow-hidden select-none">
						<div className="flex items-center justify-around w-full gap-8 whitespace-nowrap shrink-0 animate-logoScrollX">
							{logosArray1.map((logo, index) => (
								<div
									key={index}
									className="w-[clamp(10rem,1rem_+_40vmin,30rem)] grid place-items-center p-[calc(10rem,1rem_+_30vmin,30rem)/10] "
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
						<div className="flex items-center justify-around w-full gap-8 whitespace-nowrap shrink-0 animate-logoScrollX">
							{logosArray1.map((logo, index) => (
								<div
									key={index}
									className="w-[clamp(10rem,1rem_+_40vmin,30rem)] grid place-items-center p-[calc(10rem,1rem_+_30vmin,30rem)/10] "
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
					<div className="flex items-center w-full gap-8 py-6 overflow-hidden select-none">
						<div
							className="flex items-center justify-around w-full gap-8 whitespace-nowrap shrink-0 animate-logoScrollX"
							style={{ animationDirection: 'reverse', animationDelay: '-2s' }}
						>
							{logosArray2.map((logo, index) => (
								<div
									key={index}
									className="w-[clamp(10rem,1rem_+_40vmin,30rem)] grid place-items-center p-[calc(10rem,1rem_+_30vmin,30rem)/10] "
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
							className="flex items-center justify-around w-full gap-8 whitespace-nowrap shrink-0 animate-logoScrollX reverse"
							style={{ animationDirection: 'reverse', animationDelay: '-2s' }}
						>
							{logosArray2.map((logo, index) => (
								<div
									key={index}
									className="w-[clamp(10rem,1rem_+_40vmin,30rem)] grid place-items-center p-[calc(10rem,1rem_+_30vmin,30rem)/10] "
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
					</div>
				</div>
			</div>
		</>
	);
};

export default BackersSlider;
