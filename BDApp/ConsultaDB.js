
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://user1:pass1@cluster0.ixmrdxw.mongodb.net/?retryWrites=true&w=majority";
//////////// Conexion con DB /////////////////// 
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
/////////// Funciones !  ////////////

                                    // BUSCAR
async function busqueda(client, busqueda) {
    const result = await client.db("miapp").collection("Usuario").find(busqueda).toArray();
    console.log(result);
  }
                                    // CREAR UN USUARIO
  async function addCliente(client, add) {
    const result = await client.db("miapp").collection("Usuario").insertOne(add);
    console.log(result);
  }
                                     // CREAR MUCHOS USUARIOS
  async function addClientes(client, add) {
    const result = await client.db("miapp").collection("Usuario").insertMany(add);
    console.log(result);
  }




  // busqueda(client, {
  //   _id: "2"
  // });
  
  // addCliente(client,{
  //   _id: "134",
  //   nombre: "Ricardo1",
  //   DNI:"4323432A"
  // })

  addClientes(client,[{
    _id: "134",
    nombre: "Ricardo1",
    DNI:"4323432A"
  },{
    _id: "145",
    nombre: "Ricardo2",
    DNI:"4323432A"
  }])

  