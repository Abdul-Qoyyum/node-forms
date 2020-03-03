const express = require("express");
const layout =  require("express-layout");
const cookieParser = require("cookie-parser");
const path = require("path");
const bodyParser = require("body-parser");
const flash = require("express-flash");
const helmet = require("helmet");
const session = require("express-session");


const { contactRouter } = require("./contactRouter");
const { homeRouter } = require("./homeRouter");
const app = express();

const middlewares = [
helmet(),
layout(),
flash(),
cookieParser(),
session({
  secret: 'super-secret-key',
  key : 'super-secret-cookie',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge : 60000 }
}),
bodyParser.json(),
bodyParser.urlencoded({extended : false}),
express.static(path.join(__dirname,"..","..","/src"))
];


let views =  path.join(__dirname,"..","/views");

app.use(middlewares);
app.set("views", views);
app.set("view engine","ejs");

//load the routers to handle http request
contactRouter(app);
homeRouter(app);


module.exports =  { app };
