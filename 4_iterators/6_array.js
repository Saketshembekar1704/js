const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNum = num.map((num) => num + 10)
const newNum = num
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num) => num >= 51)
console.log(newNum);


//when chaining happens, next method will
// recieve value of previous method