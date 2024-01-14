
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://user1:pass1@cluster0.ixmrdxw.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

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

async function busqueda(client, busqueda) {
    const result = await client.db("miapp").collection("Usuario").find([busqueda]).toArray();
    console.log(result);
  }
  async function addCliente(client, add) {
    const result = await client.db("miapp").collection("Usuario").insertOne(add);
    console.log(result);
  }
  // addCliente(client,{
  //   _id: "14",
  //   nombre: "Ricardo",
  //   DNI:"4323432A"
  // })

  busqueda(client, {
    _id: "2"
  });
  