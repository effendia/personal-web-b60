let blogs = [];

function addBlog (event) {
    event.preventDefault();

    let title = document.getElementById("title").value;
    let content = document.getElementById("content").value;
    let image = document.getElementById("image")

    let imageFileName = URL.createObjectURL(image.files[0]);

    let newBlog = {
        title: title,
        content: content,
        image: imageFileName,
        author: "Amelia Kulsum E",
        postedAt: new Date(),
    };

    blogs.push(newBlog);

    console.log(blogs);

    renderBlog();
}



function renderBlog () {
    let blogListElement = document.getElementById ("bloglist");

    blogListElement.innerHTML = firstBlogContant()

    for (let index = 0; index < blogs.length; index++) {
console.log(blogs [index])

     blogListElement.innerHTML +=`
      <article class="blog-item ">
        <div class="blog-item-img">
            <img src="${blogs[index].image}" alt="">
        </div>
        <div class="blog-item-text">
            <div class="blog-item-buttons">
                <button class="blog-edit-button">Edit blog</button>
                <button class="blog-post-button">Post blog</button>
            </div>
            <a href="blog-detail.html" style="text-decoration: none;">
              <h1 class="blog-item-title">
                 ${blogs[index].title}
           </h1>
        </a>
     <p>${formatDateToWIB(blogs[index].postedAt)} | ${blogs[index].author} </p>
     <p>${blogs[index].content}</p>
       <p class="blog-item-relative-time"> ${getRelativeTime(blogs[index].postedAt)}</p>  

 </div>
</article>
     `
    }
}

function firstBlogContant () {
 return `
   <article class="blog-item ">
 <div class="blog-item-img">
   <img src="assets/img/pandaProgramming.jpg" alt="blog-image">
 </div>
 <div class="blog-item-text">
     <div class="blog-item-buttons">
         <button class="blog-edit-button">Edit blog</button>
         <button class="blog-post-button">Post blog</button>
     </div>
  <a href="blog-detail.html" style="text-decoration: none;">
             <h1 class="blog-item-title">Pasar Coding Di Indonesia</h1>
         <p>21 Des 2024 14:00 wib | amelia</p>
         <p> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum  and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem .</p>
        <p class="blog-item-relative-time">${getRelativeTime (
            new Date( "Mon July 21 2024 14:15:26 GMT+0700 (Western Indonesia Time)")
        )}</p>    
       </div>
     </article>
   `;
}

function formatDateToWIB() {
    let date = new Date();
    //30 jan 2025 11:22 WIB 
    let monthList = [
         "Jan", // bukan 1 tapi 0 -> bkn nama bulan/angka bulannya tpi index (0-dst)
         "Feb", 
         "Mar", 
         "Apr", 
         "Mei",
         "Jun",
         "Jul",
         "Aug",
         "Sep",
         "Okt",
         "Nov",
         "Des",
        ];

      let day = date.getDate().toString().padStart(2, "0");
      let month = monthList [date.getMonth()];
      let year = date.getFullYear();
      console.log(year);

      let hours = date.getHours().toString().padStart(2, "0");
      let minutes = date.getMinutes().toString().padStart(2, "0");
      let formattedDate = `${day} ${month} ${year} ${hours} : ${minutes} WIB`;

      return formattedDate;
}

function getRelativeTime (postTime) {
    let now = new Date();
    console.log("waktu sekarang :",now);

  console.log("waktu user post :", postTime);

  let diffTime = now - postTime;
  console.log("selisih waktu", diffTime);

  let diffInSeconds = Math.floor( (now - postTime) / 1000);

  console.log("selisih detik", diffInSeconds);

  if(diffInSeconds < 60 ) {
  return `${diffInSeconds} seconds ago`;
}

let diffInMinutes = Math.floor(diffInSeconds / 60);

if (diffInMinutes <60) {
return `${diffInMinutes} minutes ago`
}

let diffInHours = Math.floor(diffInMinutes / 60);

if (diffInHours <24) {
    return `${diffInHours} hours ago`;
}

let diffInDays = Math.floor(diffInHours / 24);

if (diffInDays < 30);{
    return  `${diffInDays} days ago`;
}

let diffInMonth = Math.floor(diffInDays /30);
return `${diffInMonth} month${diffInMonth === 1 ? "": "s"} ago`;
}
