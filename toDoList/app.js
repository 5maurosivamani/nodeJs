const express = require("express")
const bodyParser = require("body-parser")
const ejs = require("ejs")

const app = express()

require('dotenv').config()

const port = process.env.port || 5000

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static("public"))

const items = ["Meditation", "Exercise"];

const workList = [];

const date = require(__dirname + "/date.js")

const day = date.getDate()

app.get("/", (req, res) => {

    res.render("list", { listTitle: day, itemsList: items })

})

app.post("/", (req, res) => {
    const item = req.body.newItem

    if (req.body.button == "Work List") {
        workList.push(item)
        res.redirect("/work")
    } else {
        items.push(item)
        res.redirect("/")
    }

})

app.get("/work", (req, res) => {

    res.render("list", { listTitle: "Work List", itemsList: workList })

})


app.get("/about", (req,res)=>{
    res.render("about")
})

app.listen(port, () => {
    console.log("Server running in port " + port);
})