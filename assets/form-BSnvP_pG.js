import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css               */const s=(e,r)=>{try{localStorage.setItem(e,JSON.stringify(r))}catch(o){console.error("Error saving to localStorage",o)}},l=e=>{try{const r=localStorage.getItem(e);return r?JSON.parse(r):void 0}catch(r){console.error("Error reading from localStorage",r)}},a=document.querySelector(".js-feedback-form"),t={email:"",message:""},m=()=>{const e=l("feedback-form-state");e&&(a.email.value=e.email||"",a.message.value=e.message||"",Object.assign(t,e))};a.addEventListener("input",e=>{const{name:r,value:o}=e.target;t[r]=o.trim(),s("feedback-form-state",t)});a.addEventListener("submit",e=>{if(e.preventDefault(),!t.email||!t.message){alert("Будь ласка, заповніть усі поля");return}console.log(t),localStorage.removeItem("feedback-form-state"),a.reset(),t.email="",t.message=""});m();