import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css               */const e=document.querySelector(".feedback-form"),s="feedback-form-state",l=()=>{const t=e.elements.email.value.trim(),a=e.elements.message.value.trim();localStorage.setItem(s,JSON.stringify({email:t,message:a}))},o=()=>{const t=localStorage.getItem(s);if(t){const{email:a,message:m}=JSON.parse(t);e.elements.email.value=a||"",e.elements.message.value=m||""}};e.addEventListener("input",l);e.addEventListener("submit",t=>{if(t.preventDefault(),!e.elements.email.value.trim()||!e.elements.message.value.trim()){alert("Fill please all fields");return}console.log("Form Data:",{email:e.elements.email.value.trim(),message:e.elements.message.value.trim()}),localStorage.removeItem(s),e.reset()});o();
//# sourceMappingURL=2-form-BERQE90-.js.map
