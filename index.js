var express = require("express");
var app = express();

app.get("/", function(req, res){
    console.log("peticion de iinicio...");
    res.send("iniciando");
});




app.listen(3000, function( ){
    console.log("Hola Mundo...");
})