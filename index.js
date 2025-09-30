import{i as y,a as L,S as b}from"./assets/vendor-xwsNXkQR.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(e){if(e.ep)return;e.ep=!0;const a=r(e);fetch(e.href,a)}})();function c(t){y.error({...w,message:t,color:"#ef4040",icon:"icon-error"})}const w={position:"topRight",titleColor:"#fff",titleSize:"16px",titleWeight:"700",titleLineHeight:"1.5",messageColor:"#fff",messageSize:"16px",messageWeight:"400",messageLineHeight:"1.5",iconColor:"#fff",theme:"dark",maxWidth:"432px"},S="52494269-f940d25beafa0bafe61525357",v="https://pixabay.com/api/",M=9;async function d(t,o){try{const i=(await L.get(v,x(t,o))).data.hits;return!i||!i.length?(c("Sorry, there are no images matching your search query. Please try again!"),[]):i}catch(r){return c(r.message),[]}}function x(t,o){return{params:{key:S,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:M,page:o}}}const s={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-more-btn")},P=new b(".gallery a",{captionsData:"alt",captionDelay:250});function m(t){const o=t.map(r=>`<li class="gallery-item">
          <a class="gallery-link" href="${r.largeImageURL}">
            <img src="${r.webformatURL}" alt="${r.tags}" class="gallery-img">
          </a>
          <ul class="img-footer">
            <li class="img-footer-item">
              <h3 class="meta-header">Likes</h3>
              <p class="meta-info">${r.likes}</p>
            </li>
            <li class="img-footer-item">
              <h3 class="meta-header">Views</h3>
              <p class="meta-info">${r.views}</p>
            </li>
            <li class="img-footer-item">
              <h3 class="meta-header">Comments</h3>
              <p class="meta-info">${r.comments}</p>
            </li>
            <li class="img-footer-item">
              <h3 class="meta-header">Downloads</h3>
              <p class="meta-info">${r.downloads}</p>
            </li>
           </ul>
       </li>`).join("");s.gallery.insertAdjacentHTML("beforeend",o),P.refresh()}function q(){s.gallery.innerHTML=""}function f(){s.loader.classList.remove("hidden")}function u(){s.loader.classList.add("hidden")}function g(){s.loadMoreBtn.classList.remove("hidden"),s.loadMoreBtn.scrollIntoView({behavior:"smooth",block:"end"})}function h(){s.loadMoreBtn.classList.add("hidden")}let l=1,p="";s.form.addEventListener("submit",async t=>{t.preventDefault();const o=t.target.elements["search-text"].value.trim();if(o){t.target.reset(),q(),f(),h(),p=o;try{const r=await d(o,l);m(r),l++,g()}finally{u()}}});s.loadMoreBtn.addEventListener("click",async()=>{h(),f();try{const t=await d(p,l);m(t),l++,g()}finally{u()}});
//# sourceMappingURL=index.js.map
