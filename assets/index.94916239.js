(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))l(d);new MutationObserver(d=>{for(const s of d)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function o(d){const s={};return d.integrity&&(s.integrity=d.integrity),d.referrerpolicy&&(s.referrerPolicy=d.referrerpolicy),d.crossorigin==="use-credentials"?s.credentials="include":d.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(d){if(d.ep)return;d.ep=!0;const s=o(d);fetch(d.href,s)}})();let N=document.getElementById("buttonstart");N.addEventListener("click",async t=>{document.getElementById("windowsmenu").classList.toggle("openMenu")});let h=document.getElementById("mySelf"),A=document.getElementById("myProjects"),q=document.getElementById("myContact"),j=document.getElementById("desktopMyself"),X=document.getElementById("desktopProjects"),Y=document.getElementById("desktopContact"),P=document.getElementById("quizzos"),H=document.getElementById("MyF1");h.addEventListener("click",async t=>{document.getElementById("windowMySelf").classList.add("open");let o=document.getElementById("windowsmenu");o.classList.remove("openMenu"),o.classList.add("closeMenu")});A.addEventListener("click",async t=>{document.getElementById("windowMyProjects").classList.add("open");let o=document.getElementById("windowsmenu");o.classList.remove("openMenu"),o.classList.add("closeMenu")});q.addEventListener("click",async t=>{document.getElementById("windowMyContact").classList.add("open");let o=document.getElementById("windowsmenu");o.classList.remove("openMenu"),o.classList.add("closeMenu")});j.addEventListener("dblclick",t=>{let e=document.getElementById("windowMySelf");e.classList.remove("off"),e.classList.add("open")});X.addEventListener("dblclick",t=>{document.getElementById("windowMyProjects").classList.add("open")});Y.addEventListener("dblclick",t=>{document.getElementById("windowMyContact").classList.add("open")});P.addEventListener("dblclick",t=>{document.getElementById("windowQuizzos").classList.add("open")});H.addEventListener("dblclick",t=>{document.getElementById("windowMyF1").classList.add("open")});let S=document.getElementById("close"),$=document.getElementById("closeProjects"),W=document.getElementById("closeContact"),O=document.getElementById("closeNotepadDesktop"),K=document.getElementById("closeNotepadAboutMe"),G=document.getElementById("closeNotepadLinks"),J=document.getElementById("closeQuizzos"),R=document.getElementById("closeNotepadAboutQuizzos"),U=document.getElementById("closeImgQuizzos_1"),V=document.getElementById("closeImgQuizzos_2"),Z=document.getElementById("closeImgQuizzos_3"),ee=document.getElementById("closeImgQuizzos_4"),te=document.getElementById("closeImgQuizzos_5"),oe=document.getElementById("closeMyF1"),ne=document.getElementById("closeNotepadAboutMyF1"),de=document.getElementById("closeImgMyF1_1"),le=document.getElementById("closeImgMyF1_2"),se=document.getElementById("closeImgMyF1_3"),ce=document.getElementById("closeImgMyF1_4"),me=document.getElementById("closeImgMyF1_5");S.addEventListener("click",async t=>{let e=document.querySelector(".window");e.classList.remove("maximize"),e.classList.remove("open"),e.classList.add("off")});$.addEventListener("click",async t=>{let e=document.getElementById("windowMyProjects");e.classList.remove("maximizeProjects"),e.classList.remove("open"),e.classList.add("off")});W.addEventListener("click",async t=>{let e=document.getElementById("windowMyContact");e.classList.remove("maximizeContact"),e.classList.remove("open"),e.classList.add("off")});O.addEventListener("click",async t=>{let e=document.getElementById("notepadDesktop");e.classList.remove("maximizeNotepadDesktop"),e.classList.remove("open"),e.classList.add("off")});K.addEventListener("click",async t=>{let e=document.getElementById("notepadAboutMe");e.classList.remove("maximizeNotepadAboutMe"),e.classList.remove("open"),e.classList.add("off")});G.addEventListener("click",async t=>{let e=document.getElementById("notepadLinksShow");e.classList.remove("maximizeNotepadLinks"),e.classList.remove("open"),e.classList.add("off")});J.addEventListener("click",t=>{let e=document.getElementById("windowQuizzos");e.classList.remove("maximizeQuizzos"),e.classList.remove("open"),e.classList.add("off")});R.addEventListener("click",t=>{let e=document.getElementById("notepadAboutQuizzos");e.classList.remove("maximizeQuizzos"),e.classList.remove("open"),e.classList.add("off")});U.addEventListener("click",t=>{let e=document.getElementById("windowImgQuizzos_1");e.classList.remove("maximizeQuizzos"),e.classList.remove("open"),e.classList.add("off")});V.addEventListener("click",t=>{let e=document.getElementById("windowImgQuizzos_2");e.classList.remove("maximizeQuizzos"),e.classList.remove("open"),e.classList.add("off")});Z.addEventListener("click",t=>{let e=document.getElementById("windowImgQuizzos_3");e.classList.remove("maximizeQuizzos"),e.classList.remove("open"),e.classList.add("off")});ee.addEventListener("click",t=>{let e=document.getElementById("windowImgQuizzos_4");e.classList.remove("maximizeQuizzos"),e.classList.remove("open"),e.classList.add("off")});te.addEventListener("click",t=>{let e=document.getElementById("windowImgQuizzos_5");e.classList.remove("maximizeQuizzos"),e.classList.remove("open"),e.classList.add("off")});oe.addEventListener("click",t=>{let e=document.getElementById("windowMyF1");e.classList.remove("maximizeMyF1"),e.classList.remove("open"),e.classList.add("off")});ne.addEventListener("click",t=>{let e=document.getElementById("notepadAboutMyF1");e.classList.remove("maximizeMyF1"),e.classList.remove("open"),e.classList.add("off")});de.addEventListener("click",t=>{let e=document.getElementById("windowImgMyF1_1");e.classList.remove("maximizeMyF1"),e.classList.remove("open"),e.classList.add("off")});le.addEventListener("click",t=>{let e=document.getElementById("windowImgMyF1_2");e.classList.remove("maximizeMyF1"),e.classList.remove("open"),e.classList.add("off")});se.addEventListener("click",t=>{let e=document.getElementById("windowImgMyF1_3");e.classList.remove("maximizeMyF1"),e.classList.remove("open"),e.classList.add("off")});ce.addEventListener("click",t=>{let e=document.getElementById("windowImgMyF1_4");e.classList.remove("maximizeMyF1"),e.classList.remove("open"),e.classList.add("off")});me.addEventListener("click",t=>{let e=document.getElementById("windowImgMyF1_5");e.classList.remove("maximizeMyF1"),e.classList.remove("open"),e.classList.add("off")});let ie=document.getElementById("maximize"),ue=document.getElementById("maximizeProjects"),ae=document.getElementById("maximizeContact"),re=document.getElementById("maximizeNotepadDesktop"),ge=document.getElementById("maximizeNotepadAboutMe"),ye=document.getElementById("maximizeNotepadLinks"),Ie=document.getElementById("maximizeQuizzos");document.getElementById("maximizeMyF1");let Ee=document.getElementById("maximizeNotepadAboutQuizzos"),i=document.getElementById("windowMySelf"),pe=document.getElementById("windowMyProjects"),ze=document.getElementById("windowMyContact"),fe=document.getElementById("notepadDesktop"),u=document.getElementById("notepadAboutMe"),a=document.getElementById("notepadLinksShow"),r=document.getElementById("windowQuizzos");document.getElementById("windowMyF1");let g=document.getElementById("notepadAboutQuizzos");ie.addEventListener("click",async t=>{i.classList.remove("off"),i.classList.toggle("maximize")});ue.addEventListener("click",async t=>{i.classList.remove("off"),pe.classList.toggle("maximizeProjects")});ae.addEventListener("click",async t=>{i.classList.remove("off"),ze.classList.toggle("maximizeContact")});re.addEventListener("click",async t=>{i.classList.remove("off"),fe.classList.toggle("maximizeNotepadDesktop")});ge.addEventListener("click",async t=>{i.classList.remove("off"),u.classList.toggle("maximizeNotepadAboutMe"),u.style.position="absolute",u.style.top="0",u.style.left="0"});ye.addEventListener("click",async t=>{i.classList.remove("off"),a.classList.toggle("maximizeNotepadLinks"),a.style.position="absolute",a.style.top="0",a.style.left="0"});Ie.addEventListener("click",t=>{r.classList.toggle("maximizeQuizzos"),r.style.position="absolute",r.style.top="0",r.style.left="0"});Ee.addEventListener("click",t=>{g.classList.toggle("maximizeQuizzos"),g.style.position="absolute",g.style.top="0",g.style.left="0"});document.getElementById("windowMySelf");document.getElementById("body");ve(document.getElementById("windowMySelf"));function ve(t){let e=0,o=0,l=0,d=0;document.getElementById(t.id+"Header")?document.getElementById(t.id+"Header").onmousedown=s:t.onmousedown=s;function s(n){n=n||window.event,n.preventDefault(),l=n.clientX,d=n.clientY,document.onmouseup=m,document.onmousemove=c}function c(n){n=n||window.event,event.preventDefault(),e=l-n.clientX,o=d-n.clientY,l=n.clientX,d=n.clientY,t.style.top=t.offsetTop-o+"px",t.style.left=t.offsetLeft-e+"px"}function m(){document.onmouseup=null,document.onmousemove=null}}be(document.getElementById("windowMyProjects"));function be(t){let e=0,o=0,l=0,d=0;document.getElementById(t.id+"Header")?document.getElementById(t.id+"Header").onmousedown=s:t.onmousedown=s;function s(n){n=n||window.event,n.preventDefault(),l=n.clientX,d=n.clientY,document.onmouseup=m,document.onmousemove=c}function c(n){n=n||window.event,event.preventDefault(),e=l-n.clientX,o=d-n.clientY,l=n.clientX,d=n.clientY,t.style.top=t.offsetTop-o+"px",t.style.left=t.offsetLeft-e+"px"}function m(){document.onmouseup=null,document.onmousemove=null}}Le(document.getElementById("windowMyContact"));function Le(t){let e=0,o=0,l=0,d=0;document.getElementById(t.id+"Header")?document.getElementById(t.id+"Header").onmousedown=s:t.onmousedown=s;function s(n){n=n||window.event,n.preventDefault(),l=n.clientX,d=n.clientY,document.onmouseup=m,document.onmousemove=c}function c(n){n=n||window.event,event.preventDefault(),e=l-n.clientX,o=d-n.clientY,l=n.clientX,d=n.clientY,t.style.top=t.offsetTop-o+"px",t.style.left=t.offsetLeft-e+"px"}function m(){document.onmouseup=null,document.onmousemove=null}}we(document.getElementById("notepadAboutMe"));function we(t){let e=0,o=0,l=0,d=0;document.getElementById(t.id+"Header")?document.getElementById(t.id+"Header").onmousedown=s:t.onmousedown=s;function s(n){n=n||window.event,n.preventDefault(),l=n.clientX,d=n.clientY,document.onmouseup=m,document.onmousemove=c}function c(n){n=n||window.event,event.preventDefault(),e=l-n.clientX,o=d-n.clientY,l=n.clientX,d=n.clientY,t.style.top=t.offsetTop-o+"px",t.style.left=t.offsetLeft-e+"px"}function m(){document.onmouseup=null,document.onmousemove=null}}Be(document.getElementById("notepadLinksShow"));function Be(t){let e=0,o=0,l=0,d=0;document.getElementById(t.id+"Header")?document.getElementById(t.id+"Header").onmousedown=s:t.onmousedown=s;function s(n){n=n||window.event,n.preventDefault(),l=n.clientX,d=n.clientY,document.onmouseup=m,document.onmousemove=c}function c(n){n=n||window.event,event.preventDefault(),e=l-n.clientX,o=d-n.clientY,l=n.clientX,d=n.clientY,t.style.top=t.offsetTop-o+"px",t.style.left=t.offsetLeft-e+"px"}function m(){document.onmouseup=null,document.onmousemove=null}}ke(document.getElementById("windowQuizzos"));function ke(t){let e=0,o=0,l=0,d=0;document.getElementById(t.id+"Header")?document.getElementById(t.id+"Header").onmousedown=s:t.onmousedown=s;function s(n){n=n||window.event,n.preventDefault(),l=n.clientX,d=n.clientY,document.onmouseup=m,document.onmousemove=c}function c(n){n=n||window.event,event.preventDefault(),e=l-n.clientX,o=d-n.clientY,l=n.clientX,d=n.clientY,t.style.top=t.offsetTop-o+"px",t.style.left=t.offsetLeft-e+"px"}function m(){document.onmouseup=null,document.onmousemove=null}}Me(document.getElementById("notepadAboutQuizzos"));function Me(t){let e=0,o=0,l=0,d=0;document.getElementById(t.id+"Header")?document.getElementById(t.id+"Header").onmousedown=s:t.onmousedown=s;function s(n){n=n||window.event,n.preventDefault(),l=n.clientX,d=n.clientY,document.onmouseup=m,document.onmousemove=c}function c(n){n=n||window.event,event.preventDefault(),e=l-n.clientX,o=d-n.clientY,l=n.clientX,d=n.clientY,t.style.top=t.offsetTop-o+"px",t.style.left=t.offsetLeft-e+"px"}function m(){document.onmouseup=null,document.onmousemove=null}}Fe(document.getElementById("windowMyF1"));function Fe(t){let e=0,o=0,l=0,d=0;document.getElementById(t.id+"Header")?document.getElementById(t.id+"Header").onmousedown=s:t.onmousedown=s;function s(n){n=n||window.event,n.preventDefault(),l=n.clientX,d=n.clientY,document.onmouseup=m,document.onmousemove=c}function c(n){n=n||window.event,event.preventDefault(),e=l-n.clientX,o=d-n.clientY,l=n.clientX,d=n.clientY,t.style.top=t.offsetTop-o+"px",t.style.left=t.offsetLeft-e+"px"}function m(){document.onmouseup=null,document.onmousemove=null}}xe(document.getElementById("notepadAboutMyF1"));function xe(t){let e=0,o=0,l=0,d=0;document.getElementById(t.id+"Header")?document.getElementById(t.id+"Header").onmousedown=s:t.onmousedown=s;function s(n){n=n||window.event,n.preventDefault(),l=n.clientX,d=n.clientY,document.onmouseup=m,document.onmousemove=c}function c(n){n=n||window.event,event.preventDefault(),e=l-n.clientX,o=d-n.clientY,l=n.clientX,d=n.clientY,t.style.top=t.offsetTop-o+"px",t.style.left=t.offsetLeft-e+"px"}function m(){document.onmouseup=null,document.onmousemove=null}}let I=document.getElementById("notepadAbout"),E=document.getElementById("notepadLinks"),p=document.getElementById("desktopMyself"),z=document.getElementById("desktopProjects"),f=document.getElementById("desktopContact"),v=document.getElementById("recycle"),b=document.getElementById("quizzos");document.getElementById("MyF1");let L=document.getElementById("notepadQuizzos"),w=document.getElementById("imgQuizzos_1"),B=document.getElementById("imgQuizzos_2"),k=document.getElementById("imgQuizzos_3"),M=document.getElementById("imgQuizzos_4"),F=document.getElementById("imgQuizzos_5"),x=document.getElementById("notepadMyF1"),_=document.getElementById("imgMyF1_1"),Q=document.getElementById("imgMyF1_2"),C=document.getElementById("imgMyF1_3"),T=document.getElementById("imgMyF1_4"),D=document.getElementById("imgMyF1_5");I.addEventListener("click",t=>{let e=document.getElementById("nameAbout"),o=document.getElementById("notepadAboutImg");o.style.backgroundColor="#81b7fd",e.style.backgroundColor="#0b5ffb",e.style.color="white"});I.addEventListener("dblclick",t=>{let e=document.getElementById("nameAbout"),o=document.getElementById("notepadAboutImg");o.style.backgroundColor="white",e.style.backgroundColor="white",e.style.color="black"});E.addEventListener("click",t=>{let e=document.getElementById("links"),o=document.getElementById("notepadLinksImg");o.style.backgroundColor="#81b7fd",e.style.backgroundColor="#0b5ffb",e.style.color="white"});E.addEventListener("dblclick",t=>{let e=document.getElementById("links"),o=document.getElementById("notepadLinksImg");o.style.backgroundColor="white",e.style.backgroundColor="white",e.style.color="black"});p.addEventListener("click",t=>{let e=document.getElementById("myselfImg"),o=document.getElementById("myselfText");e.style.backgroundColor="#81b7fd",o.style.backgroundColor="#0b5ffb",o.style.color="white"});p.addEventListener("dblclick",t=>{let e=document.getElementById("myselfImg"),o=document.getElementById("myselfText");e.style.backgroundColor="transparent",o.style.backgroundColor="transparent"});z.addEventListener("click",t=>{let e=document.getElementById("projectsImg"),o=document.getElementById("projectsText");e.style.backgroundColor="#81b7fd",o.style.backgroundColor="#0b5ffb",o.style.color="white"});z.addEventListener("dblclick",t=>{let e=document.getElementById("projectsImg"),o=document.getElementById("projectsText");e.style.backgroundColor="transparent",o.style.backgroundColor="transparent"});f.addEventListener("click",t=>{let e=document.getElementById("contactImg"),o=document.getElementById("contactText");e.style.backgroundColor="#81b7fd",o.style.backgroundColor="#0b5ffb"});f.addEventListener("dblclick",t=>{let e=document.getElementById("contactImg"),o=document.getElementById("contactText");e.style.backgroundColor="transparent",o.style.backgroundColor="transparent"});v.addEventListener("click",t=>{let e=document.getElementById("recycleImg"),o=document.getElementById("recycleText");e.style.backgroundColor="#81b7fd",o.style.backgroundColor="#0b5ffb"});v.addEventListener("dblclick",t=>{let e=document.getElementById("recycleImg"),o=document.getElementById("recycleText");e.style.backgroundColor="transparent",o.style.backgroundColor="transparent"});b.addEventListener("click",t=>{let e=document.getElementById("quizzosImg"),o=document.getElementById("quizzosText");e.style.backgroundColor="#81b7fd",o.style.backgroundColor="#0b5ffb",o.style.color="white"});b.addEventListener("dblclick",t=>{let e=document.getElementById("quizzosImg"),o=document.getElementById("quizzosText");e.style.backgroundColor="transparent",o.style.backgroundColor="transparent",o.style.color="black"});L.addEventListener("click",t=>{let e=document.getElementById("quizzosImgNotepad"),o=document.getElementById("quizzosTextNotepad");e.style.backgroundColor="#81b7fd",o.style.backgroundColor="#0b5ffb",o.style.color="white"});L.addEventListener("dblclick",t=>{let e=document.getElementById("quizzosImgNotepad"),o=document.getElementById("quizzosTextNotepad");e.style.backgroundColor="transparent",o.style.backgroundColor="transparent",o.style.color="black"});w.addEventListener("click",t=>{let e=document.getElementById("QuizzosImg_1"),o=document.getElementById("QuizzosImg1Text");e.style.backgroundColor="#81b7fd",o.style.backgroundColor="#0b5ffb",o.style.color="white"});w.addEventListener("dblclick",t=>{let e=document.getElementById("QuizzosImg_1"),o=document.getElementById("QuizzosImg1Text");e.style.backgroundColor="transparent",o.style.backgroundColor="transparent",o.style.color="black"});B.addEventListener("click",t=>{let e=document.getElementById("QuizzosImg_2"),o=document.getElementById("QuizzosImg2Text");e.style.backgroundColor="#81b7fd",o.style.backgroundColor="#0b5ffb",o.style.color="white"});B.addEventListener("dblclick",t=>{let e=document.getElementById("QuizzosImg_2"),o=document.getElementById("QuizzosImg2Text");e.style.backgroundColor="transparent",o.style.backgroundColor="transparent",o.style.color="black"});k.addEventListener("click",t=>{let e=document.getElementById("QuizzosImg_3"),o=document.getElementById("QuizzosImg3Text");e.style.backgroundColor="#81b7fd",o.style.backgroundColor="#0b5ffb",o.style.color="white"});k.addEventListener("dblclick",t=>{let e=document.getElementById("QuizzosImg_3"),o=document.getElementById("QuizzosImg3Text");e.style.backgroundColor="transparent",o.style.backgroundColor="transparent",o.style.color="black"});M.addEventListener("click",t=>{let e=document.getElementById("QuizzosImg_4"),o=document.getElementById("QuizzosImg4Text");e.style.backgroundColor="#81b7fd",o.style.backgroundColor="#0b5ffb",o.style.color="white"});M.addEventListener("dblclick",t=>{let e=document.getElementById("QuizzosImg_4"),o=document.getElementById("QuizzosImg4Text");e.style.backgroundColor="transparent",o.style.backgroundColor="transparent",o.style.color="black"});F.addEventListener("click",t=>{let e=document.getElementById("QuizzosImg_5"),o=document.getElementById("QuizzosImg5Text");e.style.backgroundColor="#81b7fd",o.style.backgroundColor="#0b5ffb",o.style.color="white"});F.addEventListener("dblclick",t=>{let e=document.getElementById("QuizzosImg_5"),o=document.getElementById("QuizzosImg5Text");e.style.backgroundColor="transparent",o.style.backgroundColor="transparent",o.style.color="black"});x.addEventListener("click",t=>{let e=document.getElementById("MyF1ImgNotepad"),o=document.getElementById("MyF1TextNotepad");e.style.backgroundColor="#81b7fd",o.style.backgroundColor="#0b5ffb",o.style.color="white"});x.addEventListener("dblclick",t=>{let e=document.getElementById("MyF1ImgNotepad"),o=document.getElementById("MyF1TextNotepad");e.style.backgroundColor="transparent",o.style.backgroundColor="transparent",o.style.color="black"});_.addEventListener("click",t=>{let e=document.getElementById("MyF1Img_1"),o=document.getElementById("MyF1Img1Text");e.style.backgroundColor="#81b7fd",o.style.backgroundColor="#0b5ffb",o.style.color="white"});_.addEventListener("dblclick",t=>{let e=document.getElementById("MyF1Img_1"),o=document.getElementById("MyF1Img1Text");e.style.backgroundColor="transparent",o.style.backgroundColor="transparent",o.style.color="black"});Q.addEventListener("click",t=>{let e=document.getElementById("MyF1Img_2"),o=document.getElementById("MyF1Img2Text");e.style.backgroundColor="#81b7fd",o.style.backgroundColor="#0b5ffb",o.style.color="white"});Q.addEventListener("dblclick",t=>{let e=document.getElementById("MyF1Img_2"),o=document.getElementById("MyF1Img2Text");e.style.backgroundColor="transparent",o.style.backgroundColor="transparent",o.style.color="black"});C.addEventListener("click",t=>{let e=document.getElementById("MyF1Img_3"),o=document.getElementById("MyF1Img3Text");e.style.backgroundColor="#81b7fd",o.style.backgroundColor="#0b5ffb",o.style.color="white"});C.addEventListener("dblclick",t=>{let e=document.getElementById("MyF1Img_3"),o=document.getElementById("MyF1Img3Text");e.style.backgroundColor="transparent",o.style.backgroundColor="transparent",o.style.color="black"});T.addEventListener("click",t=>{let e=document.getElementById("MyF1Img_4"),o=document.getElementById("MyF1Img4Text");e.style.backgroundColor="#81b7fd",o.style.backgroundColor="#0b5ffb",o.style.color="white"});T.addEventListener("dblclick",t=>{let e=document.getElementById("MyF1Img_4"),o=document.getElementById("MyF1Img4Text");e.style.backgroundColor="transparent",o.style.backgroundColor="transparent",o.style.color="black"});D.addEventListener("click",t=>{let e=document.getElementById("MyF1Img_5"),o=document.getElementById("MyF1Img5Text");e.style.backgroundColor="#81b7fd",o.style.backgroundColor="#0b5ffb",o.style.color="white"});D.addEventListener("dblclick",t=>{let e=document.getElementById("MyF1Img_5"),o=document.getElementById("MyF1Img5Text");e.style.backgroundColor="transparent",o.style.backgroundColor="transparent",o.style.color="black"});MyF1.addEventListener("click",t=>{let e=document.getElementById("MyF1Img"),o=document.getElementById("MyF1Text");e.style.backgroundColor="#81b7fd",o.style.backgroundColor="#0b5ffb",o.style.color="white"});MyF1.addEventListener("dblclick",t=>{let e=document.getElementById("MyF1Img"),o=document.getElementById("MyF1Text");e.style.backgroundColor="transparent",o.style.backgroundColor="transparent",o.style.color="black"});new Typed(".startNotepad",{strings:["To start, press the start button in the taskbar","Don't forget to press F11 for more immersion :)"],typeSpeed:40,backSpeed:20,loop:!0});let _e=document.getElementById("notepadAbout"),Qe=document.getElementById("notepadLinks"),Ce=document.getElementById("notepadQuizzos"),Te=document.getElementById("imgQuizzos_1"),De=document.getElementById("imgQuizzos_2"),Ne=document.getElementById("imgQuizzos_3"),he=document.getElementById("imgQuizzos_4"),Ae=document.getElementById("imgQuizzos_5"),qe=document.getElementById("notepadMyF1"),je=document.getElementById("imgMyF1_1"),Xe=document.getElementById("imgMyF1_2"),Ye=document.getElementById("imgMyF1_3"),Pe=document.getElementById("imgMyF1_4"),He=document.getElementById("imgMyF1_5");_e.addEventListener("dblclick",t=>{let e=document.getElementById("notepadAboutMe");e.classList.remove("off"),e.classList.add("open")});Qe.addEventListener("dblclick",t=>{let e=document.getElementById("notepadLinksShow");e.classList.remove("off"),e.classList.add("open")});Ce.addEventListener("dblclick",t=>{let e=document.getElementById("notepadAboutQuizzos");e.classList.remove("off"),e.classList.add("open")});Te.addEventListener("dblclick",t=>{let e=document.getElementById("windowImgQuizzos_1");e.classList.remove("off"),e.classList.add("open")});De.addEventListener("dblclick",t=>{let e=document.getElementById("windowImgQuizzos_2");e.classList.remove("off"),e.classList.add("open")});Ne.addEventListener("dblclick",t=>{let e=document.getElementById("windowImgQuizzos_3");e.classList.remove("off"),e.classList.add("open")});he.addEventListener("dblclick",t=>{let e=document.getElementById("windowImgQuizzos_4");e.classList.remove("off"),e.classList.add("open")});Ae.addEventListener("dblclick",t=>{let e=document.getElementById("windowImgQuizzos_5");e.classList.remove("off"),e.classList.add("open")});qe.addEventListener("dblclick",t=>{let e=document.getElementById("notepadAboutMyF1");e.classList.remove("off"),e.classList.add("open")});je.addEventListener("dblclick",t=>{let e=document.getElementById("windowImgMyF1_1");e.classList.remove("off"),e.classList.add("open")});Xe.addEventListener("dblclick",t=>{let e=document.getElementById("windowImgMyF1_2");e.classList.remove("off"),e.classList.add("open")});Ye.addEventListener("dblclick",t=>{let e=document.getElementById("windowImgMyF1_3");e.classList.remove("off"),e.classList.add("open")});Pe.addEventListener("dblclick",t=>{let e=document.getElementById("windowImgMyF1_4");e.classList.remove("off"),e.classList.add("open")});He.addEventListener("dblclick",t=>{let e=document.getElementById("windowImgMyF1_5");e.classList.remove("off"),e.classList.add("open")});let Se=document.getElementById("buttonCopy"),$e=document.getElementById("email").innerHTML;Se.addEventListener("click",()=>{try{navigator.clipboard.writeText($e)}catch(t){console.error("Failed to copy: ",t)}});let y=new Date,We=y.getHours()+":"+y.getMinutes();document.getElementById("hour").innerHTML=We;
