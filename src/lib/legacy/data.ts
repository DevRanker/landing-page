import {
	BaseGridCell,
	GridCell,
	GridCellKind,
	GridColumn,
	GridColumnIcon,
	Item,
} from '@glideapps/glide-data-grid';

export interface ProtectedCell extends BaseGridCell {
	readonly kind: GridCellKind.Protected;
}

const countries = [
	'USA',
	'Canada',
	'Mexico',
	'Germany',
	'France',
	'Italy',
	'Spain',
	'UK',
	'China',
	'Japan',
	'India',
	'Australia',
	'Brazil',
	'Argentina',
	'Chile',
	'South Africa',
	'Nigeria',
	'Egypt',
	'Kenya',
	'Morocco',
	'Saudi Arabia',
	'UAE',
	'Turkey',
	'Russia',
	'Ukraine',
	'Poland',
	'Sweden',
	'Norway',
	'Finland',
	'Denmark',
	'Netherlands',
	'Belgium',
	'Switzerland',
	'Austria',
	'Greece',
	'Portugal',
	'Ireland',
];

const languages = [
	'Python',
	'JavaScript',
	'Java',
	'C++',
	'C#',
	'Swift',
	'Go',
	'Typescript',
];

const socialMediaLogoUrls = [
	'https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg',
	'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
	'https://abs.twimg.com/icons/apple-touch-icon-192x192.png',
];

function getRandomSocialAccounts(): string[] {
	const numAccounts = Math.floor(Math.random() * 3) + 1; // Random number between 1 and 3
	const shuffledAccounts = socialMediaLogoUrls.sort(() => 0.5 - Math.random()); // Shuffle the socialMediaLogoUrls array
	return shuffledAccounts.slice(0, numAccounts); // Get the first 'numAccounts' elements from the shuffled array
}
function getRandomLanguages(): string[] {
	const numLanguages = Math.floor(Math.random() * 5) + 1; // Random number between 1 and 5
	const shuffledLanguages = languages.sort(() => 0.5 - Math.random()); // Shuffle the languages array
	return shuffledLanguages.slice(0, numLanguages); // Get the first 'numLanguages' elements from the shuffled array
}

const userNames = [
	'John',
	'Jeff',
	'Star232',
	'Afraid22',
	'4gaghyl',
	'Gira.force',
	'SkilledAnimal',
	'SnowyTiger22',
	'StudiousPanda22',
];

export const data = userNames.map(userName => ({
	userName: userName,
	email: `${userName.toLowerCase()}@example.com`,
	socialAccounts: getRandomSocialAccounts(),
	country: countries[Math.floor(Math.random() * countries.length)],
	weeklyContributions: Math.floor(Math.random() * 500), // Random number up to 500
	topics: '12.02.2024',
	languages: getRandomLanguages(),
}));

// Glide app data
// Grid columns may also provide icon, overlayIcon, menu, style, and theme overrides

export const glideColumns: GridColumn[] = [
	{
		title: 'Username',
		width: 150,
		icon: GridColumnIcon.HeaderString,
		overlayIcon: GridColumnIcon.RowOwnerOverlay,
	},
	{
		title: 'Email',
		width: 180,
		icon: GridColumnIcon.HeaderEmail,
	},
	{
		title: 'Social Accounts',
		width: 150,
		icon: GridColumnIcon.HeaderString,
		overlayIcon: GridColumnIcon.RowOwnerOverlay,
	},
	{ title: 'Country', width: 150, icon: GridColumnIcon.HeaderSplitString },
	{ title: 'Weekly Contributions(1 yr)', width: 180, icon: GridColumnIcon.HeaderNumber },
	{ title: 'Topics', width: 150, icon: GridColumnIcon.HeaderDate },
	{ title: 'Languages', width: 150, icon: GridColumnIcon.HeaderString },
];

// If fetching data is slow you can use the DataEditor ref to send updates for cells
// once data is loaded.
function createGridCell(
	data: string | number | string[],
	kind: GridCellKind,
	key: string
): GridCell {
	const dataStr = Array.isArray(data) ? data.join(', ') : data.toString(); // Fix: Convert array data to string using join()
	let displayData = dataStr;
	if (key === 'socialAccounts' && Array.isArray(data)) {
		displayData = data
			.map(imgUrl => `<img src="${imgUrl}" alt="Social Account">`)
			.join('');
	}

	return {
		kind: kind as GridCellKind.Uri,
		// kind: GridCellKind.Text,
		data: displayData,
		allowOverlay: false,
		displayData: displayData,
	};
}

export function getData([col, row]: Item): GridCell {
	const person = data[row];
	const propertyMap = [
		{ key: 'userName', kind: GridCellKind.Bubble },
		{ key: 'email', kind: GridCellKind.Drilldown },
		{ key: 'socialAccounts', kind: GridCellKind.Text },
		{ key: 'country', kind: GridCellKind.Text },
		{ key: 'weeklyContributions', kind: GridCellKind.Custom },
		{ key: 'topics', kind: GridCellKind.Text },
		{ key: 'languages', kind: GridCellKind.Text },
	];

	if (col < 0 || col >= propertyMap.length) {
		throw new Error();
	}

	const property = propertyMap[col];
	return createGridCell(
		person[property.key],
		property.kind as GridCellKind,
		property.key
	);
}
