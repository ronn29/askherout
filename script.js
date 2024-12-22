function moveRandomElement(x) {
    x.style.position = "absolute";
    x.style.top = Math.floor(Math.random() * 90 + 5) + "%";  
    x.style.left = Math.floor(Math.random() * 90 + 5) + "%"; 
}


const moveRandom = document.querySelector("#move-random");


function onMove(e) {
    moveRandomElement(e.target); 
}


moveRandom.addEventListener("mouseenter", onMove);   
moveRandom.addEventListener("touchstart", onMove);  
