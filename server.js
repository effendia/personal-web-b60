const express = require("express");
const app = express();
const hbs = require("hbs");
const path = require("path");
const methodOverride = require("method-override");

// const { updateBlog } = require("./controllers/controller-v1");

const {
  renderBlog,
  renderBlogCreate,
  renderBlogDetail,
  renderBlogEdit,
  updateBlog,
  deleteBlog,
  createBlog,
} = require("./controllers/controller-v2");

const { formatDateToWIB, getRelativeTime } = require("./utils/time");

const port = 3000;

app.set("view engine", "hbs"); // express tolong set view engine dri apk saya untuk menggunkn hbs

app.set("views", path.join(__dirname, "./views")); //c:/ my computer/documents/../../progres 1/views
//dirname itu mengacu k folder web kita

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // supaya isa ngambil data dri setiap input
app.use(express.static("assets"));
app.use(methodOverride("_method"));

hbs.registerPartials(__dirname + "/views/partials", function (err) {});
hbs.registerHelper("equal", function (a, b) {
  return a === b;
});
hbs.registerHelper("formatDateToWIB", formatDateToWIB);
hbs.registerHelper("getRelativeTime", getRelativeTime);

// HALAMAN HOME

app.get("/", (req, res) => {
  res.render("index");
});

//contact
app.get("/contact", (req, res) => {
  res.render("contact");
});

//testimonials
app.get("/testimonials", (req, res) => {
  res.render("testimonials"); //tolong kirimkan respons yang isinya di dlm
});

app.get("/project", (req, res) => {
  res.render("project");
});

app.get("/project-detail", (req, res) => {
  res.render("project-detail");
});

//blog list
app.get("/blog", renderBlog); //(app ketika saya buka /blog lkukn renderblog)

//blog detail
app.get("/blog/:id", renderBlogDetail);

// render  create blog page
app.get("/blog-create", renderBlogCreate);

//render edit blog
app.get("/blog-edit/:id", renderBlogEdit); //buka halaman

//submit/save edited
app.patch("/blog-update/:id", updateBlog); //submit untuk update

//DELETE EXISTING BLOG
app.delete("/blog/:id", deleteBlog);

// SUBMIT NEW BLOG
app.post("/blog-create", createBlog);

// REQUEST PARAMS
app.get("/about/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Hello ini halaman tentang ${id}`);
});

// REQUEST QUERY
app.get("/blog", (req, res) => {
  // const title = req.query.title
  // const author = req.query.author
  const { title, author } = req.query;
  res.send(`ini halangan blog ${title} dengan author${author}`);
});

app.get("*", (req, res) => {
  res.render("page-404");
});

app.listen(port, () => {
  console.log(`My personal web app listening on port ${port}`);
});
