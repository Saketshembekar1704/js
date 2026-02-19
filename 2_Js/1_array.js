const arr = [0, 1, 3, 4, 5, true, undefined, null]
// console.log(arr[7]);

/*program converts true to 1 so everything from 1 till the end will be deleted and op will be [0]
pop removes last element from the array*/
// arr.splice(true)
// console.log(arr);

arr.splice(5) //op will be [0,1,3,4,5]
console.log(arr);

