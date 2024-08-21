const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

// express app
const app = express();

// connecting to mongodb
const dbURI =
  "mongodb+srv://nsengi:o8JmHraOxplTq8zH@cluster0.gcyna.mongodb.net/blog?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(dbURI)
  .then((res) => console.log("connected to db"))
  .catch((err) => console.log(err));

// registering the view engine
app.set("view engine", "ejs");

// listening for requests
app.listen(3000);

// middleware & staticfiles
app.use(express.static("public"));

app.use(morgan("dev"));

app.get("/", (req, res) => {
  const blogs = [
    {
      title: "Yoshi finds eggs",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "Mario finds stars",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "How to defeat browser",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
  ];
  res.render("index", { blogs });
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
