import{a as S,S as P,i as n}from"./assets/vendor-b11e2a50.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();const q="https://pixabay.com/api/",v="44763661-907a9c415cab9d29c7901c7cc";async function m(r="",e=1,i=15){try{return(await S.get(`${q}`,{params:{key:v,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:i}})).data}catch(s){throw console.error("Error images:",s),s}}function p(r){const e=r.map(({webformatURL:i,largeImageURL:s,tags:t,likes:o,views:a,comments:L,downloads:b})=>`<li class="gallery-item">
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
            <p>${L}</p>
          </li>
          <li>
            <h3>downloads</h3>
            <p>${b}</p>
          </li>
        </ul>
      
      </li>`).join("");f.innerHTML=e,E.refresh()}const E=new P(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}),f=document.querySelector(".gallery"),F=document.querySelector(".form"),h=document.querySelector(".loader"),c=document.querySelector(".btn-page");let d="",l=1;const g=15;let u=0;F.addEventListener("submit",I);async function I(r){if(r.preventDefault(),d=r.target.elements.query.value.trim(),d===""){n.error({message:"Please complete the field!",theme:"dark",progressBarColor:"#FFFFFF",color:"#EF4040",position:"topRight"});return}l=1,f.innerHTML="",y(c,h);try{const e=await m(d,l,g);u=e.totalHits,e.hits.length?(p(e.hits),e.hits.length<u&&w(c)):n.error({position:"topRight",maxWidth:"432px",backgroundColor:"red",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}catch(e){console.log(e),n.error({title:"Error",message:"Something went wrong."})}finally{h.classList.add("is-hidden")}}c.addEventListener("click",$);async function $(){l+=1,y(c,h);try{const r=await m(d,l,g);p(r.hits),l*g>=u?n.info({title:"Info",message:"We're sorry, but you've reached the end of search results."}):w(c);const s=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:s*2,left:s*2,behavior:"smooth"})}catch{n.error({title:"Error",message:"Something went wrong. Please try again."})}finally{h.classList.add("is-hidden")}}function y(r,e){r.classList.add("is-hidden"),e.classList.remove("is-hidden")}function w(r){r.classList.remove("is-hidden")}
//# sourceMappingURL=commonHelpers.js.map
