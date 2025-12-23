const startBtn = document.getElementById("start"); 
const minigamecomingsoonBtn = document.getElementById("minigamecomingsoon"); 
const exitBtn = document.getElementById("exit"); 
startBtn.onclick = () => { 
  window.location.href = "adventure/manchoi.html"; 
}; 
minigamecomingsoonBtn.onclick = () => { 
  window.location.href = "minigame/minigame.html"; 
};
exitBtn.onclick = () => { 
  alert("Exit rồi thì tắt tab đi"); 
};
const v = loading;
v.play().catch(()=>{});
v.requestFullscreen?.();
v.onended=()=>v.remove();
