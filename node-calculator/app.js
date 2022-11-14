const readline = require("readline-sync");

let num1 = readline.questionInt("Please enter your first number:");
let num2 = readline.questionInt("Please enter your second number: ");
let operator = readline.question("Please ender the operation to perform(add, sub, mul, div) :");

// A function that adds two numbers and returns the result
function add (num1, num2) {
    return num1 + num2
}
//  A function that multiplies two numbers and returns the result
function mul (num1, num2) {
    return num1 * num2
}
//  A function that divides two numbers and returns the result
function div (num1, num2) {
    return num1 / num2
}
//  A function that subtracts two numbers and returns the result 
function sub (num1, num2) {
    return num1 - num2
}
// Based on the operation entered by the user, you will call one of your 4 functions to perform the correct operation, You will then print to the console: *The result is: [the result]*

function calculator(num1, num2, operator) {
    if (operator == "add") {
       console.log("the result is: " + add(num1, num2))
    } else if(operator == "sub") {
        console.log("the result is: " + sub(num1, num2))
    } else if (operator == "mul"){
        console.log("the result is: " + mul(num1, num2))
    } else {
        console.log("the result is: " + div(num1, num2))
    }
}

calculator(num1,num2, operator);
