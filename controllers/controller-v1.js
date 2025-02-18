let blogs = [
  {
    title: "Pasar Coding Di Indonesia",
    content:
      "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem.",
    image: "/img/pandaProgramming.jpg",
    author: "Amelia",
    postedAt: new Date("Mon July 21 2024 14:15:26 (Western Indonesia Time)"),
  },
  {
    title: "Blog Judul Ke 2",
    content:
      "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem.",
    image: "/img/pandaProgramming2.jpg",
    author: "Ameliaaa",
    postedAt: new Date(
      "Mon July 28 2024 20:15:26 GMT+0700 (Western Indonesia Time)"
    ),
  },
];

function renderBlog(req, res) {
  // console.log(blogs);
  res.render("blog-list", { blogs: blogs });
}

function renderBlogDetail(req, res) {
  const id = req.params.id;
  const blogYangDipilih = blogs[id];
  console.log(blogYangDipilih);

  res.render("blog-detail", { blog: blogYangDipilih });
}

function renderCreateBlog(req, res) {
  res.render("blog-create");
}

function postBlog(req, res) {
  // const title = req.body.title;
  // const content = req.body.content;
  const { title, content } = req.body; //title dan content adalah properti milik req.body
  console.log("judul adalah", title);
  console.log("contentnya:", content);

  let image = "https://picsum.photos/200/150";

  let newBlog = {
    title: title,
    content: content,
    image: image,
    author: "Amelia Kulsum E",
    postedAt: new Date(),
  };

  blogs.push(newBlog);

  res.redirect("/blog"); //redirect artinya mengalihkan ke hal.blog
}

function renderBlogEdit(req, res) {
  const id = req.params.id;
  const blogYangDipilih = blogs[id];
  console.log(blogYangDipilih);

  res.render("blog-edit", { blogYangDipilih, index: id, test: "okeee" });
}

function updateBlog(req, res) {
  const id = req.params.id;
  const { title, content } = req.body;
  console.log("judul baru :", title);
  console.log("content baru :", content);

  let image = "https://picsum.photos/200/150";

  let updatedBlog = {
    title: title,
    content: content,
    image: image,
    author: "Erwin setya",
    postedAt: new Date(),
  };

  blogs[id] = updatedBlog;

  res.redirect("/blog");
}

function deleteBlog(req, res) {
  const id = req.params.id;
  const blogYangDipilih = blogs[id];
  console.log(blogYangDipilih);

  blogs.splice(id, 1); // array manipulation => perubahan data pada array

  res.redirect("/blog");
}

module.exports = {
  renderBlog,
  postBlog,
  renderBlogDetail,
  renderCreateBlog,
  renderBlogEdit,
  updateBlog,
  deleteBlog,
};
