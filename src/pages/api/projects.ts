import { WithId } from 'mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getCollection } from '../../lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse<WithId<User>[] | string>) {
	switch (req.method) {
		case 'GET':
			try {
				const collection = await getCollection<User>('applications');

				let projectData = await collection
					.find({ projectLink: { $ne: null }, projectName: { $ne: null } }, { projection: { projectName: 1, projectLink: 1, _id: 0 } })
					.toArray();
                for (let i = 0; i < projectData.length; i++) {
                    let members = await collection
                    .find({ projectLink: projectData[i].projectLink, projectName: projectData[i].projectName })
                    .toArray()
                    .then((members) => {
                        Object.assign(projectData[i], { members });
                    });
                }
			
				console.log(projectData);

				res.status(200).json(projectData);
			} catch (error) {
				console.error('Error getting data:', error);
				res.status(500).send('Error occured');
			}
			break;
		default:
			res.status(405).send('Must use GET');
	}
}
