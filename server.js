const express = require("express");
const app = express()
const port = 3000;
const hbs = require("hbs");
const path = require('path')

const {formatDateToWIB, getRelativeTime } = require('./utils/time')

app.set("view engine", "hbs");

app.set("views", path.join(__dirname, "./views")); //c:/ my computer/documents/../../progres 1/views
//dirname itu mengacu k folder web kita

app.use(express.json())
app.use(express.urlencoded({extended: true }));  // supaya isa ngambil data dri setiap input
 
app.use(express.static("assets"));

hbs.registerPartials(__dirname +"/views/partials", function (err) {});
hbs.registerHelper("equal", function (a,b) {
  return a === b;
});
hbs.registerHelper("formatDateToWIB", formatDateToWIB)
hbs.registerHelper("getRelativeTime", getRelativeTime)

let blogs = [];

// HALAMAN HOME

app.get("/", (req, res) => {
  res.render("index"); 
});


app.get("/blog/:id", (req, res) => {
  res.render("blog-detail"); 
});

app.get("/blog-create", (req, res) => {
  res.render("blog-create"); 
});

app.get("/blog", (req, res) => {
  console.log(blogs);
  res.render("blog-list", {blogs: blogs}); 
});


app.get("/testimonials", (req, res) => {
  res.render("testimonials"); 
});


app.get("/contact", (req, res) => {
  res.render("contact"); 
});

// SUBMIT NEW BLOG
app.post("/blog-create", (req, res) => {
// const title = req.body.title;
// const content = req.body.content;
const {title,content} = req.body; //title dan content adalah properti milik req.body
console.log("judul adalah", title);
console.log("contentnya:", content);

let image = "https://picsum.photos/200/150"

let newBlog = {
  title: title,
  content: content,
  image: image,
  author: "Amelia Kulsum E",
  postedAt: new Date(),
};

blogs.push(newBlog);

res.redirect("/blog");
});

// REQUEST PARAMS
app.get("/about/:id", (req, res) => {
  const id = req.params.id
  res.send(`Hello ini halaman tentang ${id}`);
});

// REQUEST QUERY
app.get("/blog", (req, res) => {
  // const title = req.query.title
  // const author = req.query.author 
  const {title, author, } = req.query
  res.send(`ini halangan blog ${title} dengan author${author}`);
});

app.listen(port, () => {
  console.log(`My personal web app listening on port ${port}`)
});