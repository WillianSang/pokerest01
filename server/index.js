
const express = require("express")
const db = require("../database/conection")

class Server {
  constructor() {
    this.app = express()
    this.port = process.env.PORT
    this.router()
    this.database()
  }

  database() {
    db.authenticate()
      .then(() => console.log(`conection to dababase ok`))
      .catch(err => console.log(err))
  }

  router() {
    this.app.get('/', (req, res) => {
      res.send(`endpoint principal `)
    })
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`server listening in port: ${this.port}`)
    })
  }

}

module.exports = Server