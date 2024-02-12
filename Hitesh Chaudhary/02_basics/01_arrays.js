

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

console.log(myArr1.includes(9));
console.log(myArr1.indexOf(9)); // -1 since it doesnt exist
console.log(myArr1.indexOf(3)) // 2

const newArr = myArr1.join();
console.log(newArr);
