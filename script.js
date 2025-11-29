// =========================
// MOBILE MENU TOGGLE
// =========================
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

// =========================
// AUTO TYPING EFFECT
// =========================
const roles = ["C++ Developer", "AIML Enthusiast", "Web Developer"];
let index = 0;
let charIndex = 0;

const typingElement = document.getElementById("typing");

function typeEffect() {
    if (index >= roles.length) return; // stop after printing all roles

    if (charIndex < roles[index].length) {
        typingElement.innerHTML += roles[index].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 120);
    } else {
        typingElement.innerHTML += "<br>"; // next line
        index++;
        charIndex = 0;
        setTimeout(typeEffect, 400);
    }
}

typeEffect();
function openTab(tabName) {
  // Hide all contents
  document.querySelectorAll(".tab-content").forEach(content => {
    content.classList.remove("active");
  });

  // Remove active class from buttons
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.classList.remove("active");
  });

  // Show selected tab
  document.getElementById(tabName).classList.add("active");

  // Activate button
  event.target.classList.add("active");
}


