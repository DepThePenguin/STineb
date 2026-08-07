function toggleTheme() {
  const html = document.documentElement;
  const btn = document.getElementById("themeBtn");

  html.classList.toggle("dark-mode");

  if (html.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    if (btn) btn.innerHTML = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    if (btn) btn.innerHTML = "🌙";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const html = document.documentElement;
  const btn = document.getElementById("themeBtn");

  if (localStorage.getItem("theme") === "dark") {
    html.classList.add("dark-mode");
    if (btn) btn.innerHTML = "☀️";
  } else {
    html.classList.remove("dark-mode");
    if (btn) btn.innerHTML = "🌙";
  }
});
