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
