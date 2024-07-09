import{i as c,S as p}from"./assets/vendor-8c59ed88.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();function m(){const r=a.value;return console.log(r),fetch(`https://pixabay.com/api/?key=44763661-907a9c415cab9d29c7901c7cc&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`).then(t=>{if(console.log(t),!t.ok)throw new Error(t.status);return t.json()})}function d(r){const i=r.map(({webformatURL:t,largeImageURL:s,tags:e,likes:o,views:n,comments:h,downloads:f})=>`<li class="gallery-item">
        <a class="gallery-link"
        href="${s}"> 
        <img class="gallery-image"
        src="${t}" 
        alt="${e}  
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
            <p>${n}</p>
          </li>
          <li>
            <h3>comments</h3>
            <p>${h}</p>
          </li>
          <li>
            <h3>downloads</h3>
            <p>${f}</p>
          </li>
        </ul>
      
      </li>`).join("");u.innerHTML=i}const y=document.querySelector(".form"),a=document.querySelector(".form-input"),l=document.querySelector(".loader"),u=document.querySelector(".gallery");l.style.display="none";y.addEventListener("submit",g);function g(r){if(r.preventDefault(),a.value.toLowerCase().trim()===""){c.error({message:"Please complete the field!",theme:"dark",progressBarColor:"#FFFFFF",color:"#EF4040",position:"topRight"});return}u.innerHTML="",w(),m().then(t=>{if(console.log(t),!t.hits.length){c.error({position:"topRight",maxWidth:"432px",backgroundColor:"red",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}d(t.hits),b.refresh()}).catch(t=>{console.log(t),c.error({title:"Error",message:"Something went wrong."})}).finally(()=>{L()})}function w(){l&&(l.style.display="block")}function L(){l&&(l.style.display="none")}const b=new p(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
