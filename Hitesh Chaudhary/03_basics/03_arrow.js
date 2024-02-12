// This keyword current context ko refer karta hai

const user = {
  username: "chiekoo",
  age: 20,

  welcomeMessage: function () {
    console.log(`${this.username}, welcome!`);
    console.log(this);
  },
};

// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();

// console.log(this); // current context is empty object {}
// Because we are node env, In node env the this value is referring to empty object because theres no context in global

// In browser, this referes to the window object

function Child() {
  let username = "goku";
  // console.log(this);
  // console.log(this.username);  // undefined
}

Child();

// const chai = function () {
//     let username = "goku";
//     console.log(this.username);  // undefined
// };

// chai();

const chai = () => {
  let username = "goku";
  // console.log(this.username);  //undefined
  // console.log(this);  // {}
};

// chai();

// arrow function

// Implicit return 
const addTwo = (num1, num2) => {
  return num1 + num2;
};

console.log(addTwo(5, 6));



// Anothoer way => Implicit return

// const addTwoNums = () => num1 + num2 // OR
const addTwoNums = (num1 , num2) => (num1 + num2);

console.log(addTwoNums(3, 4));

const returnObject = () => ({ username: "Vegeta" }) // to return an object we have to use parenthesis
// parenthesis jabh lag jaata hai tabh automatically block lag jaata hai usme bhi kaam kiya jaa sakta hai
