let a = 300
if(true){
    let a = 30
    const b = 20
    console.log("Inner: ", a);
    
}
// console.log(a);

function one(){
    const username = "saket"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    console.log(website);

    two()
    
}
one()