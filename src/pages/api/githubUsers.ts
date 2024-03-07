import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/utils/connect';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	try {
		let data = await prisma.users.findMany({});
		// Convert BigInt values to strings
		data = data.map(user => {
			const newUser = { ...user };
			for (let key in newUser) {
				if (typeof newUser[key] === 'bigint') {
					newUser[key] = newUser[key].toString();
				}
			}
			return newUser;
		});
		res.status(200).json(data);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'An error occurred while fetching github users' });
	}
}
