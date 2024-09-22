import cors  from "cors"

export const createExpressApp = (app) => {
  app.use(
    cors({
      origin: "http://localhost:1234",
    })
  )
  app.get("/", (req, res) => {
    res.send("Welcome to katzaefet server!")
  })
}

export default { createExpressApp }
