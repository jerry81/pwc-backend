import express from "express";
// import { client } from "./db.js";
import cors from 'cors'
import bodyParser from 'body-parser'
import ticket from './controllers/ticket.js'

const app = express();
app.use(cors())
app.options('*', cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

const port = 3000;

// const pwc = client.db("pwc");

/* TODO: use router */

app.get("/", (req, res) => {
  console.log('debug statement ')
  res.send("Hello World!");
});

app.post('/ticket', ticket.create
/*   console.log('Got body:', req.body);
  const tc = pwc.collection("tickets");
  try {
    const results = await tc.insert(req.body)
    res.send(results)
  } catch (e) {
    console.error("error while fetching", e);
    res.sendStatus(500)
  } */
  /*  model for ticket
    {
      status,
      assignee,
      subject,
      dueDate,
      type: "Wishlist", "Bug",
      territory: "PwC Mekong", "PwC Shanghai",
      dm_version,
      description
    }
  */
  
);

/* app.get("/restaurants", async (_, res) => {
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
}); */

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
