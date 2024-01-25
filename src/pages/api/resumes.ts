import type { NextApiRequest, NextApiResponse } from 'next';
import { getCollection } from '../../lib/db';

//data
//with fields :)
type Data = {
	name: string;
	projectName: string;
	projectLink: string;
	categoryWon: string;
	resumeLink: string;
	gradYear: number;
	category: string;
	featured: boolean;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data[] | string>) {
	switch (req.method) {
		case 'GET':
			try {
				const collection = await getCollection<Data>('customers');

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

