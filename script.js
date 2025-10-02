 function updateClock() {
    const now = new Date();
    let h = String(now.getHours()).padStart(2, '0');
    let m = String(now.getMinutes()).padStart(2, '0');
    let s = String(now.getSeconds()).padStart(2, '0');
    document.getElementById("clock").textContent = `${h}:${m}:${s}`;
  }
  setInterval(updateClock, 1000);
  updateClock();

    // 🌙 / ☀️ Dark Mode
const toggleBtn = document.getElementById("toggleMode");

// Apply theme saat halaman load
window.addEventListener("load", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    if (toggleBtn) toggleBtn.textContent = "☀️";
  }
});

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    toggleBtn.textContent = isDark ? "☀️" : "🌙";

    // Simpan preferensi ke localStorage
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
}
    
  const mottos = [
    "Belajar bukan untuk nilai, tapi untuk ilmu.",
    "Kerja keras mengalahkan bakat ketika bakat tidak bekerja keras.",
    "Kegagalan adalah sukses yang tertunda.",
    "Hidup itu seperti mengayuh sepeda, harus terus bergerak.",
    "Setiap hari adalah kesempatan baru."
  ];

  const mottoBtn = document.getElementById("mottoBtn");
  const mottoText = document.getElementById("mottoText");

  if (mottoBtn && mottoText) {
  mottoBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * mottos.length);
    mottoText.innerHTML = `<i>"${mottos[randomIndex]}"</i>`;
  });
  }

  