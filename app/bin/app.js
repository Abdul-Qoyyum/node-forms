const { app, router } = require("../../server");
const port = process.env.PORT || 3000;
app.use("/contact", router);
app.listen(port, () => {
   console.log(`App is listening on port ${port}`);
   });
