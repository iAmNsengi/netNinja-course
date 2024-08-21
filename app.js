const express = require("express");

// express app
const app = express();

// registering the view engine
app.set("view engine", "ejs");

// listening for requests
app.listen(3000);

app.get("/", (req, res) => {
  res.render("index", { title: "nsengi" });
  //   res.sendFile("./views/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  //   res.sendFile("./views/about.html", { root: __dirname });
  res.render("about");
});

app.get("/blogs/create", (req, res) => {
  res.render("create");
});

app.use((req, res) => {
  //   res.status(404).sendFile("./views/404.html", { root: __dirname });
  res.status(404).render("404");
});
