import express from "express";
import { client } from "./db.js";
import cors from 'cors'

const app = express();
app.use(cors())
app.options('*', cors())
const port = 3000;

const pwc = client.db("sample_restaurants");


app.get("/", (req, res) => {
  console.log('debug statement ')
  res.send("Hello World!");
});

app.get("/restaurants", async (_, res) => {
  const neigh = pwc.collection("neighborhoods");
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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
