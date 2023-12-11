var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var passport=require("passport");
var methodOverride= require("method-override");
var path = require('path');


app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname+"/public")));
app.use(express.static(path.join(__dirname+"/views")));

app.use(methodOverride("_method"));

app.get("/", function(req, res){
	res.render("index");
});
app.get("/login", function(req, res){
	res.render("login");
});
app.get("/signup", function(req, res){
		res.render("signup");
});
app.get("/TeamPage", function(req,res){
	res.render("TeamPage");
});
app.get("/Contact", function(req,res){
	res.render("Contact");
});
app.get("/services", function(req,res){
	res.render("services");

});
app.get("/AboutUs", function(req,res){
	res.render("AboutUs");

});

app.post("/signup", function(req, res){
	res.redirect("/Home");
});
app.post("/login", function(req, res){
	res.redirect("/Home");
});
app.get("/Home", function(req, res){
	res.sendFile(path.join(__dirname + '/MapAndLoc.html'));
});

app.listen(3000, function(){
    console.log("Safe Journey Started ~(^_^)~");

});
