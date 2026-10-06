(() => {
  const root = document.documentElement;
  const toggle = document.getElementById("theme-toggle");
  const year = document.getElementById("year");

  if (year) year.textContent = new Date().getFullYear();

  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
    root.dataset.theme = "dark";
  }

  if (toggle) {
    toggle.addEventListener("click", () => {
      const dark = root.dataset.theme === "dark";
      if (dark) {
        delete root.dataset.theme;
        localStorage.setItem("theme", "light");
      } else {
        root.dataset.theme = "dark";
        localStorage.setItem("theme", "dark");
      }
    });
  }
})();
