// THere are two ways to declare objects
// 1) Literals , 2) constructor

// Singleton : When we create an object via contructor, it creates a singleton object.
// Object.create()


// constructor se jabh banega tabh singleton banega
// object literals ki tarah define karenge tabh singleton nahi banta


// Object Literals


const mySym = Symbol("key1");


const JsUser = {
    name: "Chiekoo",  // bydefault system isko aise process karta hai "name"
    "my name": "Chiekoo",
    age: 18,
    [mySym] : "myKey1",  // to use it like symbol we have to wrap it with []
    location: "Pune",
    email: "chiekoo@gmail.com",
    isLoggedIn: false,
    lastLoginDays : ["Monday" , "Saturday"]
}

// console.log(JsUser.name);
// console.log(JsUser["my name"])
// console.log(typeof JsUser[mySym]);

// Object.freeze(JsUser);   // this wont let the value of key modify
// JsUser.email = "chiekoo123@gmail.com"

// console.log(JsUser);

JsUser.greeting = function () {
    console.log("Hello user");
}

JsUser.greetingTwo = function () {
    console.log(`Hello user ${this.name}`)
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


