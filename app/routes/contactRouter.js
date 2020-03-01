const {check, validationResult } = require("express-validator");

exports.contactRouter = app => {

app.route("/contact")
            .get((req,res) => {
             res.render("contact",{
              errs : {
               message : "" ,
               email : ""
                 }
              });
            })
            .post([
                check('message')
                .isLength({min : 5})
                .withMessage("Enter your message"),
                check('email')
                .isEmail()
                .trim()
                .bail()
                .normalizeEmail()
                .withMessage("Invalid Email")
              ],(req,res) => {
      const error = validationResult(req);
   if(!error.isEmpty()){
      const { errors } = error;
      const errs = {};

    errors.forEach(err => {
           errs[err.param] = err.msg
             });

     return res.render("contact",{ errs });

                }

     res.send("Thanks for your feedback.");
            })

}
