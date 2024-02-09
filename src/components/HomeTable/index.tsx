import Image from 'next/image';
import React from 'react';

type Props = {};

const HomeTable = (props: Props) => {
	return (
		<div>
			<Image src="/static/images/gridTable.png" alt="Hero" width={1284} height={800} />
		</div>
	);
};

export default HomeTable;

// import React, { useState, useEffect } from 'react';
// import { Payment, columns } from './columns';
// import { DataTable } from './data-table';

// async function getData(): Promise<Payment[]> {
// 	return [
// 		{
// 			id: '728ed52f',
// 			amount: 100,
// 			status: 'pending',
// 			email: 'm@example.com',
// 		},
// 		{
// 			id: '728ed52f',
// 			amount: 100,
// 			status: 'pending',
// 			email: 'm@example.com',
// 		},
// 		{
// 			id: '728ed52f',
// 			amount: 100,
// 			status: 'pending',
// 			email: 'm@example.com',
// 		},
// 		{
// 			id: '728ed52f',
// 			amount: 100,
// 			status: 'pending',
// 			email: 'm@example.com',
// 		},
// 		{
// 			id: '728ed52f',
// 			amount: 100,
// 			status: 'pending',
// 			email: 'm@example.com',
// 		},
// 	];
// }

// export default function HomeTable() {
// 	const [data, setData] = useState<Payment[]>([]);

// 	useEffect(() => {
// 		getData().then(data => setData(data));
// 	}, []);

// 	return (
// 		<div className="container mx-auto py-10">
// 			<DataTable columns={columns} data={data} />
// 		</div>
// 	);
// }
