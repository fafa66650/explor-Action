// ==== V7.3 Codes (GitHub-only) ====
const SECRET = "EXPLORACTION2026";
function hashCode(str){let h=0;for(let i=0;i<str.length;i++){h=(h<<5)-h+str.charCodeAt(i);h|=0;}return h.toString();}
function validateCode(code){
  const p = code.split("|");
  if(p.length!==6) return false;
  const [EA, mission, level, expiry, serial, sig] = p;
  const base = `${EA}|${mission}|${level}|${expiry}|${serial}|${SECRET}`;
  if(hashCode(base)!==sig) return false;
  if(Date.now()>+expiry) return false;
  const used = JSON.parse(localStorage.getItem("usedCodes")||"[]");
  if(used.includes(serial)) return false;
  used.push(serial);
  localStorage.setItem("usedCodes", JSON.stringify(used));
  return {mission, level};
}
