const express = require('express')
const userRouter = require('./routes/user')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()
const port = process.env.PORT || 3000

const db = require('./dbClient')
db.on("error", (err) => {
  console.error(err)
})

app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())


// Route principale
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'index.html'))
})

// Route utilisateur
app.use('/user', userRouter)

const server = app.listen(port, (err) => {
  if (err) throw err
  console.log("Server listening on port " + port)
})

module.exports = server
