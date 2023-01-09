const express = require('express')
const app = express()
const cors = require('cors')
const port = 8080

const {db} = require('./db.js')


app.use(cors())
app.get('/', (req, res) => {
  res.send('docker is working')
})

app.get('/friends', async (req, res) => {
  const query = "SELECT * FROM friends";
  const output = await db.query(query);
  console.log('THIS IS OUTPUT', output.rows)
  res.send(output.rows)
})

app.listen(port, () => {
  console.log(`listening now on port ${port}`);
});