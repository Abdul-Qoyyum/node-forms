const express = require("express");
const layout = require("express-layout");
const app = express();
const router =  express.Router();

const middlewares = [
   layout()
  ];

app.use(middlewares);

app.set("views", "./app/views");
app.set("view engine", "ejs");
router.route("/contact")
      .get((req,res)=>{
         res.render("contact");
      });
