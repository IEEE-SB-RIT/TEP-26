document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  const overlay = document.getElementById("overlay");
  const closeButton = document.getElementById("closeButton");
  const navLinks = mobileMenu ? mobileMenu.querySelectorAll("a") : [];

  function toggleMenu() {
    hamburger?.classList.toggle("active");
    mobileMenu?.classList.toggle("active");
    overlay?.classList.toggle("active");
    document.body.style.overflow = hamburger?.classList.contains("active")
      ? "hidden"
      : "auto";
  }

  hamburger?.addEventListener("click", toggleMenu);
  closeButton?.addEventListener("click", toggleMenu);
  overlay?.addEventListener("click", toggleMenu);

  navLinks.forEach((link) => {
    link.addEventListener("click", toggleMenu);
  });
});
// Test comment to check if commit works
