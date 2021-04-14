const db = require("./db/models/index.js")
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

db.sequelize
 .authenticate()
 .then(() => {
  console.log('Connection has been established successfully.')
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
 })
 .catch(err => {
  console.error('Unable to connect to the database:', err)
 })