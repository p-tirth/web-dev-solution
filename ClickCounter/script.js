let count = 0;

let resetBtn = document.getElementById("reset")
let increaseBtn = document.getElementById("up")
let decreaseBtn = document.getElementById("down")

let display = document.getElementById("count")

function updateDisplay(x){
    display.innerText = x;
}

function onUp(){
    let count = Number(display.innerText)
    updateDisplay(count + 1)
}
function onDown(){
    let count = Number(display.innerText)
    updateDisplay(count - 1)
}
function onReset(){
    updateDisplay(0) 
}


resetBtn.addEventListener("click",onReset);
increaseBtn.addEventListener("click",onUp);
decreaseBtn.addEventListener("click",onDown);
