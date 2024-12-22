function moveRandomElement(x) {
    x.style.position = "absolute";
    x.style.top = Math.floor(Math.random() * 90 + 5) + "%";
    x.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

const moveRandom = document.querySelector("#move-random");

moveRandom.addEventListener("mouseenter", function(e){
    moveRandomElement(e.target);  // Call the function with the target element
});
