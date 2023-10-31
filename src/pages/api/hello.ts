// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Dev-Admin:PickHacksDevTeam@pickhacks.mlm2kz9.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

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


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    await client.connect();
    console.log("MongoDB Connection Success");
    
    const { name, projectName, projectLink, categoryWon, resumeLink, gradYear, category, featured } = req.body;
    const database = client.db("resume");
    const collection = database.collection("customers");

    const result = await collection.insertOne({
      name,
      projectName,
      projectLink,
      categoryWon,
      resumeLink,
      gradYear,
      category,
      featured,
    });

    console.log("Document inserted:", result.ops);
    res.status(200).json({ name, projectName, projectLink, categoryWon, resumeLink, gradYear, category, featured });

  }
  finally{
    await client.close();
  }
  //res.status(200).json({ name: 'John Doe' })
}
