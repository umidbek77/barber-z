// Sayt yuklanganda hero textni yumshoq paydo qilish
window.addEventListener("load", () => {
  const hero = document.querySelector(".hero-content");
  hero.style.opacity = 0;
  hero.style.transition = "opacity 1.5s ease-in-out";
  setTimeout(() => {
    hero.style.opacity = 1;
  }, 100);
});

// Mobil menyu tugmasini bosilganda menyuni ko'rsatish
const toggleBtn = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
