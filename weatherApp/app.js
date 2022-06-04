const express = require("express");

const app = express();

const port = 3000;

const https = require("https");

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/index.html");    
});

app.post("/", (req, res)=>{

    var city = req.body.city;
    var apiKey = "23853847d0739e6a53f0406116a6bdfa";
    var unit = "metric";

    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=" + unit;
    https.get(url, (response)=>{
        response.on("data", function(data){
            var parseData = JSON.parse(data);
            var weather = parseData.weather[0].description;
            var temp = parseData.main.temp;
            var icon = parseData.weather[0].icon;
            var iconSrc = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
            var html ="<h3> Temprature is: " + temp + " deg celcius</h3>";
            html +="<h1> Weather is : " + weather + " </h1>";
            html +="<img src='" + iconSrc + "'>";
            res.send(html)
        });
    });

})






app.listen(port, (err)=>{
    if(err){
        console.log(err);
    }
    console.log(`Server running on port ${port}.`);
})