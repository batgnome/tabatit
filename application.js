
const express = require('express');

const app = express();
const port = 3000;

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/tab.html");
    
}); 
app.get('/assets/stylesheet.css', function(req, res) {
    res.sendFile(__dirname + "/assets/stylesheet.css");
    
}); 

app.get('/index.js', function(req, res) {
    res.sendFile(__dirname + "/index.js");
}); 
app.get('/node_modules/paper/dist/paper-full.js', function(req, res) {
    res.sendFile(__dirname + "/node_modules/paper/dist/paper-full.js");
}); 


app.listen(port, function() {
    console.log("server started on port:"+port);
});

