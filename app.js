const express = require("express")
const app = express()
const port = 3000

app.get("/", (req, res) => {
	res.send("Hello Manu")
})
app.get("/demo", (req, res) => {
	res.setHeader("X-fullStack","I love code")
	res.status(418)
	res.send("I love coffee")
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
