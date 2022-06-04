const express = require("express");

const app = express();

const bodyParser = require("body-parser");

const port = 3000;

const staticPath = __dirname + "/public/"

app.use(express.static("assets/"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    // res.send("Hello World..");
    res.sendFile(staticPath + "index.html");
});

app.post("/", (req, res) => {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;

    res.send("The result is: " + result);
});

app.get("/bmiCalculator", (req, res) => {
    // res.send("Hello World..");
    res.sendFile(staticPath + "bmiCalculator.html");
});

app.post("/bmiCalculator", (req, res) => {
    var height = Number(req.body.height);
    var weight = Number(req.body.weight);
    var bmi = (weight/Math.pow((height/100),2)).toFixed(2);
    res.send("<link rel=\"stylesheet\" href=\"style.css\"><h1 class='text-center output'>Your BMI is <span class='value'>" + Math.round(bmi) + "</span></h1>");
});

app.listen(port, (err) => {
    console.log("Server is started at " + port + "...");
});