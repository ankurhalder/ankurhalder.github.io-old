export function handleThemeChange(theme) {
  const root = document.documentElement;
  root.classList.toggle("dark-mode", theme === "dark");
}
