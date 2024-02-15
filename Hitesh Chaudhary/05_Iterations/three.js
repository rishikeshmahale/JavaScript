console.log("for of loop");

// const arr = ["", "", "", ""];
// const arr = [{}, {}, {}, {}];

const arr = [1, 2, 3, 4, 5];

// for (const iterator of object) {
    
// } 
// Object word yaha pe broader term pe use kiya jaa raha hai k kis object pe aap loop lagana chahate hai, js object k saath confuse nahi karna hai.

for (const num of arr) {
    console.log(num);
};

let myArr = ["Doraemon", "Shinchan", "Perman", "Goku", "Vegeta", "Hatori"];

for (const childhoodFavs of myArr) {
    console.log(childhoodFavs);
};


let greetings = "Hello World!";

for (const greet of greetings) {

    // if (greet == " ") {
    //     console.log("empty space detedted");
    //     continue;
    // }

    if (greet == " ") {
        console.log("empty space detedted");
        continue;
    }

    console.log(`Each Character is ${greet}`);
}


// Maps

const map = new Map();
map.set('IN', "India");
map.set("CN", "Canada");
map.set("SA", "South Africa");

// Values must be unique, unlike the js objects the order is remembered by map and order doesnt changes. It is not iterable.

console.log(map);

for (const [key , value] of map) {
    console.log(`${key} => ${value}`);
}


const myObj = {
    "game1": "NFS",
    "game2": "Spiderman",
    "game3": "Super Mario"
};

// for (const keys of myObj) {   it doesnt work with objects
//     console.log(keys);
// }



