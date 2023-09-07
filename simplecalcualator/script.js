var result1 = document.getElementById("result")
function add () {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    num1 = parseInt(num1);
    num2 = parseInt(num2);


    var sum = num1 + num2 ;
    result1.innerHTML = sum;
}
function subtract () {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    num1 = parseInt(num1);
    num2 = parseInt(num2);


    var sum = num1 - num2 ;
    result1.innerHTML = sum;
}
function multiply () {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    num1 = parseInt(num1);
    num2 = parseInt(num2);


    var sum = num1 * num2 ;
    result1.innerHTML = sum;
}
function divide () {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    num1 = parseInt(num1);
    num2 = parseInt(num2);


    var sum = num1 / num2 ;
    result1.innerHTML = sum;
}