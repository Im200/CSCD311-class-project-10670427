var express = require ('express');

var app= express();
var bodyParser = require('body-parser');
var mongoose =require ('mongoose');

require('dotenv/config');

app.use(bodyParser.json());


app.get('/',function(req,res)
{
    res.sendfile('frontend.html');
  

});

app.get('/hall_application',function(req,res)
{
    res.sendfile('hall_application.html');

});

app.listen(3000,()=>
{
    console.log("Server Started");
});
