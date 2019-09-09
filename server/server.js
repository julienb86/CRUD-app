const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const routesProducts = require("./routes/products");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use("/api", routesProducts);

module.exports = app;
