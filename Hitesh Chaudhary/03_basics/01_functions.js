// function defination

function sayMyName() {
  console.log("C");
  console.log("H");
  console.log("I");
  console.log("E");
  console.log("K");
  console.log("0");
  console.log("0");
}

// sayMyName // reference
sayMyName(); // execute , invoke, call

function addTwoNumbers(num1, num2) {
  // num1 + num2;
  // return

  // console.log(num1 + num2);

  const result = num1 + num2;
  return result;

  // return num1 + num2
}

// addTwoNumbers() // returns nan
// addTwoNumbers(7, 8)
// addTwoNumbers(3, "4"); // 34
// addTwoNumbers(3, "a"); // 3a
// addTwoNumbers(3, NaN); // nan

// const result = addTwoNumbers(3, );   // NAN
const result = addTwoNumbers(3, 5);
console.log(result); // undefined since function isnt returning anything, if the functions returns anything, the value will be stored in this variable.
// any code after return keyword doesnt work.

function loginUserMessage(username) {
  if (username === undefined || !username) {
    console.log("Please enter username");
    return;
  }

  return `${username} just logged in`;
}

// console.log(loginUserMessage("Chiekoo"));
// console.log(loginUserMessage("")); ""
// console.log(loginUserMessage()); // undefined
console.log(loginUserMessage("goku"));

// undefined and "" empty strings are by default considered false in js

function calculateCartPrice(val1, val2, ...num1) {
  // const sum = [val1, val2, ...num1]; // or

  const sum = Array.of(val1, val2, ...num1);

  const total = sum.reduce((acc, num) => acc + num, 0);

  return total;
}

console.log(calculateCartPrice(200, 300, 400, 2000));

const user = {
  username: "chiekoo",
  ages: 20,
};

function handleObject(anyObject) {
  console.log(`Username is ${anyObject.username} and age is ${anyObject.age}`);
}

// handleObject(user);
handleObject({
  username: "sam",
  age: 20,
});

const myNewArr = [200, 300, 400, 500];

function returnSecondValue(getArray) {
  return getArray[1];
}

console.log(returnSecondValue(myNewArr));
console.log(returnSecondValue([[200, 300, 400, 500]]));

function returnsArray() {
  return [10, 20, 30, 40, 50];
}

console.log(returnsArray());

function returnsObject() {
  return {
    username: "Jason Roy",
    prof: "Cricketer",
    role: "Batsman",
    fact: "Not a bengali",
  };
}

console.log(returnsObject());
