// Small JS enhancements for a 'corporate clean' CV page

// Footer year
document.querySelector("#year").textContent = new Date().getFullYear();

// Theme toggle (light <-> dark)
const themeBtn = document.querySelector("#themeBtn");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Copy email button
const copyBtn = document.querySelector("#copyEmailBtn");
copyBtn.addEventListener("click", async () => {
  const email = copyBtn.dataset.email;
  try {
    await navigator.clipboard.writeText(email);
    copyBtn.textContent = "Copied!";
    setTimeout(() => (copyBtn.textContent = "Copy Email"), 1200);
  } catch (err) {
    // Fallback: select via prompt if clipboard blocked
    window.prompt("Copy this email:", email);
  }
});

// Contact form
const contactForm = document.querySelector("#contactForm");
const formMsg = document.querySelector("#formMsg");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = new FormData(contactForm);
  const name = (data.get("name") || "").toString().trim() || "there";

  formMsg.textContent = `Thanks, ${name}! Message captured (demo). You can email me directly at ${copyBtn.dataset.email}.`;
  contactForm.reset();
});
