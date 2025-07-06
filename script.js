const sidebar = document.querySelector(".sidebar");
const bugList = document.getElementById("bugList");

bugData.forEach((b, i) => {
  const li = document.createElement("li");
  const title = document.createElement("strong");
  title.textContent = b.title;

  const pre = document.createElement("pre");
  pre.className = "bug-code";
  pre.id = "bug" + i;
  pre.textContent = atob(b.funcB64);

  const btn = document.createElement("button");
  btn.className = "copyBtn";
  btn.dataset.id = pre.id;
  btn.textContent = "Copy";

  li.append(title, pre, btn);
  bugList.append(li);
});

bugList.addEventListener("click", (e) => {
  if (!e.target.classList.contains("copyBtn")) return;
  const code = document.getElementById(e.target.dataset.id).innerText;
  navigator.clipboard.writeText(code)
    .then(() => toast("Copied!"))
    .catch(() => toast("Copy failed", true));
});

document.querySelectorAll(".sidebar a").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelectorAll(".sidebar a").forEach(l => l.classList.remove("active"));
    link.classList.add("active");
    const page = link.dataset.page;
    document.querySelectorAll(".page").forEach(p => p.classList.add("hidden"));
    document.getElementById(`${page}Section`).classList.remove("hidden");
    document.getElementById("pageTitle").textContent = page.charAt(0).toUpperCase() + page.slice(1);
    if (window.innerWidth <= 640) sidebar.classList.remove("open");
  });
});

const themeBtn = document.getElementById("themeToggle");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  toast(document.body.classList.contains("light") ? "Light mode" : "Dark mode");
});

const sendBtn = document.getElementById("sendBtn");
const input = document.getElementById("textInput");
const output = document.getElementById("output");
sendBtn?.addEventListener("click", async () => {
  const t = input.value.trim();
  if (!t) return toast("Input kosong!", true);
  toast("Sending…");
  try {
    const res = await fetch("https://api.example.com/ai?text=" + encodeURIComponent(t));
    output.textContent = JSON.stringify(await res.json(), null, 2);
  } catch (err) {
    output.textContent = "// ERROR: " + err.message;
    toast("Fetch gagal", true);
  }
});

function toast(msg, err = false) {
  const c = document.getElementById("toastContainer");
  const d = document.createElement("div");
  d.className = "toast";
  if (err) d.style.borderLeftColor = "red";
  d.textContent = msg;
  c.appendChild(d);
  setTimeout(() => {
    d.style.opacity = 0;
    setTimeout(() => c.removeChild(d), 500);
  }, 3000);
}

const menuBtn = document.getElementById("menuBtn");
menuBtn.addEventListener("click", () => sidebar.classList.toggle("open"));
