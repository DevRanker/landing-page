import prisma from '@/utils/connect';

const repositoryDetails = async () => {
	try {
		const res = await prisma.repositoryDetails.findMany({
			where: {
				github_name: 'nextjs',
			},
		});
		return res;
	} catch (error) {
		console.error(error);
		return [];
	}
};

export default repositoryDetails;
