const express = require("express");
const Blog = require("../models/blog");

const router = express.Router();

// mongoose and mongo sandbox routes
router.get("/add-blog", (req, res) => {
  const blog = new Blog({
    title: "new blog added",
    snippet: "about my blog",
    body: "more about my blog",
  });
  blog
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
});

router.get("/all-blogs", (req, res) => {
  Blog.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => console.log(err));
});

router.get("/single-blog", (req, res) => {
  Blog.findById("66c6031aefb64aa269e89a8f")
    .then((data) => {
      res.send(data);
    })
    .catch((err) => console.log(err));
});

router.get("/", (req, res) => {
  res.redirect("/blogs");
  //   const blogs = [
  //     {
  //       title: "Yoshi finds eggs",
  //       snippet: "Lorem ipsum dolor sit amet consectetur",
  //     },
  //     {
  //       title: "Mario finds stars",
  //       snippet: "Lorem ipsum dolor sit amet consectetur",
  //     },
  //     {
  //       title: "How to defeat browser",
  //       snippet: "Lorem ipsum dolor sit amet consectetur",
  //     },
  //   ];
  //   res.render("index", { blogs });
  //   //   res.sendFile("./views/index.html", { root: __dirname });
});

router.get("/about", (req, res) => {
  //   res.sendFile("./views/about.html", { root: __dirname });
  res.render("about");
});

router.get("/blogs", (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((data) => {
      res.render("index", { blogs: data });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/blogs", (req, res) => {
  const newBlog = new Blog(req.body);

  newBlog
    .save()
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => console.log(er));
});

router.get("/blogs/:id", (req, res) => {
  const { id } = req.params;
  Blog.findById(id)
    .then((result) => {
      res.render("details", { blog: result, title: "Created a new blog" });
    })
    .catch((err) => console.log(err));
});

router.delete("/blogs/:id", (req, res) => {
  const { id } = req.params;
  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/blogs" });
    })
    .catch((err) => console.log());
});

router.get("/blogs/create", (req, res) => {
  res.render("create");
});

module.exports = router;
