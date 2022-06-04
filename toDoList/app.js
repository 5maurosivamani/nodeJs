const express = require("express")
const bodyParser = require("body-parser")
const ejs = require("ejs")

const app = express()

require('dotenv').config()

const port = process.env.port || 5000

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static("public"))

let items = ["Meditation", "Exercise"];

var option = {
    weekday: 'long', 
    month: 'long', 
    day: 'numeric'
}
let today =new Date();

let day = today.toLocaleDateString("en-US", option) 

app.get("/", (req, res)=>{ 

    res.render("list", {kindOfDay: day, newItem:items})
    
})

app.post("/", (req, res)=>{
    item = req.body.newItem
    items.push(item)

    res.redirect("/")
})



app.listen(port, ()=>{
    console.log("Server running in port " + port);
})