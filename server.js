const express = require("express");
const ejs = require("ejs");
const expressLayout = require("express-ejs-layouts");
const path = require("path");
const app = express();

//giving access to public  folder and setting up assets
app.use(express.static(__dirname + "/public"));

//view engine setup and laayout folder set
app.use(expressLayout);

//set template engine

app.set("views", path.join(__dirname, "/resources/views"));
app.set("view engine", "ejs");

require("./routes/web")(app);

const PORT = process.env.PORT || 8000;

const server = app.listen(PORT, () => {
  console.log(`Server listening to port ${PORT}...`);
});
