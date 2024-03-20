import {
	BaseGridCell,
	GridCell,
	GridCellKind,
	GridColumn,
	GridColumnIcon,
	Item,
} from '@glideapps/glide-data-grid';

import {
	ButtonCellType,
	SparklineCellType,
	SpinnerCellType,
	TagsCellType,
} from '@glideapps/glide-data-grid-cells';
import { useMemo } from 'react';
import pick from '../colorPicker';
import { get } from 'http';

export interface ProtectedCell extends BaseGridCell {
	readonly kind: GridCellKind.Protected;
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
	'Morocco',
	'Saudi Arabia',
	'Turkey',
	'India',
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

// Group of labels based on the repositories a developer has contributed to
const topics = [
	'Blockchain',
	'Web3',
	'AI',
	'Cloud',
	'Web Dev',
	'Frontend ',
	'Backend',
	'Machine Learning',
	'CI/CD',
	'DevOps',
	'Cybersecurity',
	'Game Dev',
	'AR/VR',
];

const socialMediaLogoUrls = [
	'https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg',
	'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
	'https://abs.twimg.com/icons/apple-touch-icon-192x192.png',
];

// Get a random number of social accounts from provided socialMediaLogoUrls
function getRandomSocialAccounts(): string[] {
	const numAccounts = Math.floor(Math.random() * 3) + 1; // Random number between 1 and 3
	const shuffledAccounts = socialMediaLogoUrls.sort(() => 0.5 - Math.random()); // Shuffle the socialMediaLogoUrls array
	return shuffledAccounts.slice(0, numAccounts); // Get the first 'numAccounts' elements from the shuffled array
}

// Generate random weekly contributions for a year
const getRandomWeeklyContributionsForYear: () => string[] = () => {
	const weeklyContributions = [];
	for (let i = 0; i < 52; i++) {
		weeklyContributions.push(Math.floor(Math.random() * 50));
	}
	return weeklyContributions;
};

// Get a random number of topics array from provided topics
function getRandomTopics(): string[] {
	const numTopics = Math.floor(Math.random() * 5) + 1; // Random number between 1 and 5
	const shuffledTopics = topics.sort(() => 0.5 - Math.random()); // Shuffle the topics array
	return shuffledTopics.slice(0, numTopics); // Get the first 'numTopics' elements from the shuffled array
}

// Get a random number of languages array from provided languages
function getRandomLanguages(): string[] {
	const numLanguages = Math.floor(Math.random() * 5) + 1; // Random number between 1 and 5
	const shuffledLanguages = languages.sort(() => 0.5 - Math.random()); // Shuffle the languages array
	return shuffledLanguages.slice(0, numLanguages); // Get the first 'numLanguages' elements from the shuffled array
}

export const data = userNames.map(userName => ({
	profileImage: `https://avatars.dicebear.com/api/avataaars.svg`,
	userName: userName,
	email: `${userName.toLowerCase()}@example.com`,
	socialAccounts: getRandomSocialAccounts(),
	country: countries[Math.floor(Math.random() * countries.length)],
	weeklyContributions: getRandomWeeklyContributionsForYear(),
	topics: getRandomTopics(),
	languages: getRandomLanguages(),
}));
