// const coding = ["js", "ruby", "python", "java", "cpp"] 

// const values = coding.forEach( (item) =>{
//     console.log(item);

// } )
// console.log(values);  for each loop doesn't return any values

// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNum = num.filter((num) => num > 4)
// console.log(newNum);
// const newNum = num.filter( (num) => {
// return num > 4})

// if curly braces is used, return keyword must be 
// used to return the value, if done in one line return keyword not needed

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = []
nums.forEach((num) => {
    if (num>4){
        newNums.push(num)
    } 
})
console.log(newNums);
