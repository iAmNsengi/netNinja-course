const express = require("express");
const blogController = require("../controllers/blogControllers");
const router = express.Router();

// mongoose and mongo sandbox routes
// router.get("/add-blog", (req, res) => {
//   const blog = new Blog({
//     title: "new blog added",
//     snippet: "about my blog",
//     body: "more about my blog",
//   });
//   blog
//     .save()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => console.log(err));
// });

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

router.get("/blogs", blogController.blog_index);

router.post("/blogs", blogController.blog_post);

router.get("/blogs/:id", blogController.blog_individual);

router.get("/blogs/create", blogController.blog_create);

router.delete("/blogs/:id", blogController.blog_delete);

module.exports = router;
