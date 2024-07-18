import{a as h,i as l,S as f}from"./assets/vendor-b0d10f48.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();let c=1,g=15;async function y(){const s=u.value;console.log(s);const r="44763661-907a9c415cab9d29c7901c7cc",o=new URLSearchParams({per_page:g,page:c});return(await h.get(`https://pixabay.com/api/?key=${r}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true${o}`)).data}function w(s){const r=s.map(({webformatURL:o,largeImageURL:n,tags:e,likes:t,views:a,comments:d,downloads:m})=>`<li class="gallery-item">
        <a class="gallery-link"
        href="${n}"> 
        <img class="gallery-image"
        src="${o}" 
        alt="${e}  
        width="360" 
        height="200""/>
        </a>
        <ul class = "gallery">
          <li>
            <h3>likes</h3>
            <p>${t}</p>
          </li>
          <li>
            <h3>views</h3>
            <p>${a}</p>
          </li>
          <li>
            <h3>comments</h3>
            <p>${d}</p>
          </li>
          <li>
            <h3>downloads</h3>
            <p>${m}</p>
          </li>
        </ul>
      
      </li>`).join("");p.innerHTML=r}const L=document.querySelector(".form"),u=document.querySelector(".form-input"),i=document.querySelector(".loader"),p=document.querySelector(".gallery");i.style.display="none";L.addEventListener("submit",P);async function P(s){s.preventDefault();const r=u.value.toLowerCase().trim();if(r===""){l.error({message:"Please complete the field!",theme:"dark",progressBarColor:"#FFFFFF",color:"#EF4040",position:"topRight"});return}b();try{const o=await y(r);if(!o.hits.length){l.error({position:"topRight",maxWidth:"432px",backgroundColor:"red",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}p.innerHTML="",w(o.hits),$.refresh()}catch(o){console.log(o),l.error({title:"Error",message:"Something went wrong."})}finally{q()}}const S=document.querySelector(".btn-page");S.addEventListener("click",async()=>{if(c>totlPages)return l.error({position:"topRight",message:"We're sorry, there are no more posts to load"})});function b(){i&&(i.style.display="block")}function q(){i&&(i.style.display="none")}const $=new f(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
