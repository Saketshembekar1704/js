const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);

}

const greetings = "Hello"

for (const greet of greetings) {
    // console.log(`Each char is: ${greet}`);

}

const map = new Map()
map.set('IN', "India")
map.set('UK', "United Kingdom")
map.set('FR', "France")
//insertion order preserved and no duplicates allowed
// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':', value);
    
}

const obj = {
    'game1' : 'nfs',
    'game2' : 'gta',
    'game3' : 'spiderman'
}

// for (const [key , value] of obj) {
//     console.log(key, ':', value);
// }  Objects are not iteratable
