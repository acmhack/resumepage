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

client.connect(uri, function(err:any, db:any) {
  if(err) {
    console.log(err);
  }else{
    console.log("MongoDB Connection Success")
  }
  var dbo = db.db("resume");
  dbo.createCollection("customers", function(err:any, res:any) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
})

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);



type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}
