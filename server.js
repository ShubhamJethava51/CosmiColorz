const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const expresssLayout = require("express-ejs-layouts");
const ejs = require("ejs");

const app = express();
const PORT = 3000;
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 1;

//databse connection

const dbUserName = "cosmicolorzstore";
const dbPassword = "SMS20022001";
const dbCluster = "CosmiColorz";
const uri = `mongodb+srv://${dbUserName}:${dbPassword}@cosmicolorz.mxtyhrn.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(uri);
const connection = mongoose.connection;
connection
  .once("open", () => {
    console.log("Database Connected!");
  })
  .on("error", (err) => {
    console.log(`Connection to database failed because of: ${err}`);
  });

app.use(express.static(__dirname + "/public"));

//view engine setup and layout folder set

app.use(expresssLayout);

//set template engine

app.set("views", path.join(__dirname, "/resources/views"));
app.set("view engine", "ejs");

//routing
require("./routes/web")(app);

const server = app.listen(PORT, () => {
  console.log(`Server responsing on port ${PORT}...`);
});
