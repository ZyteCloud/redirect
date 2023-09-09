const package = require("../package.json");
const express = require("express");
const path = require("path");
require("../.license/license")("MIT", {
  author: package.author,
  date: new Date().getFullYear(),
});

const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "public/views"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(3000, () => {
  console.log("Redirect server is now online.");
});
