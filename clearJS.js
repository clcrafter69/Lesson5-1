var inputText = document.getElementById("displayBox");
var printButton = document.getElementById("print-button");
var clearButton = document.getElementById("clear-button");
var printArea = document.getElementById("print-area");


printButton.addEventListener("click",function(){
    printArea.innerText += "\n" + inputText.value;
});

clearButton.addEventListener("click",function(){
    printArea.innerHTML = " ";
});