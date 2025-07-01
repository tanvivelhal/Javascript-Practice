const b = "i am const"
// let a = "i am let"

{
let a = "i am let"
console.log(a)
}

console.log(a)

// let and const => block scope 
// var => global scope

{
    let username = "suvesh"
    {
        let email = "suvesh@gmail.com"
        {
            let pass = "password"
            console.log(email)
        }      
    } 
}

numone()
function numone(){
    console.log("hi i am function bro")
}
const numThree = function(){
    console.log("hi this is anonmyous function")
}
numThree()