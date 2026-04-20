// ==== V7.3 Map (Leaflet) ====
let __map, __player, __target;
function initMap(lat=42.55,lng=3.02){
  if(!window.L) return;
  __map = L.map('map').setView([lat,lng], 15);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(__map);
  __player = L.marker([lat,lng]).addTo(__map);
}
function updateMap(){
  if(!__map||!__player||!window.__userPos) return;
  __player.setLatLng([__userPos.lat, __userPos.lng]);
  __map.setView([__userPos.lat, __userPos.lng]);
}
setInterval(updateMap, 2000);
