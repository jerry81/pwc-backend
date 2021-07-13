
import express from 'express'
import {client} from './db.js'

const app = express()
const port = 3000
console.log('client is ', client)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})