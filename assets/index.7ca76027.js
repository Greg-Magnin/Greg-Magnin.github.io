(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))l(d);new MutationObserver(d=>{for(const s of d)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function n(d){const s={};return d.integrity&&(s.integrity=d.integrity),d.referrerpolicy&&(s.referrerPolicy=d.referrerpolicy),d.crossorigin==="use-credentials"?s.credentials="include":d.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(d){if(d.ep)return;d.ep=!0;const s=n(d);fetch(d.href,s)}})();let p=document.getElementById("buttonstart");p.addEventListener("click",async t=>{document.getElementById("windowsmenu").classList.toggle("openMenu")});let g=document.getElementById("mySelf"),E=document.getElementById("myProjects"),v=document.getElementById("myContact");g.addEventListener("click",async t=>{document.getElementById("windowMySelf").classList.add("open");let n=document.getElementById("windowsmenu");n.classList.remove("openMenu"),n.classList.add("closeMenu")});E.addEventListener("click",async t=>{document.getElementById("windowMyProjects").classList.add("open");let n=document.getElementById("windowsmenu");n.classList.remove("openMenu"),n.classList.add("closeMenu")});v.addEventListener("click",async t=>{document.getElementById("windowMyContact").classList.add("open");let n=document.getElementById("windowsmenu");n.classList.remove("openMenu"),n.classList.add("closeMenu")});let w=document.getElementById("close"),L=document.getElementById("closeProjects"),I=document.getElementById("closeContact"),B=document.getElementById("closeNotepadDesktop"),b=document.getElementById("closeNotepadAboutMe");w.addEventListener("click",async t=>{let e=document.querySelector(".window");e.classList.remove("maximize"),e.classList.remove("open"),e.classList.add("off")});L.addEventListener("click",async t=>{let e=document.getElementById("windowMyProjects");e.classList.remove("maximizeProjects"),e.classList.remove("open"),e.classList.add("off")});I.addEventListener("click",async t=>{let e=document.getElementById("windowMyContact");e.classList.remove("maximizeContact"),e.classList.remove("open"),e.classList.add("off")});B.addEventListener("click",async t=>{let e=document.getElementById("notepadDesktop");e.classList.remove("maximizeNotepadDesktop"),e.classList.remove("open"),e.classList.add("off")});b.addEventListener("click",async t=>{let e=document.getElementById("notepadAboutMe");e.classList.remove("maximizeNotepadAboutMe"),e.classList.remove("open"),e.classList.add("off")});let k=document.getElementById("maximize"),M=document.getElementById("maximizeProjects"),x=document.getElementById("maximizeContact"),D=document.getElementById("maximizeNotepadDesktop"),C=document.getElementById("maximizeNotepadAboutMe"),m=document.getElementById("windowMySelf"),A=document.getElementById("windowMyProjects"),h=document.getElementById("windowMyContact"),z=document.getElementById("notepadDesktop"),a=document.getElementById("notepadAboutMe");k.addEventListener("click",async t=>{m.classList.remove("off"),m.classList.toggle("maximize")});M.addEventListener("click",async t=>{m.classList.remove("off"),A.classList.toggle("maximizeProjects")});x.addEventListener("click",async t=>{m.classList.remove("off"),h.classList.toggle("maximizeContact")});D.addEventListener("click",async t=>{m.classList.remove("off"),z.classList.toggle("maximizeNotepadDesktop")});C.addEventListener("click",async t=>{m.classList.remove("off"),a.classList.toggle("maximizeNotepadAboutMe"),a.style.position="absolute",a.style.top="0",a.style.left="0"});document.getElementById("windowMySelf");document.getElementById("body");j(document.getElementById("windowMySelf"));function j(t){let e=0,n=0,l=0,d=0;document.getElementById(t.id+"Header")?document.getElementById(t.id+"Header").onmousedown=s:t.onmousedown=s;function s(o){o=o||window.event,o.preventDefault(),l=o.clientX,d=o.clientY,document.onmouseup=i,document.onmousemove=c}function c(o){o=o||window.event,event.preventDefault(),e=l-o.clientX,n=d-o.clientY,l=o.clientX,d=o.clientY,t.style.top=t.offsetTop-n+"px",t.style.left=t.offsetLeft-e+"px"}function i(){document.onmouseup=null,document.onmousemove=null}}P(document.getElementById("windowMyProjects"));function P(t){let e=0,n=0,l=0,d=0;document.getElementById(t.id+"Header")?document.getElementById(t.id+"Header").onmousedown=s:t.onmousedown=s;function s(o){o=o||window.event,o.preventDefault(),l=o.clientX,d=o.clientY,document.onmouseup=i,document.onmousemove=c}function c(o){o=o||window.event,event.preventDefault(),e=l-o.clientX,n=d-o.clientY,l=o.clientX,d=o.clientY,t.style.top=t.offsetTop-n+"px",t.style.left=t.offsetLeft-e+"px"}function i(){document.onmouseup=null,document.onmousemove=null}}N(document.getElementById("windowMyContact"));function N(t){let e=0,n=0,l=0,d=0;document.getElementById(t.id+"Header")?document.getElementById(t.id+"Header").onmousedown=s:t.onmousedown=s;function s(o){o=o||window.event,o.preventDefault(),l=o.clientX,d=o.clientY,document.onmouseup=i,document.onmousemove=c}function c(o){o=o||window.event,event.preventDefault(),e=l-o.clientX,n=d-o.clientY,l=o.clientX,d=o.clientY,t.style.top=t.offsetTop-n+"px",t.style.left=t.offsetLeft-e+"px"}function i(){document.onmouseup=null,document.onmousemove=null}}X(document.getElementById("notepadAboutMe"));function X(t){let e=0,n=0,l=0,d=0;document.getElementById(t.id+"Header")?document.getElementById(t.id+"Header").onmousedown=s:t.onmousedown=s;function s(o){o=o||window.event,o.preventDefault(),l=o.clientX,d=o.clientY,document.onmouseup=i,document.onmousemove=c}function c(o){o=o||window.event,event.preventDefault(),e=l-o.clientX,n=d-o.clientY,l=o.clientX,d=o.clientY,t.style.top=t.offsetTop-n+"px",t.style.left=t.offsetLeft-e+"px"}function i(){document.onmouseup=null,document.onmousemove=null}}let r=document.getElementById("notepadAbout"),y=document.getElementById("notepadLinks"),f=document.getElementById("desktopMyself");r.addEventListener("click",t=>{let e=document.getElementById("nameAbout"),n=document.getElementById("notepadAboutImg");n.style.backgroundColor="#81b7fd",e.style.backgroundColor="#0b5ffb",e.style.color="white"});r.addEventListener("dblclick",t=>{let e=document.getElementById("nameAbout"),n=document.getElementById("notepadAboutImg");n.style.backgroundColor="white",e.style.backgroundColor="white",e.style.color="black"});y.addEventListener("click",t=>{let e=document.getElementById("links"),n=document.getElementById("notepadLinksImg");n.style.backgroundColor="#81b7fd",e.style.backgroundColor="#0b5ffb",e.style.color="white"});y.addEventListener("dblclick",t=>{let e=document.getElementById("links"),n=document.getElementById("notepadLinksImg");n.style.backgroundColor="white",e.style.backgroundColor="white",e.style.color="black"});f.addEventListener("click",t=>{let e=document.getElementById("myselfImg"),n=document.getElementById("myselfText");e.style.backgroundColor="#81b7fd",n.style.backgroundColor="#0b5ffb",n.style.color="white"});f.addEventListener("dblclick",t=>{let e=document.getElementById("myselfImg"),n=document.getElementById("myselfText");e.style.backgroundColor="white",n.style.backgroundColor="white",n.style.color="black"});new Typed(".startNotepad",{strings:["To start, press the start button in the taskbar","Don't forget to press F11 for more immersion :)"],typeSpeed:40,backSpeed:20,loop:!0});let Y=document.getElementById("notepadAbout");Y.addEventListener("dblclick",t=>{let e=document.getElementById("notepadAboutMe");e.classList.remove("off"),e.classList.add("open")});let u=new Date,S=u.getHours()+":"+u.getMinutes();document.getElementById("hour").innerHTML=S;
