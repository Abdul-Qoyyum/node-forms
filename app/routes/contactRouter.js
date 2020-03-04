const {check, validationResult, matchedData } = require("express-validator");
const csrf = require("csurf");

exports.contactRouter = app => {

let csrfProtection = csrf({cookie : true });

app.route("/contact")
            .get(csrfProtection,(req,res) => {
             res.render("contact",{
              errs : {
               message : "",
               email : ""
                 },
               csrfToken : req.csrfToken(),
               data : {
                message : "",
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
              ],csrfProtection,(req,res) => {
      const error = validationResult(req);
   if(!error.isEmpty()){
      const { errors } = error;
      const errs = {};

    errors.forEach(err => {
           errs[err.param] = err.msg
             });

     return res.render("contact",{
           errs,
           csrfToken : req.csrfToken(),
           data : req.body
 });

                }

    const info = matchedData(req);
    //grab the user details and use it to send message
    console.log(info);

    req.flash("success","Thanks for your feedback");
    res.redirect("/");
            })

}
