const express = require("express")

const bodyParser = require("body-parser")

const app = express()

require('dotenv').config()

const port = process.env.port || 5000


app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/list.html")
})



app.listen(port, ()=>{
    console.log("Server running in port " + port);
})