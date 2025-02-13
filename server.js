const express = require("express");
const app = express()
const port = 3000;

app.set("view engine", "hbs");

app.use(express.static("assets"));

// HALAMAN HOME

app.get("/", (req, res) => {
  res.render("index"); 
});

app.get("/", (req, res) => {
  res.render("blog"); 
});

app.get("/", (req, res) => {
  res.render("testimonials"); 
});

app.get("/", (req, res) => {
  res.render("Contact"); 
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