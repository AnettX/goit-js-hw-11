import{i as c}from"./assets/vendor-32231325.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const a={formEl:document.querySelector(".js-search-form"),imgEl:document.querySelector(".js-image-container")};a.formEl.addEventListener("submit",l);function l(t){t.preventDefault();const r=t.target.elements.text.value;m(r).then(n=>{f(n),n.hits.length===0&&c.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),t.target.elements.text.value=""})}function m(t){const r="https://pixabay.com/api/",n=new URLSearchParams({key:"42120259-494341598d0c2875f9db82d6d",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}),s=`${r}?${n.toString()}`;return console.log(n.toString()),console.log(s),fetch(s).then(e=>e.json())}function u(t){return`
  <div class="photo-container">
    <img
      src="${t.webformatURL}"
      alt="${t.tags}"
      class="photo"
    />
  </div>
  <div class="photo-body">
    <p class="photo-name">Likes ${t.likes}</p>
    <p class="photo-name">Views ${t.views}</p>
    <p class="photo-name">Comments ${t.comments}</p>
    <p class="photo-name">Downloads ${t.downloads}</p>
  </div>`}function f(t){const r=t.hits.map(n=>u(n)).join("");a.imgEl.innerHTML=r}
//# sourceMappingURL=commonHelpers.js.map
