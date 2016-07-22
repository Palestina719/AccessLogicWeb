var express=require('express');

var app=express();

app.set("view engine","jade");
app.use(express.static("public"));

app.get("/",function(solicitud,respuesta){
	respuesta.render("usuario");
});
app.listen(8080);
