console.log("For in Loop");

const myObj = {
    js: "JavaScript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
};

for (const key in myObj) {
    console.log(key)  // it prints all the keys of the object
}

// to get the value

for (const key in myObj) {
    // console.log(myObj[key]);
    console.log(`${key} shortcut is for ${myObj[key]}`);
}



// for in with arrays

const arr = [1, 2, 3, 4, 5];

for (const key in arr) {
    console.log(`index of ${arr[key]} is ${key}`);
}

let myArr = ["Doraemon", "Shinchan", "Perman", "Goku", "Vegeta", "Hatori"];

for (const character in myArr) {
    console.log(`${myArr[character]} has index ${character}`);
}

// it only returns index of the array elements



