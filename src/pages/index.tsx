import dynamic from 'next/dynamic';

// --- Components ---
const SearchComponent = dynamic(() => import('@components/Search'));

// --- Motion Components ---
import MotionContainer from '@components/Motion/MotionContainer';

// -- Components --
import HeroSection from '../components/HeroSection';
import BackersSlider from '../components/BackersSlider';
import AnalyticsSection from '../components/AnalyticsSection';

export default function HomePage() {
	return (
		<div className="flex flex-col items-center justify-center gap-28">
			<HeroSection />

			{/* Analytics section */}
			<AnalyticsSection />

			{/* Backers Slider */}
			<BackersSlider />
		</div>
	);
}
