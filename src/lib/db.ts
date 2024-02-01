import { Collection, Document, MongoClient } from 'mongodb';

let client: MongoClient | null = null;
let promise: Promise<MongoClient> | null = null;

async function connect(): Promise<MongoClient> {
	if (client) {
		return client;
	} else if (promise) {
		return promise;
	} else {
		return (promise = MongoClient.connect(process.env.MONGODB_URL!));
	}
}

export async function getCollection<T extends Document>(collection: string): Promise<Collection<T>> {
	if (client) {
		return client.db(process.env.STAGE === 'prod' ? 'main' : 'test').collection(collection);
	} else if (promise) {
		return promise.then((client) => client.db(process.env.STAGE === 'prod' ? 'main' : 'test').collection(collection));
	} else {
		return connect().then((client) => client.db(process.env.STAGE === 'prod' ? 'main' : 'test').collection(collection));
	}
}

