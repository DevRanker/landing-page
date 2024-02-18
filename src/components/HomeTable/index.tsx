'use client';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
	DataEditor,
	DataEditorProps,
	DrilldownCell,
	DrilldownCellData,
	GridCell,
	GridCellKind,
	GridColumn,
	GridColumnIcon,
	Item,
	Theme,
	UriCell,
} from '@glideapps/glide-data-grid';
import { hashCode } from 'hashcode';
import range from 'lodash/range.js';

// Glide App Css
import '@glideapps/glide-data-grid/dist/index.css';
import { data } from '@/lib/gridTable/data';
import pick from '@/lib/colorPicker';
import {
	SparklineCellType,
	TagsCellType,
	useExtraCells,
} from '@glideapps/glide-data-grid-cells';
import { useTheme } from 'next-themes';
import { SparklineCell } from '@glideapps/glide-data-grid-cells/dist/ts/cells/sparkline-cell';
import { uniq } from 'lodash';
import { TagsCell } from '@glideapps/glide-data-grid-cells/dist/ts/cells/tags-cell';
import { UserProfileCell } from '@glideapps/glide-data-grid-cells/dist/ts/cells/user-profile-cell';
import { LinksCell } from '@glideapps/glide-data-grid-cells/dist/ts/cells/links-cell';

type Props = {};

const defaultProps: Partial<DataEditorProps> = {
	smoothScrollX: true,
	smoothScrollY: true,
	isDraggable: false,
	rowMarkers: 'none',
	width: '100%',
};

const darkTheme = {
	accentColor: '#8c96ff',
	accentLight: 'rgba(202, 206, 255, 0.253)',
	textDark: '#ffffff',
	textGroupHeader: '#a1a1a1',
	textMedium: '#b8b8b8',
	textLight: '#a0a0a0',
	textBubble: '#ffffff',

	bgIconHeader: '#b8b8b8',
	fgIconHeader: '#000000',
	textHeader: '#a1a1a1',
	textHeaderSelected: '#000000',

	bgCell: '#16161b',
	bgCellMedium: '#202027',
	bgHeader: '#212121',
	bgHeaderHasFocus: '#474747',
	bgHeaderHovered: '#404040',

	bgBubble: '#212121',
	bgBubbleSelected: '#000000',

	bgSearchResult: '#423c24',

	borderColor: 'rgba(225,225,225,0.2)',
	drilldownBorder: 'rgba(225,225,225,0.4)',

	linkColor: '#4F5DFF',

	headerFontStyle: '600 0.8125rem',
	baseFontStyle: '13px',
	fontFamily:
		'Inter, Roboto, -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Ubuntu, noto, arial, sans-serif',
};

const possibleTags = [
	{
		tag: 'C++',
		color: '#ff4d4d35',
	},
	{
		tag: 'Python',
		color: '#35f8ff35',
	},
	{
		tag: 'Solidity',
		color: '#48ff5735',
	},
	{
		tag: 'Rust',
		color: '#436fff35',
	},
	{
		tag: 'JavaScript',
		color: '#e0ff3235',
	},
	{
		tag: 'Go',
		color: '#ff1eec35',
	},
];

const HomeTable = (props: Props) => {
	const [showSearch, setShowSearch] = useState(false);
	const onSearchClose = useCallback(() => setShowSearch(false), []);
	const [GlideDataGrid, setGlideDataGrid] = useState(null);
	const [columns, setColumns] = useState([]);
	const { resolvedTheme } = useTheme();
	const [theme, setTheme] = React.useState<Partial<Theme>>({});

	const customRenderers = useExtraCells();

	useEffect(() => {
		setTheme(resolvedTheme === 'dark' ? darkTheme : {});
	}, [resolvedTheme]);

	function splitTags(str: string) {
		const delimiters = /[\s,\/\-\_\(\):]+/; // also words between parentheses, remove the parentheses

		let tags = str.split(delimiters);
		// Remove empty strings and trim tags
		tags = tags.filter(tag => tag.trim() !== '').map(tag => tag.trim());
		return tags;
	}

	const getTagsFromLabels = (arg0: string) => {
		// cut the string into all possible tags by splitting on" ", ",", "/", "-", "_
		// then return the tags
		const tags = splitTags(arg0);

		return tags.map(tag => {
			return {
				tag: tag,
				color: pick(tag, Boolean(resolvedTheme === 'dark')),
			};
		});
	};

	// Random number generator
	let num = 1;
	function rand(): number {
		return (num = (num * 16807) % 2147483647) / 2147483647;
	}

	// Glide app data
	// Grid columns may also provide icon, overlayIcon, menu, style, and theme overrides
	const glideColumns = useMemo<GridColumn[]>(
		() => [
			{
				id: 'profileImage',
				title: '',
				width: 40,
				// icon: GridColumnIcon.HeaderImage,
			},
			{
				id: 'userName',
				title: 'Username',
				// width: 100,
				icon: GridColumnIcon.HeaderString,
				overlayIcon: GridColumnIcon.RowOwnerOverlay,
				group: 'User Info',
			},
			{
				id: 'email',
				title: 'Email',
				// width: 120,
				icon: GridColumnIcon.HeaderEmail,
				group: 'User Info',
			},
			{
				id: 'socialAccounts',
				title: 'Social Accounts',
				// width: 150,
				icon: GridColumnIcon.HeaderString,
				overlayIcon: GridColumnIcon.RowOwnerOverlay,
				group: 'Extra',
			},
			{
				id: 'country',
				title: 'Country',
				// width: 150,
				icon: GridColumnIcon.HeaderSplitString,
				group: 'Extra',
			},
			{
				id: 'weeklyContributions',
				title: 'Weekly Contributions(1 yr)',
				// width: 250,
				icon: GridColumnIcon.HeaderNumber,
				group: 'Contributions Stats',
			},

			{
				id: 'topics',
				title: 'Topics',
				// width: 200,
				icon: GridColumnIcon.HeaderDate,
				group: 'Contributions Stats',
			},
			{
				id: 'languages',
				title: 'Languages',
				// width: 200,
				icon: GridColumnIcon.HeaderString,
				group: 'Contributions Stats',
			},
			// {
			// 	title: 'Button',
			// width: 200,
			// 	icon: GridColumnIcon.HeaderString,
			// },
		],
		[]
	);

	function createGridCell(
		data: string | number | string[],
		kind: GridCellKind,
		key: string,
		col: number,
		row: number
	): GridCell {
		const dataStr = Array.isArray(data) ? data.join(', ') : data.toString();
		let displayData = dataStr;

		// if (key === 'socialAccounts' && Array.isArray(data)) {
		// 	displayData = data
		// 		.map(imgUrl => `<img src="${imgUrl}" alt="Social Account">`)
		// 		.join(' ');
		// }

		if (key === 'profileImage') {
			num = row + 1;
			rand();
			return {
				kind: GridCellKind.Custom,
				allowOverlay: true,
				copyData: '4',
				readonly: row % 2 === 0,
				data: {
					kind: 'user-profile-cell',
					image: `https://avatars.dicebear.com/api/avataaars/${num}.svg`,
					initial: 'B',
					tint: '#F1D86E',
				},
			} as UserProfileCell;
		} else if (key === 'userName') {
			// num = row + 1;
			// rand();
			return {
				kind: GridCellKind.Uri,
				allowOverlay: true,
				readonly: true,
				// hoverEffect: true,
				copyData: '4',
				// underline: true,
				data: displayData,
				style: 'normal',
				onClickUri: `
				https://www.github.com/${displayData}`,
			} as UriCell;
		} else if (key === 'socialAccounts' && Array.isArray(data)) {
			return {
				kind: GridCellKind.Custom,
				cursor: 'pointer',
				allowOverlay: false,
				copyData: 'Button',
				readonly: true,
				data: {
					kind: 'button-cell',
					backgroundColor: ['transparent', 'bgHeaderHasFocus'],
					color: ['textDark', 'textDark'],
					borderColor: 'borderColor',
					borderRadius: 9,
					title: ['Github'],
					onClick: [
						// () => window.open('https://www.instagram.com/'),
						// () => window.open('https://twitter.com/'),
						() => window.open(' https://github.com'),
					],
				},
			};
		} else if (key === 'weeklyContributions') {
			num = row + 1;
			const values = range(0, 15).map(() => rand() * 50);
			return {
				kind: GridCellKind.Custom,
				allowOverlay: false,
				copyData: '4',
				data: {
					kind: 'sparkline-cell',
					values,
					displayValues: values.map(x => Math.round(x).toString()),
					color: row % 2 === 0 ? '#77c4c4' : '#D98466',
					// graphKind: "line",
					// hideAxis: true,
					yAxis: [-50, 50],
				},
			} as SparklineCell;
		} else if (key === 'topics') {
			const dataArray = Array.isArray(data) ? data : [data];
			return {
				allowOverlay: true,
				kind: GridCellKind.Drilldown,
				data: dataArray.map(
					(language: string): DrilldownCellData => ({
						text: language,
					})
				),
				color: Math.max(...dataArray.map(Number)) > 1 ? '#77c4c4' : '#D98466',
			} as unknown as TagsCellType;
		} else if (key === 'languages') {
			num = row + 1;
			rand();
			return {
				kind: GridCellKind.Custom,
				allowOverlay: true,
				copyData: '4',
				readonly: row % 2 === 0,
				data: {
					kind: 'tags-cell',
					possibleTags: possibleTags,
					tags: uniq([
						possibleTags[Math.round(rand() * 1000) % possibleTags.length].tag,
						possibleTags[Math.round(rand() * 1000) % possibleTags.length].tag,
						possibleTags[Math.round(rand() * 1000) % possibleTags.length].tag,
						possibleTags[Math.round(rand() * 1000) % possibleTags.length].tag,
					]),
				},
			} as TagsCell;
		}

		return {
			kind: GridCellKind.Uri,
			data: displayData,
			allowOverlay: false,
			displayData: displayData,
		};
	}

	function getContent([col, row]: Item): GridCell {
		const person = data[row];

		const propertyMap = [
			{ key: 'profileImage', kind: GridCellKind.Image },
			{ key: 'userName', kind: GridCellKind.Text },
			{ key: 'email', kind: GridCellKind.Protected },
			{ key: 'socialAccounts', kind: GridCellKind.Text },
			{ key: 'country', kind: GridCellKind.Text },
			{ key: 'weeklyContributions', kind: GridCellKind.Text },
			{ key: 'topics', kind: GridCellKind.Text },
			{ key: 'languages', kind: GridCellKind.Drilldown },
		];

		if (col < 0 || col >= propertyMap.length) {
			throw new Error();
		}

		const property = propertyMap[col];
		if (!property) {
			return {
				kind: GridCellKind.Loading,
				allowOverlay: false,
			};
		}
		return createGridCell(
			person[property.key],
			property.kind as GridCellKind,
			property.key,
			col,
			row
		);
	}

	useEffect(() => {
		import('@glideapps/glide-data-grid').then(GlideDataGridModule => {
			setGlideDataGrid(() => GlideDataGridModule.default);
		});
		setColumns(glideColumns);
	}, [glideColumns]);

	const onColumnResize = useCallback(
		(column, newSize) => {
			setColumns(prevColsMap => {
				const index = columns.findIndex(ci => ci.title === column.title);
				const newArray = [...prevColsMap];
				newArray.splice(index, 1, {
					...prevColsMap[index],
					width: newSize,
				});
				return newArray;
			});
		},
		[columns]
	);

	if (!GlideDataGrid) {
		return <div>Loading...</div>;
	}

	// console.log('Cell content for weeklyContributions', getContent([4, 0]));
	// console.log('Cell content for Topics', getContent([5, 0]));
	// console.log('Cell content for Languages', getContent([6, 0]));
	return (
		<div
			className="mx-8 w-[85vw] xl:w-[1284px] max-w-[1484px]"
			// style={{
			// 	width: '100%',
			// 	height: 'calc(100vh - 100px)',
			// }}
		>
			<DataEditor
				{...defaultProps}
				className="rounded-xl shadow-lg"
				// width={'100%'}
				// style={{
				// 	width: '100%',
				// 	height: 'calc(100vh - 100px)',
				// }}
				getCellContent={getContent}
				columns={columns}
				freezeColumns={1}
				rows={data.length}
				rowMarkers="number"
				onSearchClose={onSearchClose}
				showSearch={showSearch}
				keybindings={{ search: true }}
				smoothScrollX={true}
				smoothScrollY={true}
				// verticalBorder={c => c > 0}
				// getCellsForSelection={true}
				onColumnResize={onColumnResize}
				overscrollY={50}
				{...customRenderers}
			/>
			<div id="portal" />
		</div>
	);
};

export default HomeTable;
