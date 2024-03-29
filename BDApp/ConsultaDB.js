
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
                                     // CREAR VARIOS USUARIOS
  async function addClientes(client, add) {
    const result = await client.db("miapp").collection("Servicio").insertMany(add);
    console.log(result);
  }
                             //////// ACTUALIZAR USUARIO
  async function actualizarUsuario(client, filtro, nuevosValores) {
      try {
            const result = await client.db("miapp").collection("Usuario").updateOne(filtro, { $set: nuevosValores });
            console.log(`Usuario actualizado: ${result.modifiedCount} documento(s) modificado(s)`);                                       
               } catch (error) {               
                 console.error("Error al actualizar el usuario", error);     
                       }       
                       } 

          
                            //////// EJEMPLOS
    actualizarUsuario(client, { _id: "2" }, { 
      Nombre: "DANIELA", DNI: "3423a" });                  
  
  
  //   busqueda(client, {
  //   _id: "2",
  //   nombre: "Ricardo1"
  // });
  
  // addCliente(client,{
  //   _id: "134",
  //   nombre: "Ricardo1",
  //   DNI:"4323432A"
  // })

//   addClientes(client,[{
//     "_id":"454",
//     "Fecha":"08/11/22",
//     "Estado":"Enviado",
//     "IdTransportista":"7",
//     "idUsuario":"1",
//     "DireccionSalida/Destino":"C/ElmStreet to Rmb/Catalunya"
// },{
//     "_id":"5334",
//     "Fecha":"06/11/22",
//     "Estado":"En Camino",
//     "IdTransportista":"8",
//     "idUsuario":"2",
//     "DireccionSalida/Destino":"Rmb/Castell to Rmb/Catalunya"
// },{
//     "_id":"534",
//     "Fecha":"04/11/22",
//     "Estado":"Enviado",
//     "IdTransportista":"9",
//     "idUsuario":"3",
//     "DireccionSalida/Destino":"C/ElmStreet to Rmb/Castell"
// }])

  