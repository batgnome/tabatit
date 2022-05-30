const express = require("express");
const bodyParser = require("body-parser");
const { sendFile } = require("express/lib/response");

const app = express();
const port = 4000;
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

app.get("/", function(req,res) {
    res.sendFile(__dirname + "/index.html");
})

app.listen(port, function(req,res) {
    console.log("server is running on port " + port)
});