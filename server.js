const {app} = require("./app/routes");

app.set("views", "./app/views");
app.set("view engine", "ejs");

app.use((req, res) => {
      res.status(404).send("Page not found.");
   });

app.use((err, req, res) => {
      res.status(500).send("Oh, something got broken !, We are working on it.");
});

module.exports = { app }
