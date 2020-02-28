const express = require("express");
const layout =  require("express-layout");
const path = require("path");
const app = express();

const middlewares = [
layout(),
express.static(path.join(__dirname,"..","..","/public"))
];

app.use(middlewares);

//const router = express.Router();

app.route("/contact")
            .get((req,res) => {
             res.send("Hello, world.");
            })

module.exports =  { app };
