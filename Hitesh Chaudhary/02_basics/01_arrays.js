

const myArr1 = [1, 2, 3, 4, 5];
// console.log(myArr1);

// console.log(myArr1[0]);

const myArr2 = myArr1;   // shallow copy : shares the same reference
// console.log(myArr2);

const myArr3 = [...myArr1];  // deep copy : does not shares the same reference
// console.log(myArr3);


// Array Methods

myArr1.push(6);
// console.log(myArr1);

myArr1.pop();
// console.log(myArr1);

const shiftArr = myArr1.shift();
// console.log(myArr1);
// console.log(shiftArr);

const unshiftArr = myArr1.unshift(1)
// console.log(myArr1);
// console.log(unshiftArr);

// delete myArr1[0];
// console.log(myArr1);  // leaves empty holes


// questionaire methods

// console.log(myArr1.includes(9));
// console.log(myArr1.indexOf(9)); // -1 since it doesnt exist
// console.log(myArr1.indexOf(3)) // 2

// const newArr = myArr1.join();
// console.log(newArr);
// console.log(typeof newArr);  // string


// slice
// console.log("A ", myArr1);

// console.log(myArr1.slice(1, 3));  // retruns the arrays with the required values excluding the range

// console.log("B ", myArr1);  // does not modify the original array


// splice
// console.log("A ", myArr1);

// console.log(myArr1.splice(1, 3)); // retruns the arrays with the required values including the range

// console.log("B ", myArr1);  // does modify the original array



const marvel_heroes = ["thor", "Ironman", "spiderman"];

const dc_heroes = ["superman", "flash", "batman"];

// marvel_heroes.push(dc_heroes);  //array inside an array(dc_heroes)
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][0]) // to access single element inside array of an array
// What happened here is that array access any type of entry value and it took the other array as a single element


// concat => does the same work as above


// const allHeroes = marvel_heroes.concat(dc_heroes);
// console.log(allHeroes); //[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]
// concat retruns a new array but if we just console the operation then the output will be the same as above. concat will push the other array as a single element.
// BUt if we store the new array value , it will merge both the arrays
// concat return a new array with updated values without modifying the original array


// const allNewHeroes = [...marvel_heroes, ...dc_heroes];
// console.log(allNewHeroes);


// flat
const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
// console.log(anotherArr);

const real_Another_Array = anotherArr.flat(Infinity); // or upto any depth
// console.log(real_Another_Array);
// console.log(anotherArr);



// isArray
// console.log(Array.isArray("Chiekoo"))

// from() converts any value to array
// console.log(Array.from("Chiekoo")) 
// [
//     'C', 'h', 'i',
//     'e', 'k', 'o',
//     'o'
//   ]


console.log(Array.from({ name: "Chiekoo" })); // [] empty array since we have to specify what values we want as array i.e keys or values


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2 , score3)) // Returns a new array from a set of elements.;























