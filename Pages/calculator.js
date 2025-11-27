console.log('A birdbrain');

const display = document.getElementById('display');
const buttons = document.querySelectorAll(".calc-btn");
display.value = "6"; 
let OperatorAllowed = true; 
function evil(fn) {
  return new Function('return ' + fn)();
}

buttons.forEach(function(button){
    button.addEventListener("click", function(){
        const value = button.getAttribute("Data-value");
        if (value == "C"){
            display.value = " "
            OperatorAllowed = false;
        }
        else if (value == "="){
            if (OperatorAllowed){
            display.value = evil(display.value);
        }}
        else if (["+", "-", "/", "*"].includes(value)){
            if (OperatorAllowed){
                display.value = display.value + value;
                OperatorAllowed = false;
            }
        }
        else{
            display.value = display.value + value; //plak de tekst hierbij
            OperatorAllowed = true;
}}) 
})

