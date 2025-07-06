// BUG DATA (base64 encoded funcs)
/* === 1. Render Bug List (kode disembunyikan) === */
const bugList = document.getElementById("bugList");
bugData.forEach((b, i) => {
  bugList.insertAdjacentHTML(
    "beforeend",
    `<li>
       <strong>${b.title}</strong>
       <pre class="bug-code">// hidden • click Copy</pre>
       <button class="copyBtn" data-i="${i}">Copy</button>
     </li>`
  );
});

/* === 2. Copy Handler (decode Base-64) === */
bugList.addEventListener("click", e => {
  if (!e.target.classList.contains("copyBtn")) return;
  const code = atob(bugData[e.target.dataset.i].funcB64);   // ← decode
  navigator.clipboard.writeText(code)
    .then(()=>toast("Copied!"))
    .catch(()=>toast("Copy failed",true));
});

/* === 3. Page Navigation === */
document.querySelectorAll(".sidebar a").forEach(link=>{
  link.addEventListener("click",e=>{
    e.preventDefault();
    document.querySelectorAll(".sidebar a").forEach(l=>l.classList.remove("active"));
    link.classList.add("active");
    const page = link.dataset.page;
    document.querySelectorAll(".page").forEach(p=>p.classList.add("hidden"));
    document.getElementById(`${page}Section`).classList.remove("hidden");
    document.getElementById("pageTitle").textContent =
      page.charAt(0).toUpperCase()+page.slice(1);
    if(window.innerWidth<=640) sidebar.classList.remove("open");
  });
});

/* === 4. Theme Toggle === */
const themeBtn=document.getElementById("themeToggle");
themeBtn.addEventListener("click",()=>{
  document.body.classList.toggle("light");
  toast(document.body.classList.contains("light")?"Light mode":"Dark mode");
});

/* === 5. Demo Fetch === */
const sendBtn=document.getElementById("sendBtn");
const input=document.getElementById("textInput");
const output=document.getElementById("output");
sendBtn?.addEventListener("click",async()=>{
  const t=input.value.trim(); if(!t) return toast("Input kosong!",true);
  toast("Sending…");
  try{
    const res=await fetch("https://api.example.com/ai?text="+encodeURIComponent(t));
    output.textContent=JSON.stringify(await res.json(),null,2);
  }catch(err){
    output.textContent="// ERROR: "+err.message;
    toast("Fetch gagal",true);
  }
});

/* === 6. Toast + Hamburger === */
function toast(msg,err=false){
  const c=document.getElementById("toastContainer");
  const d=document.createElement("div"); d.className="toast";
  if(err) d.style.borderLeftColor="red"; d.textContent=msg; c.appendChild(d);
  setTimeout(()=>{d.style.opacity=0;setTimeout(()=>c.removeChild(d),500)},3000);
}
const menuBtn=document.getElementById("menuBtn");
const sidebar=document.querySelector(".sidebar");
menuBtn.addEventListener("click",()=>sidebar.classList.toggle("open"));