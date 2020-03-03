exports.homeRouter = (app) => {

   app.route("/")
            .get((req,res)=>{
              res.render("index");
            })
}
