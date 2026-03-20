const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('RPGforum')
})

app.listen(port, () => {
    console.log(`RPGforum listening on port ${port}`)
})