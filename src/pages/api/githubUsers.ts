import prisma from '@/utils/connect';

export const getGithubUsers = async () => {
	try {
		const res = await prisma.github.users.findMany({
			take: 10,
			orderBy: {
				followers: 'desc',
			},
			select: {
				login: true,
				avatar_url: true,
				html_url: true,
				followers: true,
				following: true,
				public_repos: true,
				bio: true,
				company: true,
				location: true,
				name: true,
			},
		});
		return res;
	} catch (error) {
		console.error(error);
		return [];
	}
};
