var express = require('express');
var bodyParser = require('body-parser');

const app = express();


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.get ('/',(req, res)=>{
    res.status(200).send({message:"exito get"});
})


app.listen(3000,()=>{
    console.log("escuchando en http://localhost:3000");
})