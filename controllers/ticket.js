import { client } from "../db.js";
import mongo from 'mongodb'

const pwc = client.db("pwc");

/* TODO: TEST */

export default {
  async create(req, res) {
    const tc = pwc.collection("tickets");
    console.log("Got body:", req.body);
    try {
      const results = await tc.insert(req.body);
      res.send(results);
    } catch (e) {
      console.error("error while fetching", e);
      res.sendStatus(500);
    }
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
  },
  async list(req, res) {
    const {query} = req
    console.log('query', query)
    const tc = pwc.collection("tickets");
    try {
      const results = await tc.find();
      const returned = [];
      await results.forEach(x => {
        returned.push(x);
      });
      res.send(returned);
    } catch (e) {
      console.error("error while fetching", e);
    }
  },
  /**
   * PATCH /ticket/{id}?status={DRAFT|SUBMITTED|ASSIGNED|PENDING|COMPLETED} - update status of ticket
   * 
   * @param {*} req 
   * @param {*} res 
   */
  async updateStatus(req, res) {
    const id = req.params.id
    const status = req.query.status
    console.log('id is ', id)
    console.log('status is ', status)
  }
};
