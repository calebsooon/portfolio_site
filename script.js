document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("[data-nav-link]");
    const pages = document.querySelectorAll("[data-page]");
  
    navLinks.forEach((link, index) => {
      link.addEventListener("click", () => {
        // Deactivate all nav links and hide all pages
        navLinks.forEach(btn => btn.classList.remove("active"));
        pages.forEach(page => page.classList.remove("active"));
  
        // Activate the clicked link and its corresponding page
        link.classList.add("active");
        pages[index].classList.add("active");
      });
    });
  });
  
