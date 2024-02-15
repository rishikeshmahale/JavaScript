console.log("While loop");

// while (condition) {
//     code block
// }

let index = 0;

while (index <= 10) {
    console.log(`Value of index is ${index}`);
    // index++;  // condition is necessary otherwise the code will run infinitely
    index = index + 2;   // 0,2,4,6,8,10
};



let myArr = ["Doraemon", "Shinchan", "Perman", "Goku", "Vegeta", "Hatori"];

let arr = 0;

while (arr < myArr.length) {
    console.log(`Value is ${myArr[arr]}`);
    // arr = arr + 1;
    // arr += 1;
    arr++;
}


let score = 1;

do {
    console.log(`Score is ${score}`);
    score++
} while (score < 10);

