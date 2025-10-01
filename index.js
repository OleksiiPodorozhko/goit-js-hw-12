import{i as f,a as b,S as P}from"./assets/vendor-xwsNXkQR.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function o(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(r){if(r.ep)return;r.ep=!0;const a=o(r);fetch(r.href,a)}})();function c(e){f.error({...d,message:e,color:"#ef4040",icon:"icon-error"})}function v(e){f.info({...d,message:e,color:"#09f",icon:"icon-bell"})}const d={position:"topRight",titleColor:"#fff",titleSize:"16px",titleWeight:"700",titleLineHeight:"1.5",messageColor:"#fff",messageSize:"16px",messageWeight:"400",messageLineHeight:"1.5",iconColor:"#fff",theme:"dark",maxWidth:"432px"},S="52494269-f940d25beafa0bafe61525357",M="https://pixabay.com/api/",m=15;async function u(e,t){try{const o=await b.get(M,x(e,t)),s=o.data.hits;if(!s||!s.length)return c("Sorry, there are no images matching your search query. Please try again!"),{images:[],isLastPage:!0};const r=q(o.data.totalHits,t);return r&&v("You have reached the end of the gallery!"),{images:s,isLastPage:r}}catch(o){return c(o.message),{images:[],isLastPage:!0}}}function x(e,t){return{params:{key:S,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:m,page:t}}}function q(e,t){const o=Math.ceil(e/m);return t>=o}const i={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-more-btn")},B=new P(".gallery a",{captionsData:"alt",captionDelay:250});function g(e){const t=e.map(o=>`<li class="gallery-item">
          <a class="gallery-link" href="${o.largeImageURL}">
            <img src="${o.webformatURL}" alt="${o.tags}" class="gallery-img">
          </a>
          <ul class="img-footer">
            <li class="img-footer-item">
              <h3 class="meta-header">Likes</h3>
              <p class="meta-info">${o.likes}</p>
            </li>
            <li class="img-footer-item">
              <h3 class="meta-header">Views</h3>
              <p class="meta-info">${o.views}</p>
            </li>
            <li class="img-footer-item">
              <h3 class="meta-header">Comments</h3>
              <p class="meta-info">${o.comments}</p>
            </li>
            <li class="img-footer-item">
              <h3 class="meta-header">Downloads</h3>
              <p class="meta-info">${o.downloads}</p>
            </li>
           </ul>
       </li>`).join("");i.gallery.insertAdjacentHTML("beforeend",t),B.refresh()}function $(){i.gallery.innerHTML=""}function h(){i.loader.classList.remove("hidden")}function p(){i.loader.classList.add("hidden")}function y(){i.loadMoreBtn.classList.remove("hidden")}function L(){i.loadMoreBtn.classList.add("hidden")}function H(){window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})}let n=1,w="";i.form.addEventListener("submit",async e=>{e.preventDefault();const t=e.target.elements["search-text"].value.trim();if(n=1,!t){c("Please fill in this field!");return}e.target.reset(),$(),h(),L(),w=t;try{const{images:o,isLastPage:s}=await u(t,n);g(o),n++,!s&&y()}finally{p()}});i.loadMoreBtn.addEventListener("click",async()=>{L(),h();try{const{images:e,isLastPage:t}=await u(w,n);g(e),n++,!t&&y(),H()}finally{p()}});
//# sourceMappingURL=index.js.map
