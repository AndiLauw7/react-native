const express = require("express")

const router = require("./src/routes")

const app = express()

const port = 5000

const cors = require("cors")

app.use(express.json())

app.use(cors())

app.use('/api/v1', router)

app.listen(port, ()=> console.log(`listening on port ${port}!`))

