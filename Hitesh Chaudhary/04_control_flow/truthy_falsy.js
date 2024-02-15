console.log("Truthy and Falsy values");

const userEmail = "chiekoo@gmail.com";

if (userEmail) {
    console.log(`user email : ${userEmail}`);
} else {
    console.log("No email");
}

// Falsy values
// false , 0,-0, Bigint (0n) ,"" , undefined, null, NaN.

// Except the values , all the values in JS universe is considered true;

// Truthy values that can surprise us.
// "0" , "false" or '0 , 'false' , " " or '', [] , {} , function(){} => empty fns


let emptyArr = [];

if (emptyArr.length === 0) {
    console.log("Array is empty");
}

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}


console.log(false == 0);  // true
console.log(false == '');  // true
console.log(0 == "");  // true
console.log(0 == NaN);  // false
console.log(0 === NaN);  // false



// Nullish Coalescing Operator (??) : null undefined


let val1;
// val = 5 ?? 10;  // 5
// val = null ?? 10;  // 10
// val = undefined ?? 5 // 5

// val = null ?? 10 ?? 5  // 10
val = undefined ?? 5 ?? 10   // 5

console.log(val);
