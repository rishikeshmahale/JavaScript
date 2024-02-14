console.log("Control Flow");

// if (true) {
//     console.log("Code gets executed");
// };

// if (false) {
//     console.log("Code doesn't gets executed");
// }

// the condition between the parenthesis () has true be true inorder to run the code inside the scope.

if (true) {
  console.log("Code gets executed");
} else {
  console.log("Code doesn't gets executed");
}

if (false) {
  console.log("Code gets executed");
} else {
  console.log("Code doesn't gets executed");
}

// Comparision operators can also be used to check the condition inorder to run the code
// > , < , >= , <= , ! , != , == , === ,

let num = 10;

if (num < 10) {
  console.log(`${num} is less than 10`);
}

if (num > 10) {
  console.log(`${num} is more than 10`);
}

if (num != 10) {
  console.log(`${num} is not equal to 10`);
}

if (num !== 10) {
  console.log(`${num} is not equal to 10`);
}

if (num == 10) {
  console.log(`${num} is equal to 10`);
}

if (num === 10) {
  console.log(`${num} is equal to 10 with same data type "${typeof num}"`);
}


// Shorthand
if (num == 10) console.log("Condition Satisfied"), console.log("num is 10");
//  not recommended




if (num != 10) {
    console.log("Not equal");
} else {
    console.log("Equal");
}
// the else block runs when the condition/conditions of the if block does not satisfies


let newNum = "20";

if (newNum !== 20) {
    console.log("Not equal data type");
} else {
    console.log("Equal data type")
}


