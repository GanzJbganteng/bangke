/* === 0. ambil elemen global lebih dulu === */
const sidebar = document.querySelector(".sidebar");      // <— pindah ke atas
const bugList  = document.getElementById("bugList");

/* === 1. render bug list (decode langsung) === */
bugData.forEach((b, i) => {
  const code = atob(b.funcB64);                   // decode Base-64
  bugList.insertAdjacentHTML(
    "beforeend",
    `<li>
       <strong>${b.title}</strong>
       <pre class="bug-code" id="bug${i}">${code}</pre>
       <button class="copyBtn" data-id="bug${i}">Copy</button>
     </li>`
  );
});

/* copy handler */
bugList.addEventListener("click", (e) => {
  if (!e.target.classList.contains("copyBtn")) return;
  const id   = e.target.dataset.id;
  const code = document.getElementById(id).innerText;
  navigator.clipboard.writeText(code)
    .then(() => toast("Copied!"))
    .catch(() => toast("Copy failed", true));
});

/* === 2. page navigation === */
document.querySelectorAll(".sidebar a").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    // aktifkan link
    document.querySelectorAll(".sidebar a").forEach(l => l.classList.remove("active"));
    link.classList.add("active");

    // tampilkan page
    const page = link.dataset.page;
    document.querySelectorAll(".page").forEach(p => p.classList.add("hidden"));
    document.getElementById(`${page}Section`).classList.remove("hidden");
    document.getElementById("pageTitle").textContent =
      page.charAt(0).toUpperCase() + page.slice(1);

    /* ⏬ tutup sidebar jika lebar layar kecil */
    if (window.innerWidth <= 640) sidebar.classList.remove("open");
  });
});

/* === 3. theme toggle === */
const themeBtn = document.getElementById("themeToggle");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  toast(document.body.classList.contains("light") ? "Light mode" : "Dark mode");
});

/* === 4. demo fetch === */
const sendBtn = document.getElementById("sendBtn");
const input   = document.getElementById("textInput");
const output  = document.getElementById("output");
sendBtn?.addEventListener("click", async () => {
  const t = input.value.trim();
  if (!t) return toast("Input kosong!", true);

  toast("Sending…");
  try {
    const res  = await fetch("https://api.example.com/ai?text=" + encodeURIComponent(t));
    output.textContent = JSON.stringify(await res.json(), null, 2);
  } catch (err) {
    output.textContent = "// ERROR: " + err.message;
    toast("Fetch gagal", true);
  }
});

/* === 5. toast & hamburger === */
function toast(msg, err = false) {
  const c = document.getElementById("toastContainer");
  const d = document.createElement("div");
  d.className = "toast";
  if (err) d.style.borderLeftColor = "red";
  d.textContent = msg;
  c.appendChild(d);
  setTimeout(() => { d.style.opacity = 0; setTimeout(() => c.removeChild(d), 500); }, 3000);
}

const menuBtn = document.getElementById("menuBtn");
menuBtn.addEventListener("click", () => sidebar.classList.toggle("open"));
