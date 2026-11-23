
const pick=l=>{document.body.className=l;try{localStorage.setItem("lang",l)}catch(e){}};
let l="en";try{l=localStorage.getItem("lang")||((navigator.language||"en").startsWith("tr")?"tr":"en")}catch(e){}
pick(l);document.querySelectorAll(".lang").forEach(b=>b.onclick=()=>pick(document.body.className==="tr"?"en":"tr"));
