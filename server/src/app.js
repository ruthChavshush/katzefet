export const createExpressApp = (app) => {
  app.get("/", (req, res) => {
    res.send("Welcome to katzaefet server!")
  })
}

export default { createExpressApp }
