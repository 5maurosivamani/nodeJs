const express = require("express");

const app = express();

// Define Port 
const port = 3000;

// Request and Response 
app.get("/", (req, res)=>{
    res.send("<h1>Hellow World.. I am Express..</h1>");
});

// Contact Route 
app.get("/contact", (req, res)=>{
    res.send("<p>Contact: 5maurosivamani@gmail.com</p>");
});

// About Route
app.get("/about", (req, res)=>{
    res.send("<p>I am Sivamani, I am 2 years Experienced this developer field.</p>");
});

// Hobbies Route
app.get("/hobbies", (req, res)=>{
    res.send("<ol><li>Learning code</li><li>Thinking</li><li>Reading Books</li><li>Hearing Audio Books</li></ol>");
});

// Listen port 
app.listen(port, (err)=>{
    if(err){
        console.log("Some issues in server starting..")
    }
    console.log("Server started at " + port + "..");
});