function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get("project");

  if (projectId && projects[projectId]) {
    const project = projects[projectId];
    document.getElementById("project-title").textContent =
      project.title + " - John Doe";
    document.getElementById("project-name").textContent = project.title;
    document.getElementById("project-img").src = project.imgSrc;
    document.getElementById("project-description").textContent =
      project.description;
    document.getElementById("github-link").onclick = () =>
      (location.href = project.github);
    document.getElementById("live-demo-link").onclick = () =>
      (location.href = project.liveDemo);
  } else {
    // Handle case where projectId is invalid or missing
    document.getElementById("project-detail").innerHTML =
      "<p>Project not found.</p>";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Get the container where the projects will be inserted
  const projectsContainer = document.getElementById("projects-container");

  console.log("projects ", projects);

  // Iterate over the projects object and create HTML for each project
  for (const [key, project] of Object.entries(projects)) {
    const projectElement = document.createElement("div");
    projectElement.className = "details-container-main color-container";

    projectElement.innerHTML = `
      <div class="article-container">
        <img
          src="${project.imgSrc}"
          alt="${project.title}"
          class="project-img"
          onclick="location.href='project-template.html?project=${key}'"
        />
      </div>
      <h2 class="experience-sub-title project-title">${project.title}</h2>
      <div class="btn-container">
      <button
      class="btn btn-color-2 project-btn"
      ${
        project.new_page
          ? "onclick=\"window.open('" + project.github + "', '_blank')\""
          : "onclick=\"window.open('project-template.html?project=" +
            key +
            "', '_blank')\""
      }>
      View Project
    </button>
    
    <button
      class="btn btn-color-2 project-btn"
      onclick="window.open('${project.liveDemo}', '_blank')">
      Source Code
    </button>
    
      </div>
    `;

    // Append the project element to the projects container
    projectsContainer.appendChild(projectElement);
  }
});

// Define your technical skills
const technicalSkills = {
  Programming: ["C/C++", "SQL", "Python", "JavaScript"],
  "Web technologies": [
    "HTML",
    "CSS",
    "Bootstrap",
    "Django-Drf",
    "Express.js",
    "Node.js",
    "ReactJs",
    "Git",
    "NumPy",
    "pandas",
    "jQuery",
    "AJAX",
  ],
  "Database Management": ["MySQL", "MongoDB"],
  // "Miscellaneous": ["Git", "NumPy", "pandas", "jQuery", "AJAX"]
};

// Get the experience container
const experienceContainer = document.querySelector(
  ".experience-details-container"
);

// Loop through each category of technical skills and generate the HTML
for (const category in technicalSkills) {
  const categoryContainer = document.createElement("div");
  categoryContainer.classList.add("details-container");

  const categoryTitle = document.createElement("h2");
  categoryTitle.classList.add("experience-sub-title");
  categoryTitle.textContent = category;

  const articleContainer = document.createElement("div");
  articleContainer.classList.add("article-container");

  technicalSkills[category].forEach((skill) => {
    const article = document.createElement("article");
    const img = document.createElement("img");
    img.src = "./assets/checkmark.png";
    img.alt = "Experience icon";
    img.classList.add("icon");

    const div = document.createElement("div");
    const h3 = document.createElement("h3");
    h3.textContent = skill;

    const p = document.createElement("p");
    // p.textContent = "Experienced"; // You can set the experience level dynamically here based on your needs

    div.appendChild(h3);
    div.appendChild(p);
    article.appendChild(img);
    article.appendChild(div);
    articleContainer.appendChild(article);
  });

  categoryContainer.appendChild(categoryTitle);
  categoryContainer.appendChild(articleContainer);
  experienceContainer.appendChild(categoryContainer);
}
