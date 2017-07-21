var inputText = document.getElementById("displayBox");
var printButton = document.getElementById("print-button");
var printArea = document.getElementById("print-area");


printButton.addEventListener("click",function(){
    printArea.innerText += "\n" + inputText.value;
});