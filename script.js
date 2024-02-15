let root = document.querySelector(":root");
let button = document.querySelector("#themeToggle");

button.addEventListener("click", () => {
  event.preventDefault();
  root.classList.toggle("dark");
  if (button.textContent === "Switch to dark theme") {
    button.textContent = "Switch to light theme";
  } else {
    button.textContent = "Switch to dark theme";
  }
});
