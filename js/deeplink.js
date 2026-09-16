(function(){
'use strict';
function read(){const u=new URL(location.href);const hash=new URLSearchParams((location.hash||'').replace(/^#/,''));return {access:u.searchParams.get('access')||hash.get('access'),mission:u.searchParams.get('mission')||hash.get('mission'),territory:u.searchParams.get('territory')||hash.get('territory')};}
function clean(){try{const u=new URL(location.href);['access','mission','territory'].forEach(k=>u.searchParams.delete(k));history.replaceState({},'',u.pathname+(u.search||'')+(u.hash&&u.hash.startsWith('#access=')?'':u.hash));}catch{}}
window.ExplorDeepLink={read,clean};
})();
