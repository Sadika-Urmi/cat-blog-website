// Smooth scroll from hero button
document.getElementById("explore-btn").addEventListener("click", () => {
  document.getElementById("story").scrollIntoView({ behavior: "smooth" });
});

// Toggle "Read More" content
const readMoreBtn = document.querySelector(".read-more-btn");
const hiddenText = document.querySelector(".hidden-text");

readMoreBtn.addEventListener("click", () => {
  const isVisible = hiddenText.style.display === "block";
  hiddenText.style.display = isVisible ? "none" : "block";
  readMoreBtn.textContent = isVisible ? "Read More" : "Read Less";
  readMoreBtn.setAttribute("aria-expanded", !isVisible);
});

// Fake contact form submission
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  formStatus.textContent = "Message sent successfully! 🐾";
  formStatus.style.color = "#28a745";
  contactForm.reset();

  setTimeout(() => {
    formStatus.textContent = "";
  }, 3000);
});
