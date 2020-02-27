const express = require("express");
const layout = require("express-layout");
const app = express();

const router =  express.Router();

const middlewares = [
   layout(),
   express.static("./public")
  ];

app.use(middlewares);

app.set("views", "./app/views");
app.set("view engine", "ejs");

router.route("/")
       .get((req,res) => {
         res.send("Hello, world");
      });

router.route("/contact")
      .get((req,res)=>{
         res.render("contact");
      });

module.exports = { app, router }
