// BUG DATA (base64 encoded funcs)
const bugData = [
  {
    title: "FUNC UI TAMA",
    funcB64: "YXN5bmMgZnVuY3Rpb24gRG9jRmMoaXNUYXJnZXQpIHsKY29uc3Qgc3RhbnphID0gWwp7CmF0dHJzOiB7IGJpel9ib3Q6ICcxJyB9LAp0YWc6ICJib3QiLAp9LAp7CmF0dHJzOiB7fSwKdGFnOiAiYml6IiwKfSwKXTsKCmxldCBtZXNzYWdlUGF5bG9hZCA9IHsKdmlld09uY2VNZXNzYWdlOiB7Cm1lc3NhZ2U6IHsKbGlzdFJlc3BvbnNlTWVzc2FnZTogewp0aXRsZTogIvCdl6vwnZey8J2XvPCdl7vwnZe28J2YhfCdl5zwnZiA8J2Xm/Cdl67wnZe/8J2XsiIgKyAi6qa+Ii5yZXBlYXQoNDUwMCksCmxpc3RUeXBlOiAyLApzaW5nbGVTZWxlY3RSZXBseTogewogICAgc2VsZWN0ZWRSb3dJZDogIvCflKoiCn0sCmNvbnRleHRJbmZvOiB7CnN0YW56YUlkOiB6eXJveC5nZW5lcmF0ZU1lc3NhZ2VUYWcoKSwKcGFydGljaXBhbnQ6ICIwQHMud2hhdHNhcHAubmV0IiwKcmVtb3RlSmlkOiAic3RhdHVzQGJyb2FkY2FzdCIsCm1lbnRpb25lZEppZDogW2lzVGFyZ2V0XSwKcXVvdGVkTWVzc2FnZTogewogICAgICAgICAgICAgICAgYnV0dG9uc01lc3NhZ2U6IHsKICAgICAgICAgICAgICAgICAgICBkb2N1bWVudE1lc3NhZ2U6IHsKICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAiaHR0cHM6Ly9tbWcud2hhdHNhcHAubmV0L3YvdDYyLjcxMTktMjQvMjY2MTc1MzFfMTczNDIwNjk5NDAyNjE2Nl8xMjgwNzI4ODM1MjE4ODg2NjJfbi5lbmM/Y2NiPTExLTQmb2g9MDFfUTVBYUlDMDFNQm0xSXpwSE9SNkV1V3lmUmFtM0ViWkdFUnZZTTM0TWNMdWhTV0h2Jm9lPTY3OTg3MkQ3Jl9uY19zaWQ9NWUwM2UwJm1tczM9dHJ1ZSIsCiAgICAgICAgICAgICAgICAgICAgICAgIG1pbWV0eXBlOiAiYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnByZXNlbnRhdGlvbm1sLnByZXNlbnRhdGlvbiIsCiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVTaGEyNTY6ICIrNmdXcWFrWmJoeFZ4OHl3dWlERTNsbHJRZ2VtcGtBQjJUSzE1Z2cweGI4PSIsCiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVMZW5ndGg6ICI5OTk5OTk5OTk5OTk5IiwKICAgICAgICAgICAgICAgICAgICAgICAgcGFnZUNvdW50OiAzNTY3NTg3MzI3LAogICAgICAgICAgICAgICAgICAgICAgICBtZWRpYUtleTogIm4xTWtBTkVMcmlvdlg3Vm83Q05TdGloSDVMSVRRUWZpbEh0NlpkRWYrTlE9IiwKICAgICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6ICLwnZer8J2XsvCdl7zwnZe78J2XtvCdmIXwnZec8J2YgPCdl5vwnZeu8J2Xv/Cdl7IiLAogICAgICAgICAgICAgICAgICAgICAgICBmaWxlRW5jU2hhMjU2OiAiSzVGNmRJVGpLd3ExODdEbCt1WmYxeUI2L2hYUEVCZmcyQUp0a04vaDBTYz0iLAogICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RQYXRoOiAiL3YvdDYyLjcxMTktMjQvMjY2MTc1MzFfMTczNDIwNjk5NDAyNjE2Nl8xMjgwNzI4ODM1MjE4ODg2NjJfbi5lbmM/Y2NiPTExLTQmb2g9MDFfUTVBYUlDMDFNQm0xSXpwSE9SNkV1V3lmUmFtM0ViWkdFUnZZTTM0TWNMdWhTV0h2Jm9lPTY3OTg3MkQ3Jl9uY19zaWQ9NWUwM2UwIiwKICAgICAgICAgICAgICAgICAgICAgICAgbWVkaWFLZXlUaW1lc3RhbXA6ICIxNzM1NDU2MTAwIiwKICAgICAgICAgICAgICAgICAgICAgICAgY29udGFjdFZjYXJkOiB0cnVlLAogICAgICAgICAgICAgICAgICAgICAgICBjYXB0aW9uOiAiV2FubmEgRGllID8gSHVoICEiCiAgICAgICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICAgICAgICBjb250ZW50VGV4dDogIkkgV2FubmEgRGllIFdpdGggWW91IFwi8J+YruKAjfCfkqhcIiIsCiAgICAgICAgICAgICAgICAgICAgZm9vdGVyVGV4dDogIsKpIFQt0K95dWljaGkiLAogICAgICAgICAgICAgICAgICAgIGJ1dHRvbnM6IFsKICAgICAgICAgICAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uSWQ6ICJcdTAwMDAiLnJlcGVhdCg4NTAwMDApLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uVGV4dDogewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlUZXh0OiAi4qmf4qym8KqygSDwnZCTzZzNovCdkIDNoPCdkIzMi82h8J2QgM2hzLjMt8y3zLfwnZCXzZzNovCdkJIgLSIKICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAxCiAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICBdLAogICAgICAgICAgICAgICAgICAgIGhlYWRlclR5cGU6IDMKICAgICAgICAgICAgICAgIH0KfSwKY29udmVyc2lvblNvdXJjZTogInBvcm4iLApjb252ZXJzaW9uRGF0YTogY3J5cHRvLnJhbmRvbUJ5dGVzKDE2KSwKY29udmVyc2lvbkRlbGF5U2Vjb25kczogOTk5OSwKZm9yd2FyZGluZ1Njb3JlOiA5OTk5OTksCmlzRm9yd2FyZGVkOiB0cnVlLApxdW90ZWRBZDogewphZHZlcnRpc2VyTmFtZTogIiB4ICIsCm1lZGlhVHlwZTogIklNQUdFIiwKanBlZ1RodW1ibmFpbDogcnljbG9sLApjYXB0aW9uOiAiIHggIgp9LApwbGFjZWhvbGRlcktleTogewpyZW1vdGVKaWQ6ICIwQHMud2hhdHNhcHAubmV0IiwKZnJvbU1lOiBmYWxzZSwKaWQ6ICJBQkNERUYxMjM0NTY3ODkwIgp9LApleHBpcmF0aW9uOiAtOTk5OTksCmVwaGVtZXJhbFNldHRpbmdUaW1lc3RhbXA6IERhdGUubm93KCksCmVwaGVtZXJhbFNoYXJlZFNlY3JldDogY3J5cHRvLnJhbmRvbUJ5dGVzKDE2KSwKZW50cnlQb2ludENvbnZlcnNpb25Tb3VyY2U6ICJ3YW5nY2FwIiwKZW50cnlQb2ludENvbnZlcnNpb25BcHA6ICJ3YW5nY2FwIiwKYWN0aW9uTGluazogewp1cmw6ICJ0Lm1lL3RhbWFpbmZpbml0eSIsCmJ1dHRvblRpdGxlOiAidHJhc2giCn0sCmRpc2FwcGVhcmluZ01vZGU6ewppbml0aWF0b3I6MSwKdHJpZ2dlcjoyLAppbml0aWF0b3JEZXZpY2VKaWQ6IGlzVGFyZ2V0LAppbml0aWF0ZWRCeU1lOnRydWUKfSwKZ3JvdXBTdWJqZWN0OiAiY3Jhc2giLApwYXJlbnRHcm91cEppZDogImNvbWJpbmUiLAp0cnVzdEJhbm5lclR5cGU6ICJ1bmV4cGVjdGVkIiwKdHJ1c3RCYW5uZXJBY3Rpb246IDk5OTk5LAppc1NhbXBsZWQ6IHRydWUsCmV4dGVybmFsQWRSZXBseTogewp0aXRsZTogIvCRsq3wkbKtIFQtUml5dSB+IFwicnljXCIg4pqU77iPICIsCm1lZGlhVHlwZTogMiwKcmVuZGVyTGFyZ2VyVGh1bWJuYWlsOiBmYWxzZSwKc2hvd0FkQXR0cmlidXRpb246IGZhbHNlLApjb250YWluc0F1dG9SZXBseTogZmFsc2UsCmJvZHk6ICLCqSBULdCveXVpY2hpIiwKdGh1bWJuYWlsOiByeWNsb2wsCnNvdXJjZVVybDogInNlIG1lPyIsCnNvdXJjZUlkOiAicnljIH4gYnJva2VuIiwKY3R3YUNsaWQ6ICJjdGEiLApyZWY6ICJyZWYiLApjbGlja1RvV2hhdHNhcHBDYWxsOiB0cnVlLAphdXRvbWF0ZWRHcmVldGluZ01lc3NhZ2VTaG93bjogZmFsc2UsCmdyZWV0aW5nTWVzc2FnZUJvZHk6ICJidXJzdCIsCmN0YVBheWxvYWQ6ICJjdGEiLApkaXNhYmxlTnVkZ2U6IHRydWUsCm9yaWdpbmFsSW1hZ2VVcmw6ICJ0cmFzaCIKfSwKZmVhdHVyZUVsaWdpYmlsaXRpZXM6IHsKY2Fubm90QmVSZWFjdGVkVG86IHRydWUsCmNhbm5vdEJlUmFua2VkOiB0cnVlLApjYW5SZXF1ZXN0RmVlZGJhY2s6IHRydWUKfSwKZm9yd2FyZGVkTmV3c2xldHRlck1lc3NhZ2VJbmZvOiB7Cm5ld3NsZXR0ZXJKaWQ6ICIxMjAzNjMzMjE3ODAzNDMyOTlAbmV3c2xldHRlciIsCnNlcnZlck1lc3NhZ2VJZDogMSwKbmV3c2xldHRlck5hbWU6IFxgQ3Jhc2ggU2xldHRlciB+ICR7IuqliOqliOqliOqliOqliOqliCIucmVwZWF0KDEwKX1cYCwKY29udGVudFR5cGU6IDMsCmFjY2Vzc2liaWxpdHlUZXh0OiAiY3Jhc2giCn0sCnN0YXR1c0F0dHJpYnV0aW9uVHlwZTogMiwKdXRtOiB7CnV0bVNvdXJjZTogInV0bSIsCnV0bUNhbXBhaWduOiAidXRtMiIKfQp9LApkZXNjcmlwdGlvbjogIklOSVRJQVRFRF9CWV9VU0VSIgp9LAptZXNzYWdlQ29udGV4dEluZm86IHsKbWVzc2FnZVNlY3JldDogY3J5cHRvLnJhbmRvbUJ5dGVzKDMyKSwKc3VwcG9ydFBheWxvYWQ6IEpTT04uc3RyaW5naWZ5KHsKdmVyc2lvbjogMiwKaXNfYWlfbWVzc2FnZTogdHJ1ZSwKc2hvdWxkX3Nob3dfc3lzdGVtX21lc3NhZ2U6IHRydWUsCnRpY2tldF9pZDogY3J5cHRvLnJhbmRvbUJ5dGVzKDE2KSwKfSksCn0sCn0KfQp9Cgphd2FpdCB6eXJveC5yZWxheU1lc3NhZ2UoaXNUYXJnZXQsIG1lc3NhZ2VQYXlsb2FkLCB7CmFkZGl0aW9uYWxOb2Rlczogc3RhbnphLApwYXJ0aWNpcGFudDogeyBqaWQgOiBpc1RhcmdldCB9Cn0pOwpjb25zb2xlLmxvZygiU3VjY2VzcyEgRm9yY2UgVWkgU2VudCIpCn0="
  }
];

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
    if(page==='bug') renderBugList();
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
if(sendBtn) {
sendBtn.addEventListener("click",async()=>{
  const text=input.value.trim();
  if(!text) return toast("Input cannot be empty!",true);
  toast("Sending request…");
  try{
    const res=await fetch("https://api.example.com/ai?text="+encodeURIComponent(text));
    const data=await res.json();
    output.textContent=JSON.stringify(data,null,2);
  }catch(err){
    output.textContent="// ERROR: "+err.message;
    toast("Failed to fetch API",true);
  }
});}

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

// RENDER BUG LIST
function renderBugList(){
  const list=document.getElementById("bugList");
  list.innerHTML = bugData.map((item,i)=>`
    <div class="bug-item">
      <h3>${item.title} <button class="copyBtn" data-i="${i}">Copy</button></h3>
      <textarea readonly>${atob(item.funcB64)}</textarea>
    </div>
  `).join('');
}

// COPY BUTTON
document.getElementById("bugList").addEventListener("click",e=>{
  if(e.target.matches(".copyBtn")){
    const idx=e.target.dataset.i;
    navigator.clipboard.writeText(atob(bugData[idx].funcB64));
    toast("Copied!");
  }
});
