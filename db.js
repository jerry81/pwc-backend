import mongodb from 'mongodb'
const {MongoClient} = mongodb
const DB_PWD = process.env.PWC_DB_PWD
console.log('db pwd ', DB_PWD)
const uri = `mongodb+srv://pwc:${DB_PWD}@jerrycluster0.u3wv1.mongodb.net/pwc?retryWrites=true&w=majority`; 
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

export { client }