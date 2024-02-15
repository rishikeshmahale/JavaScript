console.log("Map , filter , reduce");

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const nums = myNums.map((num) => { return num + 10});
// console.log(nums);

const newNums = [];

const myNewNums = myNums.map((num) => {
    const newNum = num + 10;
    newNums.push(newNum);            // kyu !!! hila dala naaa...?
});
// console.log(typeof newNums);
// console.log(`newNums : ${newNums}`);
console.log("newNums : ", newNums);









