const express = require("express");
const layout =  require("express-layout");
const path = require("path");
const bodyParser = require("body-parser");

const { contactRouter } = require("./contactRouter");

const app = express();

const middlewares = [
layout(),
bodyParser.json(),
bodyParser.urlencoded({extended : false}),
express.static(path.join(__dirname,"..","..","/public"))
];

let views =  path.join(__dirname,"..","/views");

app.use(middlewares);
app.set("views", views);
app.set("view engine","ejs");

//load the routers to handle http request
contactRouter(app);

module.exports =  { app };
