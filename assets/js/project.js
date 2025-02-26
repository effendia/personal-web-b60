let project = [];

function addProject(event) {
  event.preventDefault();

  let title = document.getElementById("title").value;
  let content = document.getElementById("content").value;
  let image = document.getElementById("image");

  let imageFileName = URL.createObjectURL(image.files[0]);

  let projects = {
    title: title,
    content: content,
    image: imageFileName,
  };

  console.log("blog yg bru d buat:", project);
}
function renderProject() {
  let projectListElement = document.getElementById("projectList");

  projectListElement.innerHTML = firstProjectContent();
}
renderProject();

function firstProjectContent() {
  return `
         <section id="projectList" class="projectList" style="width: 900%; margin: 30px auto; display: flex; gap: 40px;" >

          <div class="project-grid" 
          style= "width: 25%; border: 1px solid #aaa; padding :15px; box-sizing: border-box; border-radius: 5px; box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.4);
          ">
         <img src="/img/project1.jpeg" alt="project 1" style="width: 100%; border-radius: 5px;">
          <h3 style=" font-size: 18px;  margin: 10px 0 5px; color: #333;
              ">Mobile App - 2024</h3>

          <p style=" font-size: 14px; color: #a3a2a2;">Durasi 1 bulan</p>
          <p style="  font-size: 14px;  color: #535252;
          ">App that used for dumbways student, it was deployed and Happy download App that used for dumbways student, it was deployed and Happy download</p>
          <div style="margin: 10px 0; font-size: 20px;" class="icons">
              <a href="">
                  <img src="/img/playstore.png"  style=" width: 30px ; text-decoration: none; margin-right: 10px;"  alt="">
              </a>
              <a href="">
                  <img src="/img/icons8-android-50.png" style=" width: 30px ; text-decoration: none; margin-right: 10px;" alt="">
              </a>
              <a href="">
                  <img src="/img/icons8-java-50.png" style=" width: 30px ; text-decoration: none; margin-right: 10px;"alt="">
              </a>
          
          </div>
    <button class="buttons-pro" style="background: black; color: white; border: none;
        padding: 3px 17%; border-radius: 5px; cursor: pointer;
         ">Edit</button>
   <button class="buttons-pro" style="background: black; color: white; border: none;    padding: 3px 15%; border-radius: 5px; cursor: pointer; margin-left: 17px;
       ">Delete</button>
              </div> 

      </div>
      </section>

        `;
}
