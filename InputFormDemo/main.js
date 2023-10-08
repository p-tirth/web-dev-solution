
let userInput = document.getElementById("userInput")
let submitButton = document.getElementById("submit")
let display = document.getElementById("display")


function onSubmit(){
    // console.log("button pressed") 
    let displayText = userInput.value
    // console.log(displayText)
    display.innerText = displayText
};

submitButton.addEventListener("click",onSubmit);
