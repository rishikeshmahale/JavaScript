
// function defination

function sayMyName() {
    console.log("C")
    console.log("H")
    console.log("I")
    console.log("E")
    console.log("K")
    console.log("0")
    console.log("0")
}


// sayMyName // reference
sayMyName();  // execute , invoke, call




function addTwoNumbers(num1 , num2) {
    // num1 + num2;
    // return

    // console.log(num1 + num2);


    const result = num1 + num2;
    return result;

    // return num1 + num2 

};

// addTwoNumbers() // returns nan
// addTwoNumbers(7, 8)   
// addTwoNumbers(3, "4"); // 34
// addTwoNumbers(3, "a"); // 3a
// addTwoNumbers(3, NaN); // nan

// const result = addTwoNumbers(3, );   // NAN
const result = addTwoNumbers(3, 5);
console.log(result);  // undefined since function isnt returning anything, if the functions returns anything, the value will be stored in this variable.
// any code after return keyword doesnt work.


function loginUserMessage(username) {

    if (username === undefined  || !username) {
        console.log("Please enter username");
        return;
    }

    return `${username} just logged in`
};

// console.log(loginUserMessage("Chiekoo"));
// console.log(loginUserMessage("")); ""
// console.log(loginUserMessage()); // undefined
console.log(loginUserMessage("goku")); 

// undefined and "" empty strings are by default considered false in js
