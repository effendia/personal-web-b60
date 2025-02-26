const { Sequelize, QueryTypes } = require("sequelize");
const config = require("../config/config.json");

const sequelize = new Sequelize(config.development);

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

async function renderBlog(req, res) {
  const blogs = await sequelize.query(
    'SELECT * FROM public."Blogs" ORDER BY "createdAt" DESC',
    {
      type: QueryTypes.SELECT,
    }
  );
  // console.log(blogs);
  res.render("blog-list", { blogs: blogs });
}

async function renderBlogDetail(req, res) {
  const id = req.params.id;

  const query = `SELECT * FROM "Blogs" WHERE id = ${id}`;
  const blogYangDipilih = await sequelize.query(query, {
    type: QueryTypes.SELECT,
  });
  console.log("hasil query", blogYangDipilih[0]);

  res.render("blog-detail", { blog: blogYangDipilih[0] });
}

async function createBlog(req, res) {
  // const title = req.body.title;
  // const content = req.body.content;
  const { title, content } = req.body; //title dan content adalah properti milik req.body
  console.log("judul adalah", title);
  console.log("contentnya:", content);

  let image = "https://picsum.photos/200/150";

  let query = `INSERT INTO "Blogs" {title, content, image}
            | VALUES {'${title}','${content}', '${image}'}`;

  const newBlog = await sequelize.query(query, {
    type: QueryTypes.INSERT,
  });

  // blogs.push(newBlog);

  res.redirect("/blog"); //redirect artinya mengalihkan ke hal.blog
}

async function renderBlogEdit(req, res) {
  const id = req.params.id;

  const query = `SELECT * FROM "Blogs" WHERE id = ${id}`;

  const blogYangDipilih = await sequelize.query(query, {
    type: QueryTypes.SELECT,
  });
  console.log("hasil query", blogYangDipilih[0]);

  res.render("blog-edit", { blog: blogYangDipilih[0] });
}

async function updateBlog(req, res) {
  const id = req.params.id;
  const { title, content } = req.body;
  console.log("judul baru :", title);
  console.log("content baru :", content);

  const query = `UPDATE "Blogs"
              SET title = '${title}', content = '${content}'
              WHERE id = ${id}`;

  const updateAtResult = await sequelize.query(query, {
    type: QueryTypes.UPDATE,
  });

  console.log("result update :", updateAtResult);

  // let image = "https://picsum.photos/200/150";

  // let updatedBlog = {
  //   title: title,
  //   content: content,
  //   image: image,
  //   author: "Erwin setya",
  //   postedAt: new Date(),
  // };

  // blogs[id] = updatedBlog;

  res.redirect("/blog");
}

async function deleteBlog(req, res) {
  const id = req.params.id;

  const query = `DELETE FROM "Blogs" WHERE id = ${id}`; //tolong hapus blog yg memiliki id yg sesuai dengan id yang kita pilih

  const deleteResult = await sequelize.query(query, {
    type: QueryTypes.DELETE,
  });

  console.log("result query delete :", deleteResult);
  // blogs.splice(id, 1); // array manipulation => perubahan data pada array

  res.redirect("/blog");
}

module.exports = {
  renderBlog,
  createBlog,
  // renderBlogDetail,
  renderBlogEdit,
  updateBlog,
  deleteBlog,
};
