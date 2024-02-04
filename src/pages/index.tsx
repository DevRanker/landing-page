import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import Image from 'next/image';

// --- Glide Data Grid ---
import '@glideapps/glide-data-grid/dist/index.css';
import {
	DataEditor,
	GridCell,
	GridCellKind,
	GridColumn,
	Item,
} from '@glideapps/glide-data-grid';

// --- Chakra-UI ---
import { Center } from '@chakra-ui/react';

// --- Components ---
const SearchComponent = dynamic(() => import('@components/Search'));

// --- Motion Components ---
import MotionContainer from '@components/Motion/MotionContainer';

// -- Animations --
import { slide } from '@animations';

// -- Components --
import HeroSection from '../components/HeroSection';
import BackersSlider from '../components/BackersSlider';
import AnalyticsSection from '../components/AnalyticsSection';

// --- Grid Table data ---
// Grid columns may also provide icon, overlayIcon, menu, style, and theme overrides
const columns: GridColumn[] = [
	{ title: 'First Name', width: 100 },
	{ title: 'Last Name', width: 100 },
];
const numRows = 100;

// If fetching data is slow you can use the DataEditor ref to send updates for cells
// once data is loaded.
function getData([col, row]: Item): GridCell {
	const person = data[row];

	if (col === 0) {
		return {
			kind: GridCellKind.Text,
			data: person.firstName,
			allowOverlay: false,
			displayData: person.firstName,
		};
	} else if (col === 1) {
		return {
			kind: GridCellKind.Text,
			data: person.lastName,
			allowOverlay: false,
			displayData: person.lastName,
		};
	} else {
		throw new Error();
	}
}

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
