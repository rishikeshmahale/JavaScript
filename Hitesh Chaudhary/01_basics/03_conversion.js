console.log("Conversion in JS");

// let score = 30;
let score = "30";

console.log(typeof score);     // string
console.log(typeof (score));  // string

let valueInNumber = Number(score);
console.log(typeof valueInNumber);   //Number


let age = "23abc";
console.log(age);
console.log(typeof age);

let ageInNumber = Number(age);
console.log(ageInNumber);  // NaN
console.log(typeof ageInNumber);

// NaN is also a special type

let nullVal = null;
console.log(typeof nullVal);

let convertNullVal = Number(nullVal);
console.log(typeof convertNullVal);  // number
console.log(convertNullVal); // 0

let undefVal = undefined;
console.log(undefVal);  // undefined
console.log(typeof undefVal);  // undefined

let convertUndefVal = Number(undefVal);
console.log(typeof convertUndefVal);   // number
console.log(convertUndefVal);          // NaN


// Number conversions

// "33"=> 33 => number
// "33abc" => 33abc => NaN
// true => 1 => number
// false => 0 => number
// null => 0 => number
// undefined => NaN => number




// Boolean Conversion

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);  // true  --> false (for 0)
console.log(typeof booleanIsLoggedIn);  // boolean


let isExist = "";

let booleanIsExist = Boolean(isExist);
console.log(booleanIsExist);  // false in case of empty but if has some value even if it is empty space it will be true

let trick = " ";
let booleanTrick = Boolean(trick);
console.log("booleanTrick : ", booleanTrick);

console.log(Boolean(NaN));  // false
console.log(Boolean(undefined));  // false
console.log(Boolean(null));   // false
console.log(Boolean("KK"));   // true



// To String Conversion

const num = 10;
console.log(typeof String(num)) // string

const bool = false || true;
console.log(typeof String(bool)); // string


