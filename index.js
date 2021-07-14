import express from "express";
import { client } from "./db.js";
import cors from 'cors'

const app = express();
app.use(cors())
const port = 3000;

const pwc = client.db("sample_restaurants");

console.log("pwc is ", pwc);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/restaurants", async (_, res) => {
  const neigh = pwc.collection("neighborhoods");
  console.log('neigh is ', neigh)
  try {
    const results = await neigh.find();
    const returned = []
    await results.forEach(x => {
        returned.push(x) 
    })
    res.send(returned)
  } catch (e) {
    console.error("error while fetching", e);
  }
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
