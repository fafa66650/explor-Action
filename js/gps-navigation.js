(function(){
'use strict';
const toRad=d=>d*Math.PI/180;
function distanceM(a,b){const R=6371000,p1=toRad(a.lat),p2=toRad(b.lat),dp=toRad(b.lat-a.lat),dl=toRad(b.lng-a.lng),x=Math.sin(dp/2)**2+Math.cos(p1)*Math.cos(p2)*Math.sin(dl/2)**2;return 2*R*Math.atan2(Math.sqrt(x),Math.sqrt(1-x));}
function median(values){const a=values.filter(Number.isFinite).sort((x,y)=>x-y);if(!a.length)return null;const i=Math.floor(a.length/2);return a.length%2?a[i]:(a[i-1]+a[i])/2;}
function quality(accuracy,spread){if(!Number.isFinite(accuracy))return {level:'unknown',label:'Signal inconnu'};if(accuracy<=12&&spread<=12)return {level:'excellent',label:'GPS excellent'};if(accuracy<=25&&spread<=25)return {level:'good',label:'GPS fiable'};if(accuracy<=45&&spread<=45)return {level:'fair',label:'GPS moyen'};return {level:'poor',label:'GPS faible'};}
function messageFor(q){return q.level==='excellent'||q.level==='good'?'Position stabilisée.':q.level==='fair'?'Position utilisable avec prudence. Reste quelques secondes à découvert.':'Signal GPS trop imprécis. Éloigne-toi des murs, reste à découvert et réessaie.';}
function stableSample(options={}){
  const count=options.count||7, timeout=options.timeout||12000, maxAccuracy=options.maxAccuracy||80;
  return new Promise((resolve,reject)=>{
    if(!navigator.geolocation)return reject(new Error('GPS indisponible sur cet appareil.'));
    const samples=[];let finished=false,timer=null,id=null;
    const done=()=>{if(finished)return;finished=true;try{navigator.geolocation.clearWatch(id)}catch{};clearTimeout(timer);
      const usable=samples.filter(s=>Number.isFinite(s.accuracy)&&s.accuracy<=maxAccuracy);
      const src=usable.length>=3?usable:samples;
      if(!src.length)return reject(new Error('Aucune position GPS exploitable.'));
      const lat=median(src.map(s=>s.lat)),lng=median(src.map(s=>s.lng)),accuracy=median(src.map(s=>s.accuracy));
      const center={lat,lng};const spread=Math.max(0,...src.map(s=>distanceM(center,s)));
      const q=quality(accuracy,spread);
      resolve({lat,lng,accuracy,altitude:median(src.map(s=>s.altitude)),heading:median(src.map(s=>s.heading)),speed:median(src.map(s=>s.speed)),spread,sampleCount:src.length,quality:q.level,qualityLabel:q.label,message:messageFor(q),timestamp:Date.now()});
    };
    id=navigator.geolocation.watchPosition(p=>{const c=p.coords;samples.push({lat:c.latitude,lng:c.longitude,accuracy:c.accuracy,altitude:c.altitude,heading:c.heading,speed:c.speed,timestamp:p.timestamp});if(samples.length>=count)done();},e=>{if(samples.length>=2)done();else reject(new Error(e.code===1?'Autorisation GPS refusée.':e.code===2?'Position indisponible.':'Le GPS met trop de temps à répondre.'));},{enableHighAccuracy:true,maximumAge:0,timeout:Math.min(timeout,9000)});
    timer=setTimeout(done,timeout);
  });
}
function evaluateTarget(fix,target,radius){const d=distanceM(fix,target);const safeMargin=Math.min(18,Math.max(4,(fix.accuracy||0)*0.35));const threshold=Math.max(8,Number(radius)||25)+safeMargin;const reliable=fix.quality!=='poor'&&Number(fix.accuracy||999)<=55;return {distance:Math.round(d),threshold:Math.round(threshold),inside:d<=threshold,reliable,canUnlock:d<=threshold&&reliable};}
function watch(onFix,onError){if(!navigator.geolocation)return null;return navigator.geolocation.watchPosition(p=>{const c=p.coords;onFix?.({lat:c.latitude,lng:c.longitude,accuracy:c.accuracy,altitude:c.altitude,heading:c.heading,speed:c.speed,timestamp:p.timestamp});},onError,{enableHighAccuracy:true,maximumAge:1500,timeout:10000});}
function clear(id){if(id!=null&&navigator.geolocation)navigator.geolocation.clearWatch(id);}
window.OutdoorGPS={distanceM,stableSample,evaluateTarget,watch,clear,quality};
})();
