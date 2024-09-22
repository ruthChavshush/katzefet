import dotenv from "dotenv"
dotenv.config({
  path: ".env",
})

import express from "express"
import { createExpressApp } from "./app.js"

const createServer = () => {
  const app = express()

  const { PORT } = process.env

  createExpressApp(app)

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
  })
}

createServer()
