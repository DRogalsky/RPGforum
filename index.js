const express = require('express')
const app = express()
const port = 3000
const path = require('path')

//app.use("/", require("./routes/userRoutes.js"))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "./public/login.html"));
})

app.listen(port, () => {
    console.log(`RPGforum listening on port ${port}`)
})