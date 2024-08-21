const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const blogRoutes = require("./routes/blogRoutes.js");

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

app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));

app.use(blogRoutes);

app.use((req, res) => {
  //   res.status(404).sendFile("./views/404.html", { root: __dirname });
  res.status(404).render("404");
});
