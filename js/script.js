// js/script.js
document.addEventListener("DOMContentLoaded", () => {
  // Mobile Navigation Toggle
  const toggle = document.querySelector("#menu-toggle");
  const nav = document.querySelector("nav ul");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  }

  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  });

  // Contact Form Validation
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", (e) => {
      const email = form.querySelector("input[type='email']");
      if (email && !email.value.includes("@")) {
        e.preventDefault();
        alert("⚠️ Please enter a valid email address.");
      }
    });
  }

  // Dark Mode Toggle
  const toggleDark = document.querySelector("#dark-toggle");
  if (toggleDark) {
    toggleDark.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
    });
  }
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }

  // User Ratings
  const ratingForm = document.querySelector("#rating-form");
  if (ratingForm) {
    ratingForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const rating = document.querySelector("#rating").value;
      const feedback = document.querySelector("#feedback").value;
      alert(`⭐ Thanks for your rating: ${rating}/5\nYour feedback: "${feedback}"`);
      ratingForm.reset();
    });
  }
});
