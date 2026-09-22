(function(){
'use strict';
function announce(text){let el=document.getElementById('sr-status');if(!el){el=document.createElement('div');el.id='sr-status';el.className='sr-only';el.setAttribute('role','status');el.setAttribute('aria-live','polite');document.body.appendChild(el);}el.textContent='';requestAnimationFrame(()=>el.textContent=text);}
function enhance(root=document){root.querySelectorAll('button:not([type])').forEach(b=>b.setAttribute('type','button'));root.querySelectorAll('img:not([alt])').forEach(img=>img.setAttribute('alt',''));root.querySelectorAll('a[target="_blank"]').forEach(a=>{if(!a.getAttribute('aria-label'))a.setAttribute('aria-label',`${a.textContent.trim()} (nouvel onglet)`)});}
const obs=new MutationObserver(ms=>{for(const m of ms)m.addedNodes.forEach(n=>{if(n.nodeType===1)enhance(n)});});
document.addEventListener('DOMContentLoaded',()=>{enhance();obs.observe(document.body,{childList:true,subtree:true});});
window.ExplorA11y={announce,enhance};
})();
