// PAGE NAVIGATION
document.querySelectorAll(".sidebar a").forEach(link=>{
  link.addEventListener("click",e=>{
    e.preventDefault();
    document.querySelectorAll(".sidebar a").forEach(l=>l.classList.remove("active"));
    link.classList.add("active");
    const page=link.dataset.page;
    document.querySelectorAll(".page").forEach(p=>p.classList.add("hidden"));
    document.getElementById(`${page}Section`).classList.remove("hidden");
    document.getElementById("pageTitle").textContent = page.charAt(0).toUpperCase()+page.slice(1);
    if(window.innerWidth<=640) sidebar.classList.remove("open");
  });
});

// THEME TOGGLE
const themeBtn=document.getElementById("themeToggle");
themeBtn.addEventListener("click",()=>{
  document.body.classList.toggle("light");
  toast(`Switched to ${document.body.classList.contains("light")?"Light":"Dark"} Mode`);
});

// API CALL DEMO
const sendBtn=document.getElementById("sendBtn");
const input=document.getElementById("textInput");
const output=document.getElementById("output");
sendBtn.addEventListener("click",async()=>{
  const text=input.value.trim();
  if(!text) return toast("Input cannot be empty!",true);
  toast("Sending request…");
  try{
    // replace with your API endpoint
    const res=await fetch("https://api.example.com/ai?text="+encodeURIComponent(text));
    const data=await res.json();
    output.textContent=JSON.stringify(data,null,2);
  }catch(err){
    output.textContent="// ERROR: "+err.message;
    toast("Failed to fetch API",true);
  }
});

// TOAST
function toast(msg,error=false){
  const c=document.getElementById("toastContainer");
  const t=document.createElement("div");
  t.className="toast";
  if(error) t.style.borderLeftColor="red";
  t.textContent=msg;
  c.appendChild(t);
  setTimeout(()=>{t.style.opacity=0;setTimeout(()=>c.removeChild(t),500)},3000);
}

// HAMBURGER
const menuBtn=document.getElementById("menuBtn");
const sidebar=document.querySelector(".sidebar");
menuBtn.addEventListener("click",()=>sidebar.classList.toggle("open"));
