const hamburger = document.querySelector('.hamburger');

const menu = document.querySelector('.menu');


hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');

  menu.classList.toggle('show');
});

// Get current page filename (like index.html, products.html)
const currentPage = window.location.pathname.split("/").pop();

// Select all navbar links
const navLinks = document.querySelectorAll(".pages ul li a");

navLinks.forEach(link => {
  // Compare link href with current page
  if (link.getAttribute("href").includes(currentPage)) {
    link.classList.add("active");
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const categoryBtn = document.querySelector(".category-btn");
  const category = document.querySelector(".category");
  if (categoryBtn) {
    categoryBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      category.classList.toggle("active");
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", () => {
      category.classList.remove("active");
    });
  }
});

let loginSignupBtn = document.getElementById("login-signup-btn")
if (loginSignupBtn) {
  loginSignupBtn.addEventListener("click", () => {
    window.location.href = 'login-signup.html'
    console.log("click")
  })
}