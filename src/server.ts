import express from "express"

const app = express()

app.get("/sum/:num1/:num2", (req, res) => {
  let num1 = Number(req.params.num1)
  let num2 = Number(req.params.num2)
  let sum = num1 + num2
  return res.send(`<h1>la somma di ${num1} e ${num2} è ${sum}</h1>`)
})

app.listen(3000, () => {
  console.log("il server è partito")
})