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
  console.log("Equal data type");
}

let score = 200;

if (score > 100) {
  const power = "fly";
  console.log(`User power : ${power}`);

  var morePower = "Microscopic vision";
  console.log(`more user power : ${morePower}`);
}

// console.log(`User power : ${power}`)  //  wont work -> reason : scope
// console.log(`more user power ${morePower}`); // works -> reason : scope

let balance = 1000;

if (balance < 500) {

  console.log("Less than 500");

} else if (balance < 750) {

  console.log("less than 750");

} else if (balance < 900) {

  console.log("less than 900");

} else {

  console.log("Greater than all");
}


// we can also use &&, ||

let userLoggedIn = true;
let debitCard = true;

if (userLoggedIn && debitCard) {  // only works when both the condition are true
    console.log("Allowed to purchase")
}

if (userLoggedIn && !debitCard) {
    console.log("Must be either logged in or must have a debit card to purchase");
}

if (userLoggedIn || !debitCard) { // only works if either the condition is true
    console.log("Must be either logged in or must have a debit card to purchase");
}



