import{a as L,i as n,S}from"./assets/vendor-b0d10f48.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();const b="https://pixabay.com/api/",P="44763661-907a9c415cab9d29c7901c7cc";async function E(r="",e=1,i=15){try{return(await L.get(`${b}`,{params:{key:P,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:i}})).data}catch(s){throw console.error("Error images:",s),s}}function u(r){const e=r.map(({webformatURL:i,largeImageURL:s,tags:t,likes:o,views:a,comments:y,downloads:w})=>`<li class="gallery-item">
        <a class="gallery-link"
        href="${s}"> 
        <img class="gallery-image"
        src="${i}" 
        alt="${t}  
        width="360" 
        height="200""/>
        </a>
        <ul class = "gallery">
          <li>
            <h3>likes</h3>
            <p>${o}</p>
          </li>
          <li>
            <h3>views</h3>
            <p>${a}</p>
          </li>
          <li>
            <h3>comments</h3>
            <p>${y}</p>
          </li>
          <li>
            <h3>downloads</h3>
            <p>${w}</p>
          </li>
        </ul>
      
      </li>`).join("");m.innerHTML=e}const q=document.querySelector(".form");document.querySelector(".form-input");const g=document.querySelector(".loader"),m=document.querySelector(".gallery"),v=document.querySelector(".btn-page");let c="",l=1;const d=15;let h=0;q.addEventListener("submit",F);async function F(r){if(r.preventDefault(),c=r.target.elements.query.value.trim(),c===""){n.error({message:"Please complete the field!",theme:"dark",progressBarColor:"#FFFFFF",color:"#EF4040",position:"topRight"});return}l=1,m.innerHTML="",p();try{const e=await E(c,l,d);h=e.totalHits,e.hits.length?(u(e.hits),$.refresh(),e.hits.length<h&&f()):n.error({position:"topRight",maxWidth:"432px",backgroundColor:"red",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}catch(e){console.log(e),n.error({title:"Error",message:"Something went wrong."})}finally{g.classList.add("is-hidden")}}function p(r,e){r.classList.add("is-hidden"),e.classList.remove("is-hidden")}function f(r){r.classList.remove("is-hidden")}const $=new S(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});v.addEventListener("click",I);async function I(){l+=1,p();try{const r=await fetchImages(c,l,d);u(r.hits),l*d>=h?n.info({title:"Info",message:"We're sorry, but you've reached the end of search results."}):f()}catch{n.error({title:"Error",message:"Something went wrong. Please try again."})}finally{g.classList.add("is-hidden")}}
//# sourceMappingURL=commonHelpers.js.map
