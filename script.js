document.addEventListener("DOMContentLoaded", function () {
  const sections = {
    services: "./partials/services.html",
    about: "./partials/about.html",
    team: "./partials/experienced_team.html",
    pricing: "./partials/pricing.html",
    newsletter: "./partials/news_letter.html",
    blog: "./partials/blogs.html",
    contact: "./partials/footer.html",
  };

  Object.entries(sections).forEach(([id, url]) => {
    fetch(url)
      .then((response) => response.text())
      .then((html) => {
        document.getElementById(id).innerHTML = html;
      })
      .catch((err) => {
        console.error(`Failed to load ${url}:`, err);
      });
  });
});

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburger.innerHTML = navMenu.classList.contains("active")
    ? '<i class="fa fa-times"></i>'
    : '<i class="fa fa-bars"></i>';
});

document.querySelectorAll(".nav-menu-anchor").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    hamburger.innerHTML = '<i class="fa fa-bars"></i>';
  });
});
