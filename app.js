const db = require("./src/db/models/index.js")
const express = require('express')
const { response } = require("express")
const app = express()
const port = 3000

async function getTVs(){
  Products = db.sequelize.models.Product
  let response = await Products.findAll({ include: { all: true }});
  return response
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/TVs", (req, res) => {
  getTVs().then(
    (response) => console.log(response)
    );
  res.send("Nueva Ruta")
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