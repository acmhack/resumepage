import { WithId } from 'mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getCollection } from '../../lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse<WithId<User>[] | string>) {
	switch (req.method) {
		case 'GET':
			try {
				const collection = await getCollection<User>('customers');

				const data = await collection.find().toArray();

				res.status(200).json(data);
			} catch (error) {
				console.error('Error getting data:', error);
				res.status(500).send('Error occured');
			}
			break;
		default:
			res.status(405).send('Must use GET');
	}
}

