(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))s(d);new MutationObserver(d=>{for(const l of d)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function o(d){const l={};return d.integrity&&(l.integrity=d.integrity),d.referrerpolicy&&(l.referrerPolicy=d.referrerpolicy),d.crossorigin==="use-credentials"?l.credentials="include":d.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(d){if(d.ep)return;d.ep=!0;const l=o(d);fetch(d.href,l)}})();let w=document.getElementById("buttonstart");w.addEventListener("click",async t=>{document.getElementById("windowsmenu").classList.toggle("openMenu")});let L=document.getElementById("mySelf"),k=document.getElementById("myProjects"),b=document.getElementById("myContact"),B=document.getElementById("desktopMyself"),x=document.getElementById("desktopProjects"),M=document.getElementById("desktopContact");L.addEventListener("click",async t=>{document.getElementById("windowMySelf").classList.add("open");let o=document.getElementById("windowsmenu");o.classList.remove("openMenu"),o.classList.add("closeMenu")});k.addEventListener("click",async t=>{document.getElementById("windowMyProjects").classList.add("open");let o=document.getElementById("windowsmenu");o.classList.remove("openMenu"),o.classList.add("closeMenu")});b.addEventListener("click",async t=>{document.getElementById("windowMyContact").classList.add("open");let o=document.getElementById("windowsmenu");o.classList.remove("openMenu"),o.classList.add("closeMenu")});B.addEventListener("dblclick",t=>{let e=document.getElementById("windowMySelf");e.classList.remove("off"),e.classList.add("open")});x.addEventListener("dblclick",t=>{document.getElementById("windowMyProjects").classList.add("open")});M.addEventListener("dblclick",t=>{document.getElementById("windowMyContact").classList.add("open")});let C=document.getElementById("close"),z=document.getElementById("closeProjects"),j=document.getElementById("closeContact"),D=document.getElementById("closeNotepadDesktop"),T=document.getElementById("closeNotepadAboutMe"),P=document.getElementById("closeNotepadLinks");C.addEventListener("click",async t=>{let e=document.querySelector(".window");e.classList.remove("maximize"),e.classList.remove("open"),e.classList.add("off")});z.addEventListener("click",async t=>{let e=document.getElementById("windowMyProjects");e.classList.remove("maximizeProjects"),e.classList.remove("open"),e.classList.add("off")});j.addEventListener("click",async t=>{let e=document.getElementById("windowMyContact");e.classList.remove("maximizeContact"),e.classList.remove("open"),e.classList.add("off")});D.addEventListener("click",async t=>{let e=document.getElementById("notepadDesktop");e.classList.remove("maximizeNotepadDesktop"),e.classList.remove("open"),e.classList.add("off")});T.addEventListener("click",async t=>{let e=document.getElementById("notepadAboutMe");e.classList.remove("maximizeNotepadAboutMe"),e.classList.remove("open"),e.classList.add("off")});P.addEventListener("click",async t=>{let e=document.getElementById("notepadLinksShow");e.classList.remove("maximizeNotepadLinks"),e.classList.remove("open"),e.classList.add("off")});let h=document.getElementById("maximize"),A=document.getElementById("maximizeProjects"),N=document.getElementById("maximizeContact"),S=document.getElementById("maximizeNotepadDesktop"),X=document.getElementById("maximizeNotepadAboutMe"),Y=document.getElementById("maximizeNotepadLinks"),i=document.getElementById("windowMySelf"),q=document.getElementById("windowMyProjects"),H=document.getElementById("windowMyContact"),$=document.getElementById("notepadDesktop"),a=document.getElementById("notepadAboutMe"),u=document.getElementById("notepadLinksShow");h.addEventListener("click",async t=>{i.classList.remove("off"),i.classList.toggle("maximize")});A.addEventListener("click",async t=>{i.classList.remove("off"),q.classList.toggle("maximizeProjects")});N.addEventListener("click",async t=>{i.classList.remove("off"),H.classList.toggle("maximizeContact")});S.addEventListener("click",async t=>{i.classList.remove("off"),$.classList.toggle("maximizeNotepadDesktop")});X.addEventListener("click",async t=>{i.classList.remove("off"),a.classList.toggle("maximizeNotepadAboutMe"),a.style.position="absolute",a.style.top="0",a.style.left="0"});Y.addEventListener("click",async t=>{i.classList.remove("off"),u.classList.toggle("maximizeNotepadLinks"),u.style.position="absolute",u.style.top="0",u.style.left="0"});document.getElementById("windowMySelf");document.getElementById("body");F(document.getElementById("windowMySelf"));function F(t){let e=0,o=0,s=0,d=0;document.getElementById(t.id+"Header")?document.getElementById(t.id+"Header").onmousedown=l:t.onmousedown=l;function l(n){n=n||window.event,n.preventDefault(),s=n.clientX,d=n.clientY,document.onmouseup=m,document.onmousemove=c}function c(n){n=n||window.event,event.preventDefault(),e=s-n.clientX,o=d-n.clientY,s=n.clientX,d=n.clientY,t.style.top=t.offsetTop-o+"px",t.style.left=t.offsetLeft-e+"px"}function m(){document.onmouseup=null,document.onmousemove=null}}O(document.getElementById("windowMyProjects"));function O(t){let e=0,o=0,s=0,d=0;document.getElementById(t.id+"Header")?document.getElementById(t.id+"Header").onmousedown=l:t.onmousedown=l;function l(n){n=n||window.event,n.preventDefault(),s=n.clientX,d=n.clientY,document.onmouseup=m,document.onmousemove=c}function c(n){n=n||window.event,event.preventDefault(),e=s-n.clientX,o=d-n.clientY,s=n.clientX,d=n.clientY,t.style.top=t.offsetTop-o+"px",t.style.left=t.offsetLeft-e+"px"}function m(){document.onmouseup=null,document.onmousemove=null}}K(document.getElementById("windowMyContact"));function K(t){let e=0,o=0,s=0,d=0;document.getElementById(t.id+"Header")?document.getElementById(t.id+"Header").onmousedown=l:t.onmousedown=l;function l(n){n=n||window.event,n.preventDefault(),s=n.clientX,d=n.clientY,document.onmouseup=m,document.onmousemove=c}function c(n){n=n||window.event,event.preventDefault(),e=s-n.clientX,o=d-n.clientY,s=n.clientX,d=n.clientY,t.style.top=t.offsetTop-o+"px",t.style.left=t.offsetLeft-e+"px"}function m(){document.onmouseup=null,document.onmousemove=null}}W(document.getElementById("notepadAboutMe"));function W(t){let e=0,o=0,s=0,d=0;document.getElementById(t.id+"Header")?document.getElementById(t.id+"Header").onmousedown=l:t.onmousedown=l;function l(n){n=n||window.event,n.preventDefault(),s=n.clientX,d=n.clientY,document.onmouseup=m,document.onmousemove=c}function c(n){n=n||window.event,event.preventDefault(),e=s-n.clientX,o=d-n.clientY,s=n.clientX,d=n.clientY,t.style.top=t.offsetTop-o+"px",t.style.left=t.offsetLeft-e+"px"}function m(){document.onmouseup=null,document.onmousemove=null}}_(document.getElementById("notepadLinksShow"));function _(t){let e=0,o=0,s=0,d=0;document.getElementById(t.id+"Header")?document.getElementById(t.id+"Header").onmousedown=l:t.onmousedown=l;function l(n){n=n||window.event,n.preventDefault(),s=n.clientX,d=n.clientY,document.onmouseup=m,document.onmousemove=c}function c(n){n=n||window.event,event.preventDefault(),e=s-n.clientX,o=d-n.clientY,s=n.clientX,d=n.clientY,t.style.top=t.offsetTop-o+"px",t.style.left=t.offsetLeft-e+"px"}function m(){document.onmouseup=null,document.onmousemove=null}}let y=document.getElementById("notepadAbout"),g=document.getElementById("notepadLinks"),p=document.getElementById("desktopMyself"),f=document.getElementById("desktopProjects"),E=document.getElementById("desktopContact"),v=document.getElementById("recycle"),I=document.getElementById("quizzos");y.addEventListener("click",t=>{let e=document.getElementById("nameAbout"),o=document.getElementById("notepadAboutImg");o.style.backgroundColor="#81b7fd",e.style.backgroundColor="#0b5ffb",e.style.color="white"});y.addEventListener("dblclick",t=>{let e=document.getElementById("nameAbout"),o=document.getElementById("notepadAboutImg");o.style.backgroundColor="white",e.style.backgroundColor="white",e.style.color="black"});g.addEventListener("click",t=>{let e=document.getElementById("links"),o=document.getElementById("notepadLinksImg");o.style.backgroundColor="#81b7fd",e.style.backgroundColor="#0b5ffb",e.style.color="white"});g.addEventListener("dblclick",t=>{let e=document.getElementById("links"),o=document.getElementById("notepadLinksImg");o.style.backgroundColor="white",e.style.backgroundColor="white",e.style.color="black"});p.addEventListener("click",t=>{let e=document.getElementById("myselfImg"),o=document.getElementById("myselfText");e.style.backgroundColor="#81b7fd",o.style.backgroundColor="#0b5ffb",o.style.color="white"});p.addEventListener("dblclick",t=>{let e=document.getElementById("myselfImg"),o=document.getElementById("myselfText");e.style.backgroundColor="transparent",o.style.backgroundColor="transparent"});f.addEventListener("click",t=>{let e=document.getElementById("projectsImg"),o=document.getElementById("projectsText");e.style.backgroundColor="#81b7fd",o.style.backgroundColor="#0b5ffb",o.style.color="white"});f.addEventListener("dblclick",t=>{let e=document.getElementById("projectsImg"),o=document.getElementById("projectsText");e.style.backgroundColor="transparent",o.style.backgroundColor="transparent"});E.addEventListener("click",t=>{let e=document.getElementById("contactImg"),o=document.getElementById("contactText");e.style.backgroundColor="#81b7fd",o.style.backgroundColor="#0b5ffb"});E.addEventListener("dblclick",t=>{let e=document.getElementById("contactImg"),o=document.getElementById("contactText");e.style.backgroundColor="transparent",o.style.backgroundColor="transparent"});v.addEventListener("click",t=>{let e=document.getElementById("recycleImg"),o=document.getElementById("recycleText");e.style.backgroundColor="#81b7fd",o.style.backgroundColor="#0b5ffb"});v.addEventListener("dblclick",t=>{let e=document.getElementById("recycleImg"),o=document.getElementById("recycleText");e.style.backgroundColor="transparent",o.style.backgroundColor="transparent"});I.addEventListener("click",t=>{let e=document.getElementById("quizzosImg"),o=document.getElementById("quizzosText");e.style.backgroundColor="#81b7fd",o.style.backgroundColor="#0b5ffb",o.style.color="white"});I.addEventListener("dblclick",t=>{let e=document.getElementById("quizzosImg"),o=document.getElementById("quizzosText");e.style.backgroundColor="transparent",o.style.backgroundColor="transparent",o.style.color="black"});new Typed(".startNotepad",{strings:["To start, press the start button in the taskbar","Don't forget to press F11 for more immersion :)"],typeSpeed:40,backSpeed:20,loop:!0});let G=document.getElementById("notepadAbout"),J=document.getElementById("notepadLinks");G.addEventListener("dblclick",t=>{let e=document.getElementById("notepadAboutMe");e.classList.remove("off"),e.classList.add("open")});J.addEventListener("dblclick",t=>{let e=document.getElementById("notepadLinksShow");e.classList.remove("off"),e.classList.add("open")});let r=new Date,Q=r.getHours()+":"+r.getMinutes();document.getElementById("hour").innerHTML=Q;
