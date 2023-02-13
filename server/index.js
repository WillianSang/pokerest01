
const express = require("express")

class Server {
  constructor() {
    this.app = express()
    this.port = process.env.PORT
    this.router()
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