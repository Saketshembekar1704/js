// const marvel = ["ironman", "thor", "hulk"]
// const dc = ["flash", "batman", "superman"]

// // marvel.push(dc)          
// // console.log(marvel);     adds entire dc array as single element

// const allHeroes = marvel.concat(dc)     // concat returns new array therefore new variable
// console.log(allHeroes);                 // push returns original array


const arr = [0,1,2,3, [4,5], 6, [7,8,9]]
const newArr = arr.flat(Infinity)
console.log(newArr);

