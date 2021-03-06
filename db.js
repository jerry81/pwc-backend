import mongodb from "mongodb";
const { MongoClient } = mongodb;
const DB_PWD = process.env.PWC_DB_PWD;
console.log("db pwd ", DB_PWD);
const uri = `mongodb+srv://pwc:${DB_PWD}@jerrycluster0.u3wv1.mongodb.net/pwc?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

async function c() {
  try {
    await client.connect();
    console.log('connected!')
  } catch (e) {
    console.error("error while connecting", e);
    console.log('retrying')
    /* TODO use ORM to handle this */
    await c()
  } finally {
    // await client.close();
  }
}

await c()

export { client };

/* TODO: change this to singleton to not use so many connections to db */
