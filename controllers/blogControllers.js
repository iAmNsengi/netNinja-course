const Blog = require("../models/blog");

// blog_index
const blog_index = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((data) => {
      res.render("index", { blogs: data });
    })
    .catch((err) => {
      console.log(err);
    });
};
const blog_post = (req, res) => {
  const newBlog = new Blog(req.body);

  newBlog
    .save()
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => console.log(er));
};

const blog_individual = (req, res) => {
  const { id } = req.params;
  Blog.findById(id)
    .then((result) => {
      res.render("details", { blog: result, title: "Created a new blog" });
    })
    .catch((err) => console.log(err));
};

const blog_create = (req, res) => {
  res.render("create");
};

const blog_delete = (req, res) => {
  const { id } = req.params;
  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/blogs" });
    })
    .catch((err) => console.log());
};

module.exports = {
  blog_index,
  blog_post,
  blog_individual,
  blog_create,
  blog_delete,
};
